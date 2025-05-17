# Code Crumble

![Code Crumble Logo](public/codecrumblelogo.png)

## Overview

Code Crumble is a premium global software company website. We specialize in web development, mobile development, cloud solutions, AI & machine learning services. This repository contains our company website built with React.js, Tailwind CSS, and modern web technologies.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional interface with smooth animations
- **Service Showcases**: Detailed pages for each of our service offerings
- **Career Opportunities**: Job listings and application section
- **Contact Form**: Easy ways to get in touch with our team
- **Legal Documents**: Privacy Policy and Terms of Service pages

## Technology Stack

- **Frontend Framework**: React 18
- **Routing**: React Router 6
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js
- **Build Tool**: Create React App
- **Deployment**: Docker with serve

## Color Scheme

The website uses a dark-themed professional color palette:

- **Primary Background**: `#0A0A0A` (Dark Black)
- **Secondary Background**: `#111111` (Slightly lighter Black)
- **Accent Color**: Blue tones
- **Text Colors**:
  - Primary White: `#FFFFFF`
  - Secondary Gray: `#CCCCCC`
  - Gray (muted): `#888888`
  - Accent Text: Various blue shades
- **Border Color**: `#333333`
- **Hover States**: Lighter variations of the base colors

## Local Development

### Prerequisites

- Node.js 16+ and npm
- Git

### Setup Instructions

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/code-crumble.git
   cd code-crumble
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Docker Deployment

### Building the Docker Image

1. Make sure Docker is installed on your system
2. Build the Docker image:
   ```bash
   docker build -t code-crumble:latest .
   ```

3. Run the Docker container:
   ```bash
   docker run -d -p 5569:5569 --name code-crumble-app code-crumble:latest
   ```

4. Access the application at `http://localhost:5569`

### Using Docker Compose (Alternative)

1. Use the included `docker-compose.yml` file:
   ```yaml
   version: '3'
   services:
     web:
       build: .
       ports:
         - "5569:5569"
       restart: always
       container_name: code-crumble-app
       environment:
         - NODE_ENV=production
   ```

2. Run with Docker Compose:
   ```bash
   docker-compose up -d
   ```

## Project Structure

```
code-crumble/
├── public/
│   ├── codecrumblelogo.png
│   ├── index.html
│   └── project-images/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer.js
│   │   ├── Navbar.js
│   │   └── ...
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Services.js
│   │   ├── Privacy.js
│   │   ├── Terms.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── data.js
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

## Performance Optimization

The application has been optimized for performance:

- Code splitting with React's lazy loading
- Image optimization
- Efficient bundling of assets
- Client-side caching

## License

© 2025 Code Crumble. All rights reserved.

## Contact

For questions or inquiries, please contact us at support@codecrumble.xyz 