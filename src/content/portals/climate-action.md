---
title: "Climate Action Contributor Portal"
project_slug: "climate-action-knowledge-map"
project_type: "challenge"
code: "CA3X"
pubDate: 2026-06-10
---

## Team

| Team Member | Role | Focus Area |
|-------------|------|------------|
| Francis Wang | Lead Researcher | System architecture, knowledge curation, practitioner interviews |
| Amanda Wu | UX/UI Design | Intentional human-computer interaction for navigating the knowledge base |
| Alex Li | UX/UI Design | Intentional human-computer interaction for navigating the knowledge base |
| Maria Smirnova | Indigenous Knowledge Research | TEK sovereignty guidelines, curating public-domain Indigenous knowledge |
| Arwin Tio | Data Architecture | Graph DB, data ingestion pipeline, deployment |
| James Cheng | Platform & Content | Resource gathering, interview processing, platform engineering |

## Demo Components

> **Note:** The knowledge graph navigation and interaction design is TBD pending input from Amanda and Alex. The following describes the functional scope; final UX decisions will be informed by their design research.

### 1. Knowledge Graph

- Interconnected nodes for regenerative techniques (swale, berm, check dam, terracing, guilds, food forest...)
- Functional relationships: dependencies, sequences, complements
- Multiple lenses: climate adaptation, biodiversity, food security, water management
- Customizable filters: geography, technique type, evidence level
- Scale target: hundreds of connected patterns minimum

### 2. Practitioner Navigation

- Input conditions (soil type, climate, slope) → prioritized technique recommendations
- Patterns from multiple traditions: permaculture, academic ecology, TEK
- Each pattern includes: problem, mechanism, evidence, implementation steps, outcomes
- AI-assisted recommendations based on condition matching

### 3. TEK Sovereignty Demonstration

**Champion needed:** Someone to gather publicly available Indigenous knowledge and demonstrate the sovereignty mechanism.

- Uses **publicly available** Indigenous ecological knowledge as demonstration data (NOT private/protected knowledge)
- Core feature: a community contributes knowledge → affiliates can access → community retains ability to **withdraw contributions** at any time
- Demonstrates data sovereignty + community-controlled access + graceful withdrawal
- CARE Principles (Collective benefit, Authority to control, Responsibility, Ethics) guide all TEK inclusion

### 4. Contribution Workflow

- **Interviews:** Semi-structured practitioner interviews to gather information and context for the knowledge graph
- **Instructional interviews:** Learning from experts to build domain understanding
- Community contribution forms for proposing new patterns
- Confidence tiers: stub → seed → validated → canonical
- Community moderation per bioregion

## Data Sources & Collection Strategy

### Interviews (Primary Method)
- Francis conducts personal practitioner interviews
- Semi-structured format: gather stories, context, and technique knowledge
- Recorded → transcripts → AI-processed into knowledge atoms
- Team members can also conduct interviews and contribute

### Book Processing
- Backlog of permaculture, ecology, and land management books
- Bulk AI processing into structured patterns
- Each pattern: problem, mechanism, evidence, implementation, outcomes

### AI Research Agents
- Dispatched for large-scale information gathering from academic and practitioner sources
- Structured output feeding directly into graph

### Existing Knowledge
- Permaculture atoms already curated: Swale, Berm, Check Dam, Terracing, Catchment, Runoff, Zone Planning, Guilds, Succession, Water Systems, Hugelkultur, and more

### Indigenous Knowledge (Public Domain)
- Maria researches and curates publicly available Indigenous ecological knowledge
- Fire management, water harvesting, soil building, food forest systems
- Used as demonstration data for TEK sovereignty mechanism

## Deployment

This is an **openly accessible knowledge map:**

- No login required to browse and learn
- Anyone interested can explore the knowledge base
- The bigger and more formed the map, the better
- A genuine public good for climate action practitioners worldwide
- TEK sections demonstrate the withdrawal mechanism

## Milestones

| Date | Milestone | Owner |
|------|-----------|-------|
| Jun 12 | Interview template/outline finalized | Francis |
| Jun 13–25 | Ongoing interview sprint | Francis + team |
| Jun 15 | Existing permaculture atoms exported as graph payload | James + Francis |
| Jun 15 | Maria begins Indigenous knowledge research (public domain) | Maria |
| Jun 18 | App scaffolded (standalone, open-access deployment) | Arwin |
| Jun 18 | Amanda + Alex begin UX research and interaction design | Amanda + Alex |
| Jun 20 | Book processing pipeline operational (bulk ingest) | Francis |
| Jun 22 | TEK sovereignty demo: contribute → access → withdraw | Arwin + Francis |
| Jun 25 | Full map navigable, open access, with TEK withdrawal demo | All |
| Jun 28 | Pitch rehearsal + video | All |
| Jun 30 | Deployed, open-access + video recorded | All |
| Jul 2 | Planet Track pitch competition | All |

## Task Assignments

### Amanda Wu & Alex Li (UX/UI)
- [ ] Conduct design research for knowledge map navigation patterns
- [ ] Define interaction model for exploring the graph (how users discover, filter, relate)
- [ ] Design the practitioner input flow (conditions → recommendations)
- [ ] Design TEK sovereignty UX (contribute, access, withdraw flows)
- [ ] Create visual design system for the app

### Maria Smirnova (Indigenous Knowledge)
- [ ] Research publicly available Indigenous ecological knowledge
- [ ] Curate into structured patterns (problem, mechanism, evidence, implementation)
- [ ] Develop TEK sovereignty guidelines based on CARE Principles
- [ ] Identify demonstration dataset for withdrawal mechanism
- [ ] Ensure all material is genuinely public domain / open access

### Arwin Tio (Data Architecture)
- [ ] Configure Neo4j schema for pattern atoms + relationships
- [ ] Build data ingestion pipeline (interview transcripts → atoms)
- [ ] Scaffold standalone app (open-access deployment)
- [ ] Implement TEK withdrawal mechanism (community → grant → revoke)
- [ ] Deploy to home cluster

### James Cheng (Platform & Content)
- [ ] Export existing Sandbox permaculture atoms into graph format
- [ ] Process interview transcripts into structured patterns
- [ ] Gather additional resources (papers, practitioner guides, open data)
- [ ] Build contribution workflow UI

### Francis Wang (Lead)
- [ ] Conduct personal practitioner interviews
- [ ] System architecture and pattern schema design
- [ ] Book processing pipeline (AI-assisted bulk ingest)
- [ ] AI research agent deployment for large-scale collection
- [ ] Pitch narrative and presentation delivery
- [ ] Coordination across team

[View Challenge Page](/challenges/climate-action-knowledge-map/)
