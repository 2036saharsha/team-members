Team members portfolio page for SnapIT Solutions. (WIP)

---

# Development

The following topics will guide you through to setting up a dev env.

## Setup

Prisma is used to add type definitions from our database. NextJS does SSR.

```sh
npm run setup
```

## Deployment

To actively test the frontend without connecting to a real database 

```sh
npm run dev
```

To test WITH a database (you must setup postgres yourself)

```sh
npm run dev-db
```

Docker is also an option to test in production with a database (this doesn't
require you to setup postgres)

```sh
npm run docker
```
