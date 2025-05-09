# Use a specific Node.js version based on build argument
ARG NODE_VERSION=21.5.0
FROM node:${NODE_VERSION}-alpine

# Set working directory
WORKDIR /

# Copy only package files first to optimize layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
