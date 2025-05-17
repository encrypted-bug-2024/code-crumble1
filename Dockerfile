FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build the app
RUN npm run build

# Install serve for a production static server
RUN npm install -g serve

# Expose port 5569
EXPOSE 5569

# Start the app
CMD ["serve", "-s", "build", "-l", "5569"] 