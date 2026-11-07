# Awesome IAM Labs

<p align="center">
  <strong>Practical identity engineering, from first principles to enterprise operations.</strong>
  <br />
  Vendor-neutral foundations • Hands-on labs • Troubleshooting playbooks • Architecture thinking
</p>

<p align="center">
  <a href="https://github.com/iam-kamran/awesome-iam-labs/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/iam-kamran/awesome-iam-labs?style=for-the-badge&logo=github&color=7c3aed"></a>
  <a href="https://github.com/iam-kamran/awesome-iam-labs/network/members"><img alt="Forks" src="https://img.shields.io/github/forks/iam-kamran/awesome-iam-labs?style=for-the-badge&logo=github&color=2563eb"></a>
  <a href="https://github.com/iam-kamran/awesome-iam-labs/commits/main"><img alt="Last commit" src="https://img.shields.io/github/last-commit/iam-kamran/awesome-iam-labs?style=for-the-badge&color=0891b2"></a>
</p>

<p align="center">
  <a href="#start-here">Start here</a> ·
  <a href="#the-library">Explore the library</a> ·
  <a href="#learning-path">Learning path</a> ·
  <a href="#contribute">Contribute</a>
</p>

---

## Welcome

Identity and Access Management is easier to understand when you connect the concepts to real systems and real operational problems. This repository is a growing collection of IAM workbooks, enterprise lab scenarios, platform guides, investigation exercises, and interview preparation resources.

It is designed for people learning IAM and practitioners who want to sharpen their engineering and troubleshooting skills across **Microsoft Entra ID, Okta, SailPoint, and modern workload identity**.

> **Learn the identity model first. Then learn how each platform implements it.**

## What you will find

| Area | Explore |
|---|---|
| Identity foundations | Authentication, authorization, federation, OAuth 2.0, OIDC, SAML, tokens and access control |
| Enterprise IAM | Architecture, lifecycle management, governance, privileged access and Zero Trust |
| Microsoft Entra ID | SC-300 topics, Conditional Access, PIM, Identity Protection and Graph PowerShell |
| Okta Workforce Identity | Universal Directory, SSO, MFA, policies, provisioning and administration |
| Identity operations | Investigation workflows, incident response, access troubleshooting and audit evidence |
| IGA | SailPoint IdentityIQ, application onboarding, entitlement design and governance |
| Workload identity | CI/CD federation, managed identities, service principals and AI agent identity |
| Career preparation | Scenario-based interview questions and certification study material |

## Start here

New to IAM? Start with the foundations workbook, then work through the enterprise curriculum. You do not need to know every vendor product before you begin.

1. **[Identity Foundations Workbook](./01-IAM-Identity-Foundations-Workbook.md)** — build a reliable mental model of identity, protocols, tokens, authorization and governance.
2. **[Enterprise IAM Lab Curriculum](./02-Enterprise-IAM-Lab-Curriculum.md)** — apply those concepts to enterprise architecture and practical scenarios.
3. **[Choose a platform or practice area](#the-library)** — go deeper with Entra, Okta, SailPoint, incident response or workload identity.
4. **[Test your understanding](./03-IAM-Interview-Question-Bank.md)** — use scenario questions to explain not just what a feature does, but why it matters.

## The library

### Foundations and enterprise architecture

| Resource | What it covers |
|---|---|
| [01 · IAM Identity Foundations Workbook](./01-IAM-Identity-Foundations-Workbook.md) | Authentication vs authorization, OAuth 2.0, OIDC, JWT, SAML, federation, access control, governance and architecture mental models |
| [02 · Enterprise IAM Lab Curriculum](./02-Enterprise-IAM-Lab-Curriculum.md) | Enterprise-oriented labs across Entra, Okta, IGA, privileged access, Zero Trust and modern identity scenarios |
| [03 · IAM Interview Question Bank](./03-IAM-Interview-Question-Bank.md) | Technical questions, architecture scenarios, federation troubleshooting, governance and security discussions |

### Platform learning

| Resource | What it covers |
|---|---|
| [04 · Microsoft Entra SC-300 Master Guide](./04-Microsoft-Entra-SC300-Master-Guide.md) | Authentication, Conditional Access, Identity Protection, PIM, workload identities, governance and exam labs |
| [05 · Okta Certified Administrator Roadmap](./05-Okta-Certified-Administrator-Roadmap.md) | Universal Directory, users and groups, admin roles, SAML, MFA, policies, AD integration, provisioning and troubleshooting |
| [08 · SailPoint IdentityIQ Enterprise Lab Roadmap](./08-SailPoint-IIQ-Enterprise-25-Lab-Roadmap.md) | Enterprise IdentityIQ learning and application-governance lab scenarios |

### Operations, automation and modern identity

| Resource | What it covers |
|---|---|
| [06 · IAM First Responder Labs](./06-IAM-First-Responder-Labs.md) | Investigation and response scenarios including risky sign-ins, MFA fatigue, credential attacks, token theft and PIM |
| [07 · CI/CD and Workload Identity Labs](./07-CICD-Workload-Identity-Labs.md) | Workload identity federation, Azure DevOps, Key Vault, managed identities, IAM as Code and AI agent governance |
| [09 · Entra Portal Limitations vs PowerShell and Graph](./09-Entra-Portal-Limitations-vs-PowerShell-Graph.md) | Practical portal constraints, Graph-based alternatives and operational observations |
| [10 · Microsoft Graph PowerShell Toolkit](./10-entra_iam_microsoft_graph_toolkit.md) | A focused set of Graph commands and reusable PowerShell patterns for everyday Entra investigations |

## Learning path

Use this sequence as a suggested route, not a rigid checklist.

```text
IAM FOUNDATIONS
      |
      v
ENTERPRISE IAM CONCEPTS & LABS
      |
      +----------------------+----------------------+
      |                      |                      |
      v                      v                      v
 MICROSOFT ENTRA           OKTA                  SAILPOINT
      |                      |                      |
      +----------------------+----------------------+
                             |
                             v
                 OPERATIONS & INVESTIGATION
                             |
                             v
                WORKLOAD / CI-CD IDENTITY
                             |
                             v
                   INTERVIEW PREPARATION
```

**Already working in IAM?** Jump directly to the platform or scenario relevant to your current role, then use the foundations workbook to fill conceptual gaps.

## How to use the labs

- Read the scenario and identify the identity, resource, trust boundary and expected access.
- Build or inspect the configuration in a non-production environment.
- Validate both the expected result and a failure or negative test.
- Capture the evidence: logs, claims, assignments, policy outcomes or command output.
- Record the root cause and remediation in your own words.

Some exercises require a licensed tenant, a sandbox, cloud resources or vendor-specific tooling. Check the individual guide before starting and review any costs or prerequisites. Never test destructive changes against production identities or access.

## Who this is for

- Students and people transitioning into IAM
- Help desk, systems and cloud administrators moving into identity operations
- IAM analysts, administrators and engineers
- Security operations and cloud security practitioners
- Identity, security and solution architects
- Professionals preparing for IAM interviews or platform certifications

## Repository principles

**Practical over theoretical.** Concepts should connect to observable system behaviour.

**Vendor-aware, concept-led.** Understand the identity problem before choosing a product feature.

**Security first.** Least privilege, strong authentication, governance, auditability and safe testing matter.

**Evidence matters.** A successful lab should explain what happened and how you verified it.

## Contribute

Contributions and corrections are welcome. Useful additions include new hands-on labs, identity architecture diagrams, IGA examples, platform exercises, interview scenarios and corrections to unclear or outdated material.

Please open an issue before making a large change. For a lab contribution, include the objective, prerequisites, steps, expected result, validation evidence and cleanup instructions. Keep secrets, tenant identifiers and personal data out of screenshots and examples.

See **[CONTRIBUTING.md](./CONTRIBUTING.md)** for the contribution checklist.

## Author

**Kamran Arif**  
IAM Architecture · Identity Governance · Zero Trust · Multi-cloud Identity Engineering

- [LinkedIn](https://www.linkedin.com/in/karifa/)
- [GitHub](https://github.com/iam-kamran)

## Disclaimer

This repository is provided for educational and research purposes. Product capabilities, licensing, APIs and portal experiences can change. Validate guidance against current vendor documentation and test all configurations and scripts in an appropriately isolated environment before adapting them for production. Examples are not a substitute for your organization's security, change-management or compliance requirements.

---

<p align="center">
  <strong>The goal of IAM:</strong><br />
  The right identity gets the right access to the right resource, for the right reason, at the right time.
</p>
