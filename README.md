# TheraEase Blog

A modern blog platform built with React, Tailwind CSS, and Vite, focused on providing AI insights for coaches and consultants.

## Features
- Responsive design with mobile-first approach
- Dynamic blog post rendering with React Router
- Beautiful UI components built with Tailwind CSS
- Smooth animations using Framer Motion
- Toast notification system

## Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

## Installation
1. Clone this repository
2. Navigate to the project directory
3. Install dependencies:
```bash
npm install
```

## Running the Project

### Development Mode
```bash
npm run dev
```
This will start the development server at `http://localhost:5173`

### Production Build
```bash
npm run build
```
This will create an optimized production build in the `dist` folder.

### Preview Production Build
```bash
npm run preview
```
This will serve the production build locally for testing.

## Project Structure
```
/src
├── components/       # Reusable UI components
├── data/            # Blog post data
├── lib/             # Utility functions
├── pages/           # Page components
├── App.jsx          # Main application component
└── main.jsx         # Application entry point
```

## Technologies Used
- React
- React Router
- Tailwind CSS
- Framer Motion
- Vite

## Adding New Blog Posts
1. Create a new component in `/src/components/blog-posts`
2. Add the post data to `/src/data/blogPosts.jsx`
3. The post will automatically appear on the home page

## License
MIT