"use client"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Button, Typography, Container, Box } from "@mui/material"
import { motion } from "framer-motion"
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard"
import GroupAddIcon from "@mui/icons-material/GroupAdd"
import PersonAddIcon from "@mui/icons-material/PersonAdd"
import AdditionalFeatures from "./additional-features"
import Footer from "./footer"

const createConfetti = () => {
  const confetti = document.createElement("div")
  confetti.className = "confetti"
  confetti.style.left = Math.random() * 100 + "vw"
  confetti.style.backgroundColor = ["#e63946", "#2a9d8f", "#f1faee", "#a8dadc", "#457b9d"][
    Math.floor(Math.random() * 5)
  ]
  document.body.appendChild(confetti)

  setTimeout(() => {
    confetti.remove()
  }, 3000)
}

const HeroSection = styled(motion.div)`
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(45deg, rgba(230, 57, 70, 0.1) 0%, rgba(42, 157, 143, 0.1) 100%);
  border-radius: 20px;
  margin: 2rem 0;
`

const ActionButton = styled(Button)`
  margin: 1rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-transform: none;
  font-size: 1.1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }
`

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

const FloatingSnowflake = styled(motion.div)`
  position: absolute;
  color: white;
  opacity: 0.6;
  font-size: 2rem;
  pointer-events: none;
`

function Home() {
  useEffect(() => {
    const interval = setInterval(() => {
      createConfetti()
    }, 2000)

    return () => clearInterval(interval)
  }, [])
  const navigate = useNavigate()

  return (
    <Container maxWidth="lg">
      <Box className="snow-bg" minHeight="100vh" position="relative" overflow="hidden">
        <HeroSection initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography variant="h2" component="h1" gutterBottom className="gradient-text">
            🎅 Virtual Secret Santa 🎄
          </Typography>
          <Typography variant="h5" color="textSecondary" gutterBottom className="floating">
            ✨ Spread joy and surprise with our magical gift exchange platform! 🎁
          </Typography>
          <Box mt={4}>
            <ActionButton
              variant="contained"
              color="primary"
              startIcon={<GroupAddIcon />}
              onClick={() => navigate("/create-group")}
            >
              Create a Group
            </ActionButton>
            <ActionButton
              variant="contained"
              color="secondary"
              startIcon={<PersonAddIcon />}
              onClick={() => navigate("/join-group")}
            >
              Join a Group
            </ActionButton>
          </Box>
        </HeroSection>

        <Box display="grid" gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr 1fr" }} gap={3} my={4}>
          <FeatureCard whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <IconWrapper>
              <GroupAddIcon fontSize="inherit" />
            </IconWrapper>
            <Typography variant="h6" gutterBottom>
              Create Your Group
            </Typography>
            <Typography color="textSecondary">Start a Secret Santa group and invite your friends and family</Typography>
          </FeatureCard>

          <FeatureCard whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <IconWrapper>
              <CardGiftcardIcon fontSize="inherit" />
            </IconWrapper>
            <Typography variant="h6" gutterBottom>
              Make Wishlists
            </Typography>
            <Typography color="textSecondary">Create your perfect wishlist to help your Secret Santa</Typography>
          </FeatureCard>

          <FeatureCard whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <IconWrapper>
              <PersonAddIcon fontSize="inherit" />
            </IconWrapper>
            <Typography variant="h6" gutterBottom>
              Get Matched
            </Typography>
            <Typography color="textSecondary">We'll randomly assign your gift recipient and notify you</Typography>
          </FeatureCard>
        </Box>

        {/* Additional Features Section */}
        <AdditionalFeatures />

        {/* Floating Snowflakes */}
        {[...Array(10)].map((_, i) => (
          <FloatingSnowflake
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: -20,
              rotate: 0,
            }}
            animate={{
              y: window.innerHeight + 20,
              rotate: 360,
              x: `calc(${Math.random() * 100}vw)`,
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            ❄
          </FloatingSnowflake>
        ))}
      </Box>

      {/* Footer */}
      <Footer />
    </Container>
  )
}

export default Home

