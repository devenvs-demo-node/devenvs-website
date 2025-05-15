# Use Node.js 22 Alpine image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies (including devDependencies)
RUN npm install

# Copy all source files
COPY . .

# Expose port
EXPOSE 3000

# Start the Next.js app in development mode (runs as root)
CMD ["npm", "run", "dev"]