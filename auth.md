# Auth.md

Welcome to the agent interface for the portfolio of **Youssef Atef**, Front End React Developer.

This document describes how autonomous AI agents, coding assistants, and automated clients register, authenticate, and interact with `https://youssef-atef-portfolio.vercel.app`.

---

## Agent Registration

Autonomous agents can register programmatically without requiring human interaction or browser-based OAuth consent screens.

### Registration Modes
1. **Public / Unauthenticated Access (Default)**:
   - For reading developer profile information, skills, resumes, and projects, **no authentication or registration is required**.
   - Agents may make anonymous requests directly to all endpoints and discovery manifests.

2. **Agent-Verified Registration**:
   - Automated agents representing a verified provider (e.g., Anthropic, OpenAI, Google) may register using an Identity Assertion (ID-JAG / Identity Assertion Authorization Grant).
   - **Registration URI**: `https://youssef-atef-portfolio.vercel.app/agent/register`
   - **Supported Identity Types**: `agent`, `anonymous`, `user_claimed`
   - **Supported Credential Types**: `none`, `bearer`

### Registration Request Shape

To register an agent session, send a `POST` request to the registration endpoint:

```http
POST /agent/register HTTP/1.1
Host: youssef-atef-portfolio.vercel.app
Content-Type: application/x-www-form-urlencoded

grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer
&assertion=<ID-JAG_IDENTITY_ASSERTION>
&requested_scopes=public+read:profile+read:projects
```

### Registration Response

Upon successful registration, the service returns a scoped token representation:

```json
{
  "access_token": "ya_agent_public_session_token",
  "token_type": "Bearer",
  "expires_in": 86400,
  "scope": "public read:profile read:projects"
}
```

---

## User Claim Ceremony

For actions requiring human user authorization (such as sending high-volume direct messages or contract proposals), agents utilize the claim flow:

1. **Initiate Claim**: Agent receives a verification URI and user code.
2. **User Verification**: User visits the `claim_url` (`https://youssef-atef-portfolio.vercel.app/auth.md`) to confirm agent identity.
3. **Session Binding**: Upon confirmation, the session is bound to the user's verified communication channel.
4. **Revocation**: Access can be revoked anytime via the `revocation_url`.

---

## Scopes Supported

| Scope | Description | Access Level |
| :--- | :--- | :--- |
| `public` | Full read access to public portfolio, resume, and bio | Free / No auth required |
| `read:profile` | Machine-readable profile, skill metrics, and experience | Free / No auth required |
| `read:projects` | Detailed project catalog, source code links, and live demos | Free / No auth required |

---

## Machine-Readable Discovery Endpoints

- **OAuth Protected Resource Metadata (RFC 9728)**: [/.well-known/oauth-protected-resource](/.well-known/oauth-protected-resource)
- **OAuth Authorization Server Metadata**: [/.well-known/oauth-authorization-server](/.well-known/oauth-authorization-server)
- **OpenID Connect Configuration**: [/.well-known/openid-configuration](/.well-known/openid-configuration)
- **API Catalog (RFC 9727)**: [/.well-known/api-catalog](/.well-known/api-catalog)
- **Agentic Resource Discovery (ARD)**: [/.well-known/ai-catalog.json](/.well-known/ai-catalog.json)
- **Agent Skills Discovery Index**: [/.well-known/agent-skills/index.json](/.well-known/agent-skills/index.json)
- **Model Context Protocol (MCP) Card**: [/.well-known/mcp/server-card.json](/.well-known/mcp/server-card.json)
- **Markdown for Agents**: Send `Accept: text/markdown` or fetch [/index.md](/index.md).
