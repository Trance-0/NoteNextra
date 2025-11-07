# NoteNextra

Static note sharing site with minimum care

This site is powered by

- [Next.js](https://nextjs.org/)
- [Nextra](https://nextra.site/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)

## Deployment

### Deploying to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FTrance-0%2FNotechondria)

_Warning: This project is not suitable for free Vercel plan. There is insufficient memory for the build process._

### Deploying to Cloudflare Pages

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button?paid=true)](https://deploy.workers.cloudflare.com/?url=https://github.com/Trance-0/Notechondria)

### Deploying as separated docker services

Considering the memory usage for this project, it is better to deploy it as separated docker services.

```bash
docker-compose up -d -f docker/docker-compose.yaml
```

### Snippets

Update dependencies

```bash
npx npm-check-updates -u
```