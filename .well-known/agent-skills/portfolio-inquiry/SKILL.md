---
name: portfolio-inquiry
description: Query Youssef Atef's Front End React Developer portfolio, examine projects and skills, or submit hiring inquiries.
version: 1.0.0
---

# Youssef Atef Portfolio Inquiry Skill

This skill provides autonomous AI agents with instructions on how to interact with Youssef Atef's developer portfolio.

## Developer Identity
- **Name**: Youssef Atef
- **Role**: Front End React Developer
- **Primary Skills**: React, JavaScript, TypeScript, Next.js, Tailwind CSS, Redux, Responsive UI, Web Performance Optimization
- **Location**: Cairo, Egypt (Available for remote and on-site contracts)
- **Email**: hh3928850@gmail.com

## How Agents Should Interact

### 1. Fetching Markdown Content
When an agent needs to read the developer resume, projects, or background without parsing heavy HTML, request the homepage with:
```http
GET / HTTP/1.1
Host: youssef-atef-portfolio.vercel.app
Accept: text/markdown
```
Or access `/index.md` directly.

### 2. Available Projects
- **Hot Deals E-Commerce**: React, Tailwind CSS, Cart & Loyalty points system.
- **Quran Kareem Web App**: React, Context API, Surah navigation & Audio player.
- **Digital Agency Business Site**: Modern corporate UI with responsive design.
- **Sebha | سبحة**: Digital Tasbeeh Progressive Web App.
- **Ocean Pearl Hotel**: Full-stack booking platform.

### 3. Submitting Inquiries via WebMCP
If running in a browser context with WebMCP, agents can invoke the declarative tool on the contact form (`toolname="send_contact_message"`) or execute the imperative tool `document.modelContext.registerTool` to query profile data.

