"use client"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Typography, Box } from "@mui/material"
import { motion } from "framer-motion"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import ChatIcon from "@mui/icons-material/Chat"
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

const FeatureCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  margin: 1rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    background: #e63946;
    opacity: 0.3;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    background: #e63946;
    opacity: 0.3;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    
    &::before,
    &::after {
      opacity: 1;
    }
  }
`

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #e63946;
  margin-bottom: 1rem;
`

const FeatureButton = styled(motion.button)`
  background: ${(props) => (props.primary ? "#e63946" : "#2a9d8f")};
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }
`

const SectionTitle = styled(Typography)`
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 700;
  color: #333;
`

function AdditionalFeatures() {
  const navigate = useNavigate()

  return (
    <>
      <SectionTitle variant="h4" component="h2">
        More Holiday Magic
      </SectionTitle>

      <Box display="grid" gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr 1fr" }} gap={3} my={4}>
        <FeatureCard whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <IconWrapper>
            <CalendarMonthIcon fontSize="inherit" />
          </IconWrapper>
          <Typography variant="h6" gutterBottom>
            Event Scheduling
          </Typography>
          <Typography color="textSecondary">Plan your gift exchange event with our easy-to-use calendar</Typography>
          <FeatureButton primary whileHover={{ scale: 1.05 }} onClick={() => navigate("/calendar")}>
            Schedule Now
          </FeatureButton>
        </FeatureCard>

        <FeatureCard whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <IconWrapper>
            <ChatIcon fontSize="inherit" />
          </IconWrapper>
          <Typography variant="h6" gutterBottom>
            Secret Chat
          </Typography>
          <Typography color="textSecondary">
            Anonymously chat with your gift recipient to get more gift ideas
          </Typography>
          <FeatureButton whileHover={{ scale: 1.05 }} onClick={() => navigate("/chat")}>
            Start Chatting
          </FeatureButton>
        </FeatureCard>

        <FeatureCard whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <IconWrapper>
            <NotificationsActiveIcon fontSize="inherit" />
          </IconWrapper>
          <Typography variant="h6" gutterBottom>
            Reminders
          </Typography>
          <Typography color="textSecondary">Set up reminders for important dates and never miss a deadline</Typography>
          <FeatureButton primary whileHover={{ scale: 1.05 }} onClick={() => navigate("/reminders")}>
            Set Reminders
          </FeatureButton>
        </FeatureCard>

        <FeatureCard whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <IconWrapper>
            <ShoppingCartIcon fontSize="inherit" />
          </IconWrapper>
          <Typography variant="h6" gutterBottom>
            Gift Shop
          </Typography>
          <Typography color="textSecondary">
            Browse our curated gift ideas for inspiration and special offers
          </Typography>
          <FeatureButton whileHover={{ scale: 1.05 }} onClick={() => navigate("/shop")}>
            Shop Now
          </FeatureButton>
        </FeatureCard>
      </Box>
    </>
  )
}

export default AdditionalFeatures

