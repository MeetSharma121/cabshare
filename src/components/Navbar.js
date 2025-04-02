import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
} from '@mui/material';
import TaxiIcon from './TaxiIcon';
import { styled } from '@mui/material/styles';

// Styled components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '20px',
    background: 'white',
    borderRadius: '20px 20px 0 0',
    transform: 'translateY(50%)',
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(0, 4),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0, 2),
  },
}));

function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
    handleClose();
  };

  return (
    <StyledAppBar position="static">
      <StyledContainer maxWidth={false}>
        <Toolbar disableGutters sx={{ py: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <TaxiIcon />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: { xs: 'none', sm: 'block' },
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
                ml: 1,
              }}
            >
              EasyCab
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
            <Button
              color="inherit"
              onClick={() => navigate('/')}
              sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
            >
              Home
            </Button>
            {currentUser && (
              <>
                <Button
                  color="inherit"
                  onClick={() => navigate('/book-ride')}
                  sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
                >
                  Book a Ride
                </Button>
                <Button
                  color="inherit"
                  onClick={() => navigate('/profile')}
                  sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
                >
                  Profile
                </Button>
              </>
            )}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {currentUser ? (
              <>
                <IconButton
                  onClick={handleMenu}
                  sx={{ p: 0 }}
                >
                  <Avatar
                    alt={currentUser.name || 'User'}
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 32, height: 32 }}
                  />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={() => { navigate('/profile'); handleClose(); }}>
                    Profile
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Button
                  color="inherit"
                  onClick={() => navigate('/login')}
                  sx={{ mr: 1, '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  onClick={() => navigate('/signup')}
                  sx={{
                    backgroundColor: '#FFD700',
                    color: '#000',
                    '&:hover': {
                      backgroundColor: '#FFC107',
                    },
                  }}
                >
                  Sign Up
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </StyledContainer>
    </StyledAppBar>
  );
}

export default Navbar; 