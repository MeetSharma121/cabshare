import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Welcome to EasyCab Support! How can we help you?', sender: 'system' },
  ]);

  const handleChatOpen = () => setChatOpen(true);
  const handleChatClose = () => setChatOpen(false);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: message, sender: 'user' },
        { id: messages.length + 2, text: 'Thank you for your message. Our support team will get back to you shortly.', sender: 'system' },
      ]);
      setMessage('');
    }
  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 700,
            }}
          >
            EasyCab
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {currentUser ? (
              <>
                <Button
                  color="inherit"
                  component={RouterLink}
                  to="/book-ride"
                >
                  Book a Ride
                </Button>
                <Button
                  color="inherit"
                  component={RouterLink}
                  to="/profile"
                >
                  Profile
                </Button>
                <IconButton color="inherit" onClick={handleChatOpen}>
                  <Badge badgeContent={3} color="error">
                    <ChatIcon />
                  </Badge>
                </IconButton>
                <Button
                  color="inherit"
                  onClick={logout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  color="inherit"
                  component={RouterLink}
                  to="/login"
                >
                  Login
                </Button>
                <Button
                  color="inherit"
                  component={RouterLink}
                  to="/register"
                >
                  Register
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>

      {/* Chat Dialog */}
      <Dialog
        open={chatOpen}
        onClose={handleChatClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>EasyCab Support Chat</DialogTitle>
        <DialogContent>
          <List sx={{ maxHeight: 400, overflow: 'auto' }}>
            {messages.map((msg) => (
              <React.Fragment key={msg.id}>
                <ListItem
                  sx={{
                    flexDirection: 'column',
                    alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  }}
                >
                  <ListItemText
                    primary={msg.text}
                    sx={{
                      bgcolor: msg.sender === 'user' ? 'primary.main' : 'grey.200',
                      color: msg.sender === 'user' ? 'white' : 'text.primary',
                      borderRadius: 2,
                      p: 1,
                      maxWidth: '80%',
                    }}
                  />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <TextField
            fullWidth
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button onClick={handleSendMessage} variant="contained">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
};

export default Navbar; 