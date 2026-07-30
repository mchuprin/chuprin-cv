<!-- BEGIN:nextjs-agent-rules -->
 
# Next.js: ALWAYS read docs before coding
 
Before any Next.js work, find and read the relevant doc in `node_modules/next/dist/docs/`. Your training data is outdated — the docs are the source of truth.
 
<!-- END:nextjs-agent-rules -->

# File Editing Rules

After every file edit, list all modified files with their paths so the user can easily review changes.

# FSD: Constants and Types

When creating constants or types, place them in the `model/` layer of the corresponding FSD slice:

- **Constants** → `model/constants.ts`
- **Types** → `model/types.ts`

Exception: component prop types (`interface XxxProps`) stay in the component file.