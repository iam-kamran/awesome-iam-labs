# Microsoft Graph PowerShell: Essential Entra IAM Operations Toolkit

For Entra IAM operations, focus on mastering approximately 15 core
Microsoft Graph commands first. You do not need to learn hundreds of
commands before you can begin operational troubleshooting.

## 1. Essential Microsoft Graph command toolkit

### A. Connection and troubleshooting context

  -----------------------------------------------------------------------
  Command                             What you use it for
  ----------------------------------- -----------------------------------
  `Connect-MgGraph`                   Connect to Entra ID

  `Get-MgContext`                     Check account, tenant, scopes, and
                                      authentication context

  `Disconnect-MgGraph`                Disconnect your session
  -----------------------------------------------------------------------

### B. User investigation

  Command                   Operational use
  ------------------------- --------------------------------------------
  `Get-MgUser`              Find users and inspect attributes
  `Get-MgUserMemberOf`      Investigate group and directory membership
  `Get-MgUserOwnedObject`   Identify objects owned by a user
  `Update-MgUser`           Update user properties, when authorized

### C. Group investigation

  Command                       Operational use
  ----------------------------- ------------------------------------------
  `Get-MgGroup`                 Find groups and inspect properties
  `Get-MgGroupMember`           Identify group members
  `Get-MgUserMemberOfAsGroup`   Retrieve a user's group memberships
  `New-MgGroupMemberByRef`      Add a member to a group, when authorized

### D. Application and access investigation

  -------------------------------------------------------------------------------
  Command                                     Operational use
  ------------------------------------------- -----------------------------------
  `Get-MgServicePrincipal`                    Find enterprise applications

  `Get-MgServicePrincipalAppRoleAssignedTo`   Find users and groups assigned to
                                              an application

  `Get-MgUserAppRoleAssignment`               Find application-role assignments
                                              for a user

  `Get-MgApplication`                         Investigate app registrations
  -------------------------------------------------------------------------------

### E. Troubleshooting and discovery

  Command           Operational use
  ----------------- ------------------------------------------
  `Get-Member`      Discover properties exposed by a command
  `Select-Object`   Choose properties to display
  `Where-Object`    Filter returned objects locally
  `Export-Csv`      Export investigation results

These are your initial toolkit. Build confidence using them in realistic
investigations before expanding into less frequently used commands.

## 2. Five troubleshooting scenarios to master

Spend most of your learning time applying the commands to these
scenarios.

  --------------------------------------------------------------------------------------------
  Scenario                Investigation           Commands
  ----------------------- ----------------------- --------------------------------------------
  Disabled user still has Check account status,   `Get-MgUser`, `Get-MgUserMemberOf`,
  access                  memberships, and        `Get-MgUserAppRoleAssignment`
                          assignments             

  User cannot access an   Check the enterprise    `Get-MgServicePrincipal`,
  application             app, assignment, and    `Get-MgServicePrincipalAppRoleAssignedTo`,
                          group membership        `Get-MgUserMemberOf`

  User missing from a     Check group membership  `Get-MgGroup`, `Get-MgGroupMember`
  group                   and user attributes     

  Incorrect user          Compare Entra           `Get-MgUser`, `Update-MgUser`
  attributes              attributes against      
                          expected values         

  Application assignment  Check the app           `Get-MgApplication`,
  issue                   registration, service   `Get-MgServicePrincipal`,
                          principal, and          `Get-MgServicePrincipalAppRoleAssignedTo`
                          assignments             
  --------------------------------------------------------------------------------------------

## 3. Five PowerShell commands that make Graph useful

These are PowerShell commands rather than Microsoft Graph-specific
commands, but you will use them constantly.

  Command            Why it matters
  ------------------ ----------------------------------
  `Select-Object`    Control report output
  `Where-Object`     Filter results
  `ForEach-Object`   Process multiple users or groups
  `Export-Csv`       Produce investigation reports
  `Get-Member`       Discover object properties

Your reusable property-discovery pattern:

``` powershell
<Graph-Command> | Get-Member -MemberType Property
```

### Understand these parameter and command differences

-   `-Filter` --- filters data at the Graph/API side.
-   `-Property` --- requests additional attributes from Graph.
-   `Select-Object` --- chooses which returned attributes to display.
-   `Where-Object` --- filters objects locally in PowerShell.

## 4. Recommended learning priority

### Phase 1 --- Master these first

**Priority 1**

`Get-MgUser` · `Get-MgGroup` · `Get-MgUserMemberOf` ·
`Get-MgGroupMember` · `Get-MgServicePrincipal` ·
`Get-MgServicePrincipalAppRoleAssignedTo`

### Phase 2 --- Build operational confidence

**Priority 2**

`Get-MgUserAppRoleAssignment` · `Get-MgApplication` · `Update-MgUser` ·
`ForEach-Object` · `Export-Csv`

### Phase 3 --- Expand when required

**Priority 3**

Sign-in logs, audit logs, Conditional Access, PIM, lifecycle workflows,
provisioning, and advanced Graph API queries.

## 5. What you should become good at

Do not focus on memorizing commands. Develop a repeatable
troubleshooting pattern instead:

1.  **Identify the problem**\
    Example: a user cannot access an application.

2.  **Investigate the identity**\
    Check account status, attributes, and group memberships.

3.  **Investigate access**\
    Check the enterprise application, assignments, roles, and groups.

4.  **Identify the root cause**\
    Determine whether the issue is related to configuration, assignment,
    policy, or provisioning.

5.  **Document and report**\
    Record the evidence, findings, and remediation.

## Important distinction: Graph is not the entire troubleshooting solution

Microsoft Graph is not the complete troubleshooting solution for every
Entra issue.

-   **Sign-in failures:** also investigate Entra sign-in logs and
    Conditional Access evaluation.
-   **Provisioning failures:** investigate provisioning logs.
-   **Directory objects and access relationships:** use Graph to inspect
    users, groups, applications, and assignments.

Graph helps you investigate directory objects and access relationships,
while the relevant Entra logs provide evidence about authentication,
policy evaluation, and provisioning events.
