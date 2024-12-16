# Use Node.js 18 as the base image
FROM node:18-alpine

# Create the application directory
WORKDIR /app

# Install Python and build tools
RUN apk add --no-cache \
    python3 \
    py3-pip \
    build-base

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY . .

COPY .env.local .env

# Build the application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the application in production mode
CMD ["npm", "start"]
