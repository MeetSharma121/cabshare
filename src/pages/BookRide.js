import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
} from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

const BookRide = () => {
  const [bookingData, setBookingData] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    passengers: 1,
    carType: 'standard',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      // Here you would typically make an API call to create the booking
      // For now, we'll just show a success message
      alert('Booking successful!');
    } catch (error) {
      setError('Failed to create booking');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Book a Ride
        </Typography>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        <Grid container spacing={4}>
          {/* Map Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: 400,
                bgcolor: 'grey.200',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="body1" color="text.secondary">
                Map will be integrated here
              </Typography>
            </Box>
          </Grid>

          {/* Booking Form */}
          <Grid item xs={12} md={6}>
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Pickup Location"
                    name="pickup"
                    value={bookingData.pickup}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Drop-off Location"
                    name="dropoff"
                    value={bookingData.dropoff}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Date"
                    type="date"
                    name="date"
                    value={bookingData.date}
                    onChange={handleChange}
                    required
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Time"
                    type="time"
                    name="time"
                    value={bookingData.time}
                    onChange={handleChange}
                    required
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Number of Passengers"
                    type="number"
                    name="passengers"
                    value={bookingData.passengers}
                    onChange={handleChange}
                    required
                    inputProps={{ min: 1, max: 4 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth required>
                    <InputLabel>Car Type</InputLabel>
                    <Select
                      name="carType"
                      value={bookingData.carType}
                      onChange={handleChange}
                      label="Car Type"
                    >
                      <MenuItem value="standard">Standard</MenuItem>
                      <MenuItem value="premium">Premium</MenuItem>
                      <MenuItem value="luxury">Luxury</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                disabled={loading}
                sx={{ mt: 3 }}
              >
                Book Now
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default BookRide; 