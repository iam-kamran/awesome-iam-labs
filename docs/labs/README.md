# IAM lab learning hub

Use this page as the practical entry point. Each exercise should produce evidence you can explain in an interview or operational handover—not merely a screenshot showing a green status.

## Pick a lab track

| Track | What you practise | Suggested starting point |
|---|---|---|
| Entra operations | User, group, sign-in and access investigation using Microsoft Graph PowerShell | Lab 01 |
| Federation / SSO | SAML and OIDC transaction analysis | Lab 02 |
| Okta administration | Directory, group, app assignment, policy and provisioning checks | Lab 03 |
| IGA / SailPoint | Application onboarding, entitlement modelling and provisioning design | Lab 04 |
| Active Directory integration | Directory agent, sync, connectivity and lifecycle architecture | Lab 05 |
| Workload identity | Secretless authentication and federated trust | Existing [CI/CD and Workload Identity Labs](../guides/07-CICD-Workload-Identity-Labs.md) |

## Lab standards

Every lab follows the same evidence-driven loop:

1. **Scope:** state the objective, prerequisites, permissions and safety boundaries.
2. **Observe:** collect baseline state before changing anything.
3. **Investigate:** use a small number of targeted checks to isolate the failing control plane or trust boundary.
4. **Validate:** prove the expected outcome and at least one negative case.
5. **Document:** capture sanitized evidence, root cause and remediation.
6. **Clean up:** remove test objects or restore the initial state.

## Progress tracker

Use the checkboxes as a personal checklist while working through this repository. They are not synchronized to an account or stored as server-side progress.

- [ ] Lab 01 — Entra user and group investigation with Graph PowerShell
- [ ] Lab 02 — SAML / OIDC SSO failure triage
- [ ] Lab 03 — Okta app assignment and policy troubleshooting
- [ ] Lab 04 — SailPoint application onboarding design
- [ ] Lab 05 — Active Directory integration architecture review
- [ ] Lab 06 — Provisioning lifecycle and reconciliation

Open the [field lab workbook](field-lab-workbook.md) for scenarios, tasks, expected outcomes and evidence templates.

## Lab environment safety

- Use a dedicated non-production tenant or sandbox.
- Use test identities and non-sensitive attributes.
- Request only the minimum roles needed for the exercise.
- Never paste access tokens, client secrets, private keys, passwords or customer data into notes or commits.
- Check service licensing and cloud-resource costs before enabling features.
- Avoid destructive actions unless the lab explicitly calls for them and includes a recovery plan.
