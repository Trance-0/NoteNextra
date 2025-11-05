# Dockerfile for Math folders

# Source: https://github.com/vercel/next.js/blob/canary/examples/with-docker-multi-env/docker/production/Dockerfile
# syntax=docker.io/docker/dockerfile:1

FROM node:20-alpine AS base

ENV NODE_OPTIONS="--max-old-space-size=8192"

# 1. Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat git

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i; \
  else echo "Lockfile not found, use default npm install" && npm i; \
  fi

# 2. Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN ls -la

# 2.1 Remove unnecessary files for build with title starting with CSE
RUN cd ./content && find . -maxdepth 1 -type d -name "CSE*" -exec rm -rf {} +
RUN cd ./public && find . -maxdepth 1 -type d -name "CSE*" -exec rm -rf {} +

# 2.1.1 Check the updated folders
RUN cd ./content && ls -la
RUN cd ./public && ls -la

# 2.2 Update the _meta.js files in the content folder
RUN sed -i '/\/\* CSE Courses Start \*\//,/\/\* CSE Courses End \*\//d' ./content/_meta.js

# 2.2.1 Check the updated _meta.js file
RUN cat ./content/_meta.js

# This will do the trick, use the corresponding env file for each environment.
# COPY .env.production.sample .env.production
RUN npm run build

# 3. Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 4200

ENV PORT=4200

CMD HOSTNAME="0.0.0.0" node server.js