# Agent Authentication & Policy (auth.md)

Welcome to the agent interface for the developer portfolio of **Youssef Atef** (Front End React Developer).

## Overview
This domain (`https://youssef-atef-portfolio.vercel.app`) serves a personal web development portfolio, project showcases, and contact capabilities.

## Authentication Policy
- **Public & Unauthenticated Access**: All developer profile information, skills, resumes, and project data are completely public. AI agents, web crawlers, and automated assistants do **not** need API tokens, registration, or OAuth authorization to read this website.
- **Resource Identifier**: `https://youssef-atef-portfolio.vercel.app`
- **Supported Identity Types**: `anonymous`, `agent`
- **Credential Types**: `none`
- **Scopes Supported**: `public`, `read:profile`, `read:projects`

## Machine-Readable Agent Endpoints
- **Agentic Resource Discovery (ARD)**: [/.well-known/ai-catalog.json](/.well-known/ai-catalog.json)
- **Agent Skills Discovery**: [/.well-known/agent-skills/index.json](/.well-known/agent-skills/index.json)
- **MCP Server Card**: [/.well-known/mcp/server-card.json](/.well-known/mcp/server-card.json)
- **API Catalog (RFC 9727)**: [/.well-known/api-catalog](/.well-known/api-catalog)
- **Markdown Version**: Send HTTP GET with `Accept: text/markdown` or access [/index.md](/index.md).

## Registration & Contact
If your agent needs to reach out for recruitment, freelance contracts, or technical collaboration, it can invoke the WebMCP tool `send_contact_message` on the page or send a message directly to `hh3928850@gmail.com`.

