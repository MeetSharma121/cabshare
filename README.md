# EasyCab - Advanced Ride Sharing Platform

A modern, secure taxi booking platform built with React.js, Node.js, and Firebase, featuring AI-driven face recognition and real-time tracking.

## Features

- AI-powered face recognition for 100% accurate user authentication
- QR code-based driver verification system
- Real-time ride tracking with WebSocket integration
- 24/7 live chat support
- Enterprise-grade security following CIA principles
- 99.9% uptime guarantee
- Multiple car type options
- User profile management
- Booking history

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account
- WebSocket server (for real-time features)

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd easycab
```

2. Install dependencies:
```bash
npm install
```

3. Create a Firebase project and enable:
   - Authentication
   - Firestore
   - Storage (for face recognition data)
   - Cloud Functions (for WebSocket support)

4. Update the Firebase configuration in `src/firebase.js` with your project credentials:
```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
```

5. Set up face recognition models:
   - Download face-api.js models
   - Place them in the `public/models` directory

6. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Project Structure

```
easycab/
├── public/
│   └── models/           # Face recognition models
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Chat.js
│   │   └── FaceRecognition.js
│   ├── contexts/
│   │   ├── AuthContext.js
│   │   └── ChatContext.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── BookRide.js
│   │   └── Profile.js
│   ├── services/
│   │   ├── faceRecognition.js
│   │   ├── qrCode.js
│   │   └── websocket.js
│   ├── firebase.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Technologies Used

- React.js
- Material-UI
- Firebase Authentication & Firestore
- face-api.js for face recognition
- WebSocket for real-time features
- QR Code generation and scanning
- Leaflet for maps
- Socket.io for chat functionality

## Security Features

- AI-driven face recognition for user verification
- QR code-based driver verification
- End-to-end encryption for chat messages
- CIA security principles implementation
- Secure WebSocket connections
- Rate limiting and DDoS protection

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 