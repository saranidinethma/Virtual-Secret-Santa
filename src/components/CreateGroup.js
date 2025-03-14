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
  IconButton,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const FormContainer = styled(Paper)`
  position: relative;
  padding: 2rem;
  margin: 2rem auto;
  max-width: 600px;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  
  &::before {
    content: '🎁';
    position: absolute;
    top: -30px;
    left: -30px;
    font-size: 3rem;
    animation: float 6s ease-in-out infinite;
  }
  
  &::after {
    content: '🎄';
    position: absolute;
    bottom: -30px;
    right: -30px;
    font-size: 3rem;
    animation: float 6s ease-in-out infinite;
    animation-delay: -3s;
  }
`;

const ParticipantContainer = styled(Box)`
  position: relative;
  background: rgba(168, 218, 220, 0.1);
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
  border: 2px dashed #2a9d8f;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-style: solid;
  }
  
  &::before {
    content: '🎅';
    position: absolute;
    top: -10px;
    left: -10px;
    font-size: 1.5rem;
    animation: twinkle 2s ease-in-out infinite;
  }
  background: rgba(168, 218, 220, 0.1);
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem 0;
`;

function CreateGroup() {
  const navigate = useNavigate();
  const [groupName, setGroupName] = useState('');
  const [budget, setBudget] = useState('');
  const [exchangeDate, setExchangeDate] = useState('');
  const [participants, setParticipants] = useState([{ name: '', email: '' }]);

  const handleAddParticipant = () => {
    setParticipants([...participants, { name: '', email: '' }]);
  };

  const handleRemoveParticipant = (index) => {
    const newParticipants = participants.filter((_, i) => i !== index);
    setParticipants(newParticipants);
  };

  const handleParticipantChange = (index, field, value) => {
    const newParticipants = [...participants];
    newParticipants[index][field] = value;
    setParticipants(newParticipants);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here we'll add the logic to create the group and send invitations
    console.log({ groupName, budget, exchangeDate, participants });
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
            Create Your Secret Santa Group ✨
            <Box component="span" sx={{ display: 'block', fontSize: '1rem', mt: 1, color: '#666' }}>
              Spread the holiday magic! 🎄 🎁 ⭐
            </Box>
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Group Name"
              variant="outlined"
              margin="normal"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              required
            />

            <Box display="flex" gap={2} my={2}>
              <TextField
                fullWidth
                label="Budget"
                type="number"
                variant="outlined"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                required
                InputProps={{
                  startAdornment: <Typography>$</Typography>,
                }}
              />

              <TextField
                fullWidth
                label="Exchange Date"
                type="date"
                variant="outlined"
                value={exchangeDate}
                onChange={(e) => setExchangeDate(e.target.value)}
                required
                InputProps={{
                  startAdornment: (
                    <CalendarTodayIcon color="action" sx={{ mr: 1 }} />
                  ),
                }}
                InputLabelProps={{ shrink: true }}
              />
            </Box>

            <Typography variant="h6" gutterBottom mt={3}>
              Participants
            </Typography>

            {participants.map((participant, index) => (
              <ParticipantContainer key={index}>
                <Box display="flex" alignItems="center" gap={2}>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    value={participant.name}
                    onChange={(e) =>
                      handleParticipantChange(index, 'name', e.target.value)
                    }
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    variant="outlined"
                    value={participant.email}
                    onChange={(e) =>
                      handleParticipantChange(index, 'email', e.target.value)
                    }
                    required
                  />
                  {participants.length > 1 && (
                    <IconButton
                      color="error"
                      onClick={() => handleRemoveParticipant(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  )}
                </Box>
              </ParticipantContainer>
            ))}

            <Box display="flex" justifyContent="center" my={2}>
              <Button
                startIcon={<AddIcon />}
                onClick={handleAddParticipant}
                variant="outlined"
                color="primary"
              >
                Add Participant
              </Button>
            </Box>

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
                Create Group
              </Button>
            </Box>
          </form>
        </FormContainer>
      </motion.div>
    </Container>
  );
}

export default CreateGroup;
