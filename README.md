# ML Distribution Solution

Progressive web stack for client projects.

## Stack

- **Frontend**: Nuxt 3 (Vue 3) + Tailwind CSS v4
- **Backend**: PocketBase (Phase 2+)
- **Deployment**: GitHub Pages (Phase 1) → Coolify/Docker (Phase 2+)

## Project Structure

```
├── frontend/          # Nuxt 3 application
│   ├── pages/         # File-based routing
│   ├── components/    # Reusable components
│   ├── composables/   # Shared logic
│   ├── layouts/       # Page layouts
│   └── content/       # Markdown content (@nuxt/content)
├── backend/           # PocketBase (Phase 2+)
│   ├── pb_migrations/ # Schema migrations
│   └── pb_hooks/      # Custom JS hooks
└── .github/           # GitHub Actions (Pages deploy)
```

## Getting Started

```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:3000`

## Phase Evolution Guide

### Phase 1: Static Site (current)
- Nuxt generates static HTML/CSS/JS via `nuxt generate`
- Deployed to GitHub Pages (free)
- Content managed via Markdown files in `frontend/content/`

### Phase 2: Dynamic Site (blog, projects)
1. Change `nitro.preset` from `'static'` to `'node-server'` in `nuxt.config.ts`
2. Add `routeRules` for hybrid rendering:
   ```ts
   routeRules: {
     '/blog/**': { swr: 3600 },
     '/projects/**': { swr: 3600 },
   }
   ```
3. Start PocketBase: `cd backend && ./pocketbase serve`
4. Create blog/project collections in PocketBase admin (`http://localhost:8090/_/`)
5. Switch deployment from GitHub Pages to Coolify (Docker)

### Phase 3: E-commerce
1. Add product/cart/order collections in PocketBase
2. Add Stripe integration via Nuxt server routes (`frontend/server/api/`)
3. Create cart composable and checkout flow

### Phase 4: Web Application
1. Enable PocketBase auth (login/register composables)
2. Add real-time subscriptions for live updates
3. Add PocketBase JS hooks for business logic (`backend/pb_hooks/`)
4. Implement role-based access control
