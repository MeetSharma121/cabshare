import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Box,
  Paper,
} from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import FaceIcon from '@mui/icons-material/Face';
import QrCodeIcon from '@mui/icons-material/QrCode';
import ChatIcon from '@mui/icons-material/Chat';
import { useAuth } from '../contexts/AuthContext';

const Home = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const features = [
    {
      icon: <DirectionsCarIcon sx={{ fontSize: 40 }} />,
      title: 'Easy Booking',
      description: 'Book your ride in just a few clicks with our user-friendly interface.',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: 'AI Face Recognition',
      description: '100% accurate user authentication using advanced AI technology.',
    },
    {
      icon: <QrCodeIcon sx={{ fontSize: 40 }} />,
      title: 'QR Code Verification',
      description: 'Secure driver verification system with QR code scanning.',
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      title: 'Real-time Tracking',
      description: 'Track your ride in real-time with our advanced GPS system.',
    },
    {
      icon: <ChatIcon sx={{ fontSize: 40 }} />,
      title: '24/7 Support',
      description: 'Instant chat support available round the clock for your convenience.',
    },
    {
      icon: <FaceIcon sx={{ fontSize: 40 }} />,
      title: 'CIA Security',
      description: 'Enterprise-grade security following CIA principles for your safety.',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          mb: 6,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                EasyCab
              </Typography>
              <Typography variant="h5" gutterBottom>
                Your Trusted Partner for Safe and Secure Rides
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                Experience the future of ride-sharing with AI-powered security and real-time tracking.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => navigate(currentUser ? '/book-ride' : '/register')}
                sx={{ mt: 2 }}
              >
                {currentUser ? 'Book a Ride Now' : 'Get Started'}
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 700 }}>
          Why Choose EasyCab?
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-5px)' } }}>
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Stats Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 6, mb: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={3}>
              <Paper sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h3" color="primary" sx={{ fontWeight: 700 }}>
                  99.9%
                </Typography>
                <Typography variant="h6">Uptime</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h3" color="primary" sx={{ fontWeight: 700 }}>
                  100%
                </Typography>
                <Typography variant="h6">Security</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h3" color="primary" sx={{ fontWeight: 700 }}>
                  24/7
                </Typography>
                <Typography variant="h6">Support</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h3" color="primary" sx={{ fontWeight: 700 }}>
                  1000+
                </Typography>
                <Typography variant="h6">Happy Users</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 