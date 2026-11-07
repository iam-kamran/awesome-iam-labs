# Enterprise IAM architecture patterns

These reference patterns show common trust boundaries and responsibilities. They are conceptual starting points, not prescriptive deployment designs. Adapt them to network topology, licensing, resilience, security and vendor versions.

## Microsoft Entra ID with hybrid Active Directory

\`\`\`mermaid
flowchart LR
    HR[HR / authoritative source] -->|Identity data| AD[On-premises Active Directory]
    AD -->|Password hash sync or supported auth path| Sync[Entra Connect Sync / Cloud Sync]
    Sync --> Tenant[Microsoft Entra ID]
    Tenant --> Apps[Enterprise applications]
    Tenant --> Cloud[Azure resources]
    Admin[Privileged administrators] -->|PIM / MFA / Conditional Access| Tenant
    Workload[Workload identity] -->|Federated credential / managed identity| Tenant
\`\`\`

**Design responsibilities**

| Component | Primary responsibility | Questions to validate |
|---|---|---|
| Active Directory | On-premises identities, groups and domain authentication | Which attributes and groups are authoritative? |
| Entra Connect / Cloud Sync | Synchronize selected identity objects and attributes | What is in scope, how is sync health monitored, and what is the recovery plan? |
| Entra ID | Cloud identity, authentication, application access and governance | Which policies protect users, admins and workloads? |
| Enterprise applications | Represent application trust and SSO configuration | Are identifiers, redirect/ACS URLs, claims and assignments correct? |
| Workload identity | Authenticate applications and automation | Can secrets be replaced with managed identity or federation? |

**Operational checks:** synchronization health, duplicate or conflicting identities, source-of-authority, accidental scope changes, stale accounts, Conditional Access impact and privileged role activation.

## Okta Workforce Identity with Active Directory integration

\`\`\`mermaid
flowchart LR
    AD[Active Directory forest / domains] --> Agent[Okta AD Agent group]
    Agent -->|Outbound secure connectivity| Okta[Okta Universal Directory]
    Okta --> Policy[Authenticator and sign-on policies]
    Okta --> SSO[SAML / OIDC applications]
    Okta --> Provision[Provisioning connectors]
    Provision --> SaaS[Downstream applications]
    User[Workforce user] --> Okta
\`\`\`

**Design responsibilities**

- Treat the AD agent deployment as an availability design: document agent count, placement, outbound network requirements, monitoring and upgrade ownership.
- Confirm import scope, matching rules, delegated authentication choice and profile-source precedence before enabling broad synchronization.
- Separate authentication policy decisions from application assignment and application sign-on policy decisions.
- Define provisioning ownership and lifecycle behaviour for create, update, deactivate and reactivation events.

**Troubleshooting sequence:** identify the affected user and application; inspect directory import/profile state; confirm group and app assignment; inspect authenticator and sign-on policy evaluation; review the SAML/OIDC transaction; then verify downstream provisioning and target account state.

## SailPoint IdentityIQ application onboarding

\`\`\`mermaid
flowchart TD
    Source[Authoritative identity source] --> Identity[IdentityIQ identity cube]
    AppOwner[Application owner] --> Model[Application and entitlement model]
    Model --> Connector[Connector configuration]
    Identity --> Request[Access request / lifecycle event]
    Request --> Approval[Policy and approval workflow]
    Approval --> Provision[Provisioning plan]
    Provision --> Target[Target application]
    Target --> Aggregation[Aggregation and reconciliation]
    Aggregation --> Governance[Certification, audit and reporting]
\`\`\`

**Application onboarding work products**

1. Application owner, technical contact, risk classification and authoritative account source.
2. Account schema, entitlement schema, native identity key and correlation rule.
3. Access model: roles, access profiles/bundles, birthright access and requestable access.
4. Provisioning design: create, modify, disable, enable, delete and error handling.
5. Governance: approval policy, segregation-of-duties checks, certification scope and audit evidence.
6. Reconciliation: aggregation schedule, stale account handling and orphan-account process.

## Generic access request and provisioning lifecycle

\`\`\`mermaid
sequenceDiagram
    autonumber
    actor Employee
    participant Portal as IGA / Access Request
    participant Manager
    participant Connector
    participant Target as Target Application

    Employee->>Portal: Request role / entitlement
    Portal->>Portal: Check eligibility and policy
    Portal->>Manager: Approval task (when required)
    Manager->>Portal: Approve / reject
    Portal->>Connector: Approved provisioning instruction
    Connector->>Target: Create / update account or entitlement
    Target-->>Connector: Result
    Connector-->>Portal: Provisioning status
    Portal->>Portal: Record evidence and reconcile
    Portal-->>Employee: Notify outcome
\`\`\`

**Control points:** requester identity, entitlement owner, approval separation, policy evaluation, connector execution identity, target-side result, retry/dead-letter handling and evidence retention.

## SSO troubleshooting decision path

\`\`\`mermaid
flowchart TD
    Start[User reports application access failure] --> Reach{Can user reach IdP?}
    Reach -->|No| Net[Check DNS, network, proxy and app URL]
    Reach -->|Yes| Auth{Did authentication succeed?}
    Auth -->|No| AuthLog[Inspect sign-in event, MFA and policy result]
    Auth -->|Yes| Assign{Is user assigned / eligible?}
    Assign -->|No| Access[Check group, app assignment and entitlement]
    Assign -->|Yes| Protocol{Did federation complete?}
    Protocol -->|No| ProtocolLog[Inspect request, response, claims and endpoint]
    Protocol -->|Yes| Session{Did application create a session?}
    Session -->|No| AppLog[Inspect SP / application logs and token validation]
    Session -->|Yes| Done[Check in-app authorization and resource permissions]
\`\`\`

Do not jump directly to changing configuration. Capture the transaction evidence first and isolate the failing boundary.

## Architecture review checklist

- [ ] Identity sources and attribute authority are explicit.
- [ ] Authentication, authorization and provisioning responsibilities are separated.
- [ ] Trust boundaries, network paths and service identities are documented.
- [ ] Privileged administration uses least privilege and strong authentication.
- [ ] Lifecycle events include movers and leavers, not only joiners.
- [ ] Failure, retry, reconciliation and rollback paths are defined.
- [ ] Logs and audit evidence support investigation.
- [ ] Test, staging and production environments are clearly separated.
