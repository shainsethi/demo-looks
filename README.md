# Fashion Lookbook Application

This is a React-based fashion e-commerce application that showcases a "Lookbook" feature. The application is built with a modern stack including React, TypeScript, and Tailwind CSS.

## Features

- Vertical carousel for browsing different looks
- Horizontal gallery within each look for multiple images
- Interactive product annotations with clickable hotspots
- Auto-advancing image preview with 5-second timer
- Video playback support with mute/unmute controls
- Intuitive navigation (swipe up/down for looks, left/right for images)
- Mobile-first responsive design

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS for styling
- Swiper.js for carousel functionality
- React Router for navigation
- Lucide React for icons

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository
```
git clone https://github.com/yourusername/fashion-lookbook.git
cd fashion-lookbook
```

2. Install dependencies
```
npm install
```

3. Start the development server
```
npm run dev
```

4. Open your browser and visit `http://localhost:5173` to see the application.

## Project Structure

```
src/
├── components/
│   ├── Navigation/       # Navigation components
│   └── Lookbook/         # Lookbook carousel components
├── pages/                # Application pages
├── types/                # TypeScript type definitions
├── data/                 # Mock data for the application
├── App.tsx               # Main application component
└── main.tsx              # Application entry point
```

## Building for Production

To build the application for production, run:

```
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

To deploy the application, you can use any static site hosting service such as Netlify, Vercel, or GitHub Pages.

Example deployment with Netlify:

1. Install Netlify CLI
```
npm install -g netlify-cli
```

2. Build the application
```
npm run build
```

3. Deploy to Netlify
```
netlify deploy
```

Follow the prompts to complete the deployment.

## License

This project is licensed under the MIT License.