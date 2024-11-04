# Use Node.js official image as a base
FROM node:18

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

COPY . .
# Copy app source code

# Compile TypeScript
RUN npm run build

# Expose the application port
EXPOSE 3000

# Start the app
CMD ["node", "dist/server.js"]

