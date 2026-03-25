# ----------------------
# Builder stage
# ----------------------
FROM node:20-alpine3.19 AS builder

# Install pnpm
RUN npm install -g pnpm

# Install system dependencies
RUN apk add --no-cache libc6-compat

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source files
COPY . .

# Build Next.js app (standalone)
RUN pnpm build

# ----------------------
# Runner stage (production)
# ----------------------
FROM node:20-alpine3.19 AS runner

# Set working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy built assets from builder (standalone mode)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/next.config.js ./

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Production environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the app
CMD ["node", "server.js"]
