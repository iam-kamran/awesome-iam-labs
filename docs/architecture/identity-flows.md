# Identity flow diagrams

These diagrams are conceptual reference flows. Validate protocol details and product-specific behaviour against the relevant implementation and current vendor documentation.

## SAML 2.0 — service-provider initiated

```mermaid
sequenceDiagram
    autonumber
    actor User
    participant Browser
    participant SP as Service Provider
    participant IdP as Identity Provider

    User->>SP: Open protected application
    SP->>Browser: Redirect with SAML AuthnRequest
    Browser->>IdP: AuthnRequest
    IdP->>User: Authenticate / apply policy
    User->>IdP: Complete authentication
    IdP->>Browser: SAML Response
    Browser->>SP: POST SAML Response to ACS
    SP->>SP: Validate signature, issuer, audience, time and request correlation
    SP-->>User: Create application session
```

**Investigation checkpoints**

- Confirm whether the flow is SP-initiated or IdP-initiated.
- For SP-initiated flow, correlate the response's `InResponseTo` with the original request.
- Validate issuer, audience, recipient/destination, time conditions, signature and ACS endpoint.
- A successful HTTP response alone does not prove that the application accepted the assertion.

## OpenID Connect — authorization code with PKCE

```mermaid
sequenceDiagram
    autonumber
    actor User
    participant App as Client Application
    participant Browser
    participant OP as OpenID Provider
    participant API as Resource API

    App->>App: Generate code_verifier and code_challenge
    App->>Browser: Redirect with authorization request + challenge
    Browser->>OP: Authorization request
    OP->>User: Authenticate / apply policy
    User->>OP: Complete authentication and consent
    OP->>Browser: Redirect with authorization code
    Browser->>App: Authorization code
    App->>OP: Exchange code + code_verifier
    OP->>App: ID token + access token
    App->>App: Validate ID token for client session
    App->>API: Call API with access token
    API->>API: Validate token and authorize request
    API-->>App: Protected resource
```

**Investigation checkpoints**

- Verify redirect URI, state, nonce and PKCE challenge/verifier handling.
- Validate the ID token for the client: issuer, audience, signature, expiry and nonce.
- Send the access token to the intended API, not the ID token.
- The API validates its own audience and authorization requirements.

## Identity lifecycle — joiner, mover, leaver

```mermaid
flowchart TD
    A[Authoritative HR event] --> B{Lifecycle event}
    B -->|Joiner| C[Create identity]
    B -->|Mover| D[Re-evaluate attributes and access]
    B -->|Leaver| E[Disable identity and revoke sessions]
    C --> F[Assign birthright access]
    D --> G[Remove obsolete access]
    D --> H[Grant approved new access]
    F --> I[Provision target accounts]
    G --> J[Reconcile entitlements]
    H --> I
    E --> K[Deprovision target accounts]
    I --> L[Verify and record evidence]
    J --> L
    K --> L
    L --> M[Audit trail]
```

**Architecture questions**

- Which system is authoritative for each identity attribute?
- Which platform owns account creation, group membership and deprovisioning?
- How are failed or delayed provisioning events detected and retried?
- How do you prove access was removed when a person leaves or changes roles?
