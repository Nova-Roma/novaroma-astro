---
title: "Living Archive R.O.M.A.™ Contributor Portal"
project_slug: "perceptiosphere"
project_type: "challenge"
code: "RM4K"
pubDate: 2026-06-10
---

## Team

| Team Member | Role | Focus Area |
|-------------|------|------------|
| Francis Wang | Lead Researcher & Architect | Data architecture, system design, CORE protocol, overall direction |
| Barry Wylant | Academic Advisor (DDes) | Research guidance, visual storytelling |
| Larry Smith | Academic Advisor (UWaterloo) | Entrepreneurship, innovation ecosystems, knowledge economics |
| Arwin Tio | Technical Lead | Neo4j/pgvector implementation, graph API, distributed systems |
| James Cheng | Content & Community | Storyline discovery, anthology curation, community engagement |
| Parth Sharma | Student Contributor | Perspective curation and storytelling |

## Three Demo Layers

### 1. Public Art Display — Wayne Constellation

- Force-directed graph of **5,000+ nodes** minimum (students, ventures, concepts, relationships)
- Constellation aesthetic: colours and lights that pulse in and out — visualizing the complexity of the data
- Not an interface — an art installation. The complexity itself is the statement.
- May deploy a local snapshot version for speed at physical installations; live version for online access
- Web-based installation accessible via QR codes at partner locations

### 2. Interactive Kiosk

- Human-navigable interface into the constellation
- Zoom, filter, explore relationships at interactable information density
- Wayne's network highlighted as a subset within the greater knowledge mesh
- Temporal navigation across cohort years
- Tabbed views: Cohorts, Ventures, Concept Cloud, Milestones

### 3. Anthologies & Storylines

- Curated story collections told from multiple perspectives
- Scrolling narrative format suitable for art installation display
- Student perspectives, faculty perspectives, alumni perspectives
- James discovers interesting storylines within the knowledge mesh
- Parth contributes a student perspective story — demonstrating collection

## Community Knowledge Protocol

The core innovation: **multiple knowledge meshes curated by different people or entities, composed and made available to this project.**

- R.O.M.A. has its own knowledge mesh that it owns as an entity
- Other affiliated practitioners/entities curate their own knowledge meshes
- These external meshes can be composed into and made available to R.O.M.A.
- The community owner or curator of the receiving entity (R.O.M.A.) has approval authority over contributions made from affiliated networks
- This interaction protocol — how meshes compose, how contributions are proposed, reviewed, and accepted — is a key part of this project's development scope

### Key Principles

- **Sovereignty**: Each mesh owner controls what they share and can withdraw contributions
- **Composition**: Different meshes can be overlaid without losing individual integrity
- **Approval**: The receiving community approves what enters their collective view
- **Attribution**: Every contribution traces back to its source mesh and curator

## Milestones

| Date | Milestone | Owner |
|------|-----------|-------|
| Jun 13 | DDes Symposium demo: constellation + community concept | Francis |
| Jun 15 | Neo4j + pgvector deployed (Docker, cluster-ready) | Arwin |
| Jun 17 | Graph API operational (CRUD, search, embed, storylines) | Arwin |
| Jun 18 | Community contribution protocol documented | James + Francis |
| Jun 20 | Multi-mesh view: individual meshes vs composed collective | Arwin + Francis |
| Jun 22 | First anthology/storyline curated from Wayne mesh | James |
| Jun 22 | Parth: student perspective story contributed | Parth |
| Jun 25 | Full demo: art display (5000+ nodes) + kiosk + anthology | All |
| Jun 28 | Pitch deck + video script finalized | Francis |
| Jun 30 | R.O.M.A. deployed + video recorded | All |
| Jul 7 | Grand Prize + University Research pitch | All |

## Task Assignments

### Arwin Tio (Technical Lead)
- [ ] Deploy Neo4j + pgvector in Docker by Jun 15
- [ ] Build graph API: CRUD atoms, relationships, search, embeddings
- [ ] Design data pipeline for 5,000+ node visualization
- [ ] Implement multi-mesh composition mechanism (accept/reject contributions)
- [ ] Deploy to home cluster (Tailscale SSH)
- [ ] Set up local snapshot deployment for physical installations

### James Cheng (Content & Community)
- [ ] Research Wayne's intellectual network — identify storylines
- [ ] Curate first anthology (3-5 stories from different perspectives)
- [ ] Document community contribution protocol (how meshes compose)
- [ ] Contribute personal knowledge atoms to demonstrate the collective
- [ ] Build interactive anthology/storyline navigation

### Parth Sharma (Student Contributor)
- [ ] Use the system as designed — explore, discover, navigate
- [ ] Write a student perspective story for the anthology
- [ ] Contribute knowledge atoms from student experience
- [ ] Help tell the story of how a student benefits from and contributes back to the mesh

### Francis Wang (Architect & Direction)
- [ ] Overall system architecture and CORE protocol design
- [ ] Art display visualization (constellation, 5000+ nodes)
- [ ] Interactive kiosk design
- [ ] Multi-mesh composition protocol specification
- [ ] Pitch narrative and presentation delivery
- [ ] Coordination across all team members

[View Challenge Page](/challenges/perceptiosphere/)
