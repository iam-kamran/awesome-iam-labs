# IAM field lab workbook

This workbook is designed around realistic IAM tasks. Complete the investigation and write down the evidence before changing configuration.

## Lab 01 — Entra user and group investigation with Graph PowerShell

**Scenario:** A user reports that they cannot access an assigned enterprise application. You need to establish identity state and group membership before escalating.

**Prerequisites:** Non-production Entra tenant, PowerShell 7, Microsoft Graph PowerShell SDK, and read permissions appropriate to the queries. Use least privilege and your tenant's approved access process.

**Tasks**

1. Connect to Microsoft Graph using the minimum required delegated scopes.
2. Retrieve the target user and confirm account-enabled state, user principal name and object ID.
3. Inspect direct group membership and distinguish groups from other directory objects.
4. Confirm whether the expected application assignment is represented by the relevant group or direct assignment.
5. Record what you can prove and what requires sign-in logs or application-side evidence.

**Useful command pattern**

```powershell
Connect-MgGraph -Scopes "User.Read.All", "GroupMember.Read.All"
Get-MgContext

$user = Get-MgUser -UserId "test.user@contoso.com" `
    -Property Id,DisplayName,UserPrincipalName,AccountEnabled

$user | Select-Object Id, DisplayName, UserPrincipalName, AccountEnabled

Get-MgUserMemberOf -UserId $user.Id
```

Replace the example UPN with a test identity. Permissions and available properties depend on tenant policy and Graph module version. Discover properties when needed with:

```powershell
<Graph-Command> | Get-Member -MemberType Property
```

**Expected outcome:** You can state whether the account is enabled and identify its direct memberships. You do not claim that group membership alone proves successful SSO or application authorization.

**Negative test:** Repeat with a disabled test account or a user intentionally outside the expected access group.

**Evidence to capture:** timestamp, sanitized UPN, account-enabled state, object ID (if safe for your notes), group display names/IDs, command output and the next evidence source needed.

## Lab 02 — SAML / OIDC SSO failure triage

**Scenario:** A user can authenticate at the identity provider but the application rejects the federation transaction.

**Tasks**

1. Determine whether the flow is SP-initiated or IdP-initiated.
2. Capture the browser network transaction in a safe test session.
3. For SAML, inspect issuer, audience, recipient/destination, ACS URL, time conditions, signature and request correlation where applicable.
4. For OIDC, inspect redirect URI, state, nonce, authorization code exchange, PKCE and token audience/issuer.
5. Separate IdP authentication success from service-provider token/assertion acceptance and in-app authorization.

**Expected outcome:** You can identify the failing boundary and explain why an HTTP 200 or successful IdP login does not necessarily mean the app accepted the assertion/token.

**Negative test:** Compare a known-good test app/user with the failing configuration. Do not edit production endpoints to test a theory.

**Evidence to capture:** flow type, sanitized protocol fields, timestamps, correlation/request IDs and the exact validation check that failed. Never commit raw assertions, bearer tokens or session cookies.

## Lab 03 — Okta app assignment and policy troubleshooting

**Scenario:** A user sees an application tile but cannot complete sign-on, or cannot see an application they expect to use.

**Tasks**

1. Confirm the user is active and the expected group membership is present.
2. Check app assignment and determine whether access is direct or group-based.
3. Identify the applicable authenticator enrollment and app sign-on policy rules.
4. Review the System Log for the transaction and correlate by user, app and time.
5. If provisioning is in scope, inspect the downstream account state separately from SSO.

**Expected outcome:** You can distinguish tile visibility/assignment, authentication policy evaluation, SSO protocol configuration and downstream provisioning.

**Negative test:** Use a second test user who is intentionally not assigned to the app.

**Evidence to capture:** user/app identifiers in sanitized form, group assignment, relevant policy rule, System Log event and downstream provisioning state.

## Lab 04 — SailPoint IdentityIQ application onboarding design

**Scenario:** An application owner wants an application onboarded to centralized access requests and lifecycle provisioning.

**Tasks**

1. Identify the application owner, technical owner, authoritative account source and account correlation key.
2. Define account and entitlement schemas and identify high-risk permissions.
3. Map business access bundles to technical entitlements; identify birthright and requestable access.
4. Document approval, SoD, provisioning and deprovisioning requirements.
5. Define aggregation, reconciliation, certification and exception handling.

**Expected outcome:** Produce an onboarding blueprint that a development team can implement and an auditor can trace.

**Negative test:** Describe what happens when the target account already exists, an entitlement is invalid, approval is rejected or provisioning fails.

**Evidence to capture:** sanitized schema, entitlement mapping, role/access bundle matrix, approval matrix, lifecycle matrix and error-handling design.

## Lab 05 — Active Directory integration architecture review

**Scenario:** An organization is planning to connect one or more AD domains to a cloud identity provider.

**Tasks**

1. Draw the forest/domain layout and identify trusts, DNS dependencies and domain controllers.
2. Place directory agents based on network zones, availability and operational ownership.
3. Document required outbound connectivity, proxy/firewall controls and monitoring.
4. Define import scope, account matching, profile source and delegated authentication decisions.
5. Define failover, agent upgrade, credential rotation and incident procedures.

**Expected outcome:** Produce a reviewable architecture and a list of assumptions that must be verified with the product's current deployment documentation.

**Negative test:** Walk through agent outage, domain-controller outage, network egress block and duplicate identity scenarios.

**Evidence to capture:** sanitized topology, ports/flows verified against current vendor documentation, agent health plan, monitoring ownership and recovery steps.

## Lab 06 — Provisioning lifecycle and reconciliation

**Scenario:** A mover event changes a user's department and access requirements, while a leaver event must remove access across connected applications.

**Tasks**

1. Identify the authoritative event and attributes that trigger the lifecycle change.
2. Map joiner, mover and leaver actions to identity, group, role and application changes.
3. Identify which platform owns each provisioning action.
4. Define retry, failure alerting, reconciliation and orphan-account detection.
5. Verify the target account state after each lifecycle event.

**Expected outcome:** A lifecycle matrix with explicit owners, expected timing, evidence and exception handling.

**Negative test:** Simulate a failed downstream disable or a delayed event and explain how it is detected and resolved.

**Evidence to capture:** lifecycle event, before/after access matrix, provisioning result, reconciliation result and exception ticket reference (fictional).

## Reusable investigation notes

Copy this template for each exercise:

| Field | Notes |
|---|---|
| Scenario / lab | |
| Environment | |
| Identity / application | |
| Expected behaviour | |
| Observed behaviour | |
| Time window / correlation ID | |
| Evidence collected | |
| Failing boundary | |
| Root cause | |
| Remediation | |
| Validation / negative test | |
| Cleanup completed | |
| Remaining unknowns | |

## Completion standard

A lab is complete when you can explain the identity flow, show sanitized evidence, distinguish fact from assumption, demonstrate a negative test and describe the rollback or cleanup path.
