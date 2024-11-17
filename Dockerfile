# Stage 1: Development Image
FROM node:20.18.0-alpine AS development

WORKDIR /src/app

# Copy package files and install all dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the TypeScript project (outputs to 'dist')
RUN npm run build

# Stage 2: Production Image
FROM node:20.18.0-alpine AS production

WORKDIR /src/app

# Copy package files and install only production dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy built application from the development stage
COPY --from=development /src/app/dist ./dist

# Start the application using the built file
CMD ["node", "dist/index.js"]
