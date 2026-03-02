# Parkinson's Disease Research Website

An [Astro.build](https://astro.build) website for publishing Parkinson's disease research papers, formatted using [pubcss](https://github.com/thomaspark/pubcss) CSS for print-ready academic publication styles (IEEE, ACM SIG, ACM SIGCHI).

## Screenshots

**Homepage**
![Homepage](https://github.com/user-attachments/assets/8818b346-0808-4906-9a9d-e6ae74dfaae8)

**Research Paper (IEEE format)**
![Research Paper](https://github.com/user-attachments/assets/fadf53c5-769a-4d52-95a9-3926541bd473)

## Features

- **Astro.build** static site generator with content collections
- **pubcss** CSS formatting for IEEE, ACM SIG, and ACM SIGCHI publication styles
- **Markdown-based** content authoring for research papers
- **Two-column academic layout** with proper section numbering, references, and abstracts
- Responsive navigation and tag-based paper discovery

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:4321/parkinsons`.

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Adding Research Papers

Create a new Markdown file in `src/content/research/` with the following frontmatter:

```markdown
---
title: "Your Paper Title"
authors:
  - "Author Name, Degree"
abstract: >
  Your abstract text here.
date: 2024-01-15
format: ieee        # Options: ieee | acm-sig | acm-sigchi
tags:
  - Tag1
  - Tag2
---

## Introduction

Your paper content here...
```

## Publication Formats

| Format | Description |
|--------|-------------|
| `ieee` | IEEE two-column format (Times New Roman, justified) |
| `acm-sig` | ACM SIG two-column format |
| `acm-sigchi` | ACM SIGCHI two-column format (Helvetica headers) |

## Project Structure

```
├── public/
│   ├── favicon.svg
│   └── styles/
│       ├── pubcss-ieee.css
│       ├── pubcss-acm-sig.css
│       └── pubcss-acm-sigchi.css
└── src/
    ├── content/
    │   ├── config.ts              # Content collection schema
    │   └── research/              # Research paper Markdown files
    ├── layouts/
    │   ├── BaseLayout.astro       # Site navigation & footer
    │   └── ResearchLayout.astro   # Academic paper layout with pubcss
    └── pages/
        ├── index.astro            # Homepage
        └── research/
            ├── index.astro        # Research listing page
            └── [slug].astro       # Individual paper pages
```