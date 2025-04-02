import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  TextField,
  Alert,
} from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

const Profile = () => {
  const { currentUser } = useAuth();
  const [userProfile, setUserProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Here you would typically fetch user profile and booking history from Firebase
    // For now, we'll use dummy data
    setUserProfile({
      firstName: 'John',
      lastName: 'Doe',
      email: currentUser?.email || '',
      phone: '+1234567890',
    });
    setBookings([
      {
        id: 1,
        date: '2024-03-15',
        pickup: 'Airport',
        dropoff: 'Downtown',
        status: 'Completed',
        amount: '$25.00',
      },
      {
        id: 2,
        date: '2024-03-20',
        pickup: 'Home',
        dropoff: 'Office',
        status: 'Upcoming',
        amount: '$15.00',
      },
    ]);
  }, [currentUser]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      // Here you would typically update the user profile in Firebase
      alert('Profile updated successfully!');
    } catch (error) {
      setError('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {/* Profile Information */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Profile Information
            </Typography>
            <Box component="form" onSubmit={handleUpdateProfile}>
              <TextField
                fullWidth
                label="First Name"
                value={userProfile.firstName}
                onChange={(e) =>
                  setUserProfile({ ...userProfile, firstName: e.target.value })
                }
                margin="normal"
              />
              <TextField
                fullWidth
                label="Last Name"
                value={userProfile.lastName}
                onChange={(e) =>
                  setUserProfile({ ...userProfile, lastName: e.target.value })
                }
                margin="normal"
              />
              <TextField
                fullWidth
                label="Email"
                value={userProfile.email}
                disabled
                margin="normal"
              />
              <TextField
                fullWidth
                label="Phone"
                value={userProfile.phone}
                onChange={(e) =>
                  setUserProfile({ ...userProfile, phone: e.target.value })
                }
                margin="normal"
              />
              {error && (
                <Alert severity="error" sx={{ mt: 2 }}>
                  {error}
                </Alert>
              )}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading}
                sx={{ mt: 2 }}
              >
                Update Profile
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Booking History */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Booking History
            </Typography>
            <List>
              {bookings.map((booking, index) => (
                <React.Fragment key={booking.id}>
                  <ListItem>
                    <ListItemText
                      primary={`Ride from ${booking.pickup} to ${booking.dropoff}`}
                      secondary={
                        <>
                          <Typography component="span" variant="body2">
                            Date: {booking.date}
                          </Typography>
                          <br />
                          <Typography component="span" variant="body2">
                            Status: {booking.status}
                          </Typography>
                          <br />
                          <Typography component="span" variant="body2">
                            Amount: {booking.amount}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                  {index < bookings.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile; 