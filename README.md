
# WoodSense

![WoodSense](https://i.ibb.co/5kDJgvh/website-ss.jpg)

WoodSense is an Art & Craft Store website focused on Jute and Wooden Crafts. This project showcases a range of handcrafted jute and wooden items, providing a platform for users to browse, add, and manage craft items.

## Live Site

Visit the live site at: [WoodSense](https://woodsense-df773.web.app/)

## Features

- **User Authentication**: Secure login and registration using email/password and third-party providers like Google.
- **Responsive Design**: Fully responsive design for mobile, tablet, and desktop views.
- **Protected Routes**: Private routes for adding, updating, and managing craft items, accessible only to authenticated users.
- **Craft Item Management**: Users can add, update, view, and delete their craft items.
- **Dynamic Categories**: Showcases various jute and wooden craft categories with detailed item views.
- **Real-time Notifications**: Toast notifications for successful operations and error handling.
- **Loading Spinner**: Displays a loading spinner during data fetching.

## Technologies Used

- **Frontend**:
  - HTML
  - CSS
  - JavaScript
  - React.js
  - Tailwind CSS
  - DaisyUI
  - AOS Animation
  - React Typewriter
  - Swiper Slider
  - Font Poppins

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  - Firebase Authentication
  - dotenv

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/woodsense-client.git
   git clone https://github.com/your-username/woodsense-server.git
Navigate to the project directories and install dependencies:

cd woodsSense
npm install

cd ../woodsense-server-side
npm install
Create a .env file in the root of the woodsense-client directory with the following content:

REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-firebase-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-firebase-app-id
Create a .env file in the root of the woodsense-server directory with the following content:


PORT=5000
MONGODB_URI=your-mongodb-connection-string
Usage
Start the server:

cd woodsense-server
npm start
Start the client:


cd ../woodsense
npm start
Open your browser and visit http://localhost:3010 to access the website.
