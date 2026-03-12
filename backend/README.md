# Backend - PocketBase

PocketBase backend for Phase 2+ (dynamic content, auth, e-commerce).

## Not needed for Phase 1

The frontend runs as a static site in Phase 1. PocketBase is only activated when transitioning to Phase 2 (dynamic content).

## Quick Start (Phase 2+)

### Option 1: Docker

```bash
docker build -t ml-distri-pocketbase .
docker run -p 8090:8090 -v $(pwd)/pb_data:/pb/pb_data ml-distri-pocketbase
```

### Option 2: Direct binary

Download PocketBase from [pocketbase.io](https://pocketbase.io/docs/) and run:

```bash
./pocketbase serve
```

Admin UI available at `http://localhost:8090/_/`

## Directory Structure

- `pb_data/` - Database and uploaded files (gitignored, persisted via Docker volume)
- `pb_migrations/` - Schema migrations (version-controlled)
- `pb_hooks/` - JavaScript hooks for custom business logic (Phase 3+)

## Phase 2: Blog/Projects Collections

Create these collections in the PocketBase admin:

- **posts**: title (text), slug (text), content (editor), cover (file), published (bool), publishedAt (date)
- **projects**: title (text), slug (text), description (editor), thumbnail (file), url (url)

## Phase 3: E-commerce Collections

- **products**: name, slug, description, price, images, category, stock
- **orders**: user (relation), items (json), total, status, stripePaymentId
- **cart_items**: user (relation), product (relation), quantity

## Phase 4: Auth & Roles

PocketBase includes built-in auth. Configure:
- Email/password auth
- OAuth2 providers (Google, GitHub, etc.)
- API rules for collection-level access control
