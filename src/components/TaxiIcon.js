import React from 'react';
import { Box } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const TaxiIcon = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        color: '#FFD700', // Yellow color
        animation: 'bounce 2s infinite',
        '@keyframes bounce': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-5px)',
          },
        },
      }}
    >
      <DirectionsCarIcon sx={{ fontSize: 30 }} />
    </Box>
  );
};

export default TaxiIcon; 