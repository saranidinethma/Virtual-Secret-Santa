import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

const SnowflakeContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

const FormContainer = styled(Paper)`
  position: relative;
  padding: 2rem;
  margin: 2rem auto;
  max-width: 500px;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1;
  
  &::before {
    content: '🎁';
    position: absolute;
    top: -30px;
    right: -30px;
    font-size: 3rem;
    animation: float 6s ease-in-out infinite;
  }

`;

const GiftWrapper = styled.div`
  position: relative;
  padding: 1rem;
  margin: 1rem 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px dashed #e63946;
    border-radius: 12px;
    opacity: 0.3;
    pointer-events: none;
  }
`;

const StyledTextField = styled(TextField)`
  margin: 1rem 0;
  .MuiOutlinedInput-root {
    border-radius: 10px;
  }
`;

const AnimatedIcon = styled(motion.div)`
  display: flex;
  justify-content: center;
  font-size: 4rem;
  color: #e63946;
  margin: 1rem 0;
`;

function JoinGroup() {
  const navigate = useNavigate();
  const [inviteCode, setInviteCode] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here we'll add the logic to join the group
    console.log({ inviteCode, name, email });
  };

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FormContainer elevation={3}>
          <Typography variant="h4" gutterBottom align="center" color="primary" className="gradient-text">
            ✨ Join the Festive Fun ✨
            <Box component="span" sx={{ display: 'block', fontSize: '1rem', mt: 1, color: '#666' }}>
              Get ready for a magical gift exchange! 🎁
            </Box>
          </Typography>

          <AnimatedIcon
            animate={{
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            <CardGiftcardIcon fontSize="inherit" />
          </AnimatedIcon>

          <GiftWrapper>
            <form onSubmit={handleSubmit}>
            <StyledTextField
              fullWidth
              label="Invite Code"
              variant="outlined"
              value={inviteCode}
              onChange={(e) => setInviteCode(e.target.value)}
              required
              placeholder="Enter your invitation code"
            />

            <StyledTextField
              fullWidth
              label="Your Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your full name"
            />

            <StyledTextField
              fullWidth
              label="Your Email"
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email address"
              InputProps={{
                startAdornment: <EmailIcon color="action" sx={{ mr: 1 }} />,
              }}
            />

            <Box display="flex" gap={2} mt={4}>
              <Button
                fullWidth
                variant="outlined"
                color="secondary"
                onClick={() => navigate('/')}
              >
                Cancel
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Join Group
              </Button>
            </Box>
          </form>
          </GiftWrapper>
        </FormContainer>
      </motion.div>
    </Container>
  );
}

export default JoinGroup;
