import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  Container, 
  Paper, 
  Typography, 
  Box,
  Button,
  Grid
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h4" component="h1">
                  Welcome, {currentUser?.name || 'User'}!
                </Typography>
                <Button variant="outlined" color="error" onClick={handleLogout}>
                  Logout
                </Button>
              </Box>

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Paper elevation={2} sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      Your Profile
                    </Typography>
                    <Typography>Email: {currentUser?.email}</Typography>
                    <Typography>Phone: {currentUser?.phoneNumber}</Typography>
                    <Typography>Role: {currentUser?.role}</Typography>
                  </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Paper elevation={2} sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      Quick Actions
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <Button 
                        variant="contained" 
                        color="primary"
                        onClick={() => navigate('/book-ride')}
                      >
                        Book a Ride
                      </Button>
                      <Button 
                        variant="outlined" 
                        color="primary"
                        onClick={() => navigate('/profile')}
                      >
                        Edit Profile
                      </Button>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Dashboard; 