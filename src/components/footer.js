"use client"
import styled from "styled-components"
import { Typography, Container, Box } from "@mui/material"
import { motion } from "framer-motion"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"
import GitHubIcon from "@mui/icons-material/GitHub"
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard"
import { Link } from "react-router-dom"

const FooterContainer = styled.footer`
  background: linear-gradient(45deg, rgba(230, 57, 70, 0.1) 0%, rgba(42, 157, 143, 0.1) 100%);
  padding: 3rem 0 1.5rem;
  margin-top: 4rem;
  border-top: 1px solid rgba(230, 57, 70, 0.2);
  border-radius: 20px 20px 0 0;
`

const FooterSection = styled.div`
  margin-bottom: 2rem;
`

const FooterTitle = styled(Typography)`
  font-weight: 600;
  margin-bottom: 1.25rem;
  color: #333;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: #e63946;
  }
`

const FooterLink = styled(Link)`
  display: block;
  color: #555;
  margin-bottom: 0.75rem;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    color: #e63946;
    transform: translateX(5px);
  }
`

const SocialIcon = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.bgcolor || "#e63946"};
  color: white;
  margin-right: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`

const Copyright = styled(Typography)`
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
  color: #666;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  svg {
    font-size: 2rem;
    color: #e63946;
    margin-right: 0.5rem;
  }
  
  span {
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(45deg, #e63946, #2a9d8f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

function Footer() {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Box display="grid" gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr" }} gap={4}>
          <FooterSection>
            <Logo>
              <CardGiftcardIcon />
              <span>Secret Santa</span>
            </Logo>
            <Typography variant="body2" color="textSecondary" paragraph>
              Our platform makes organizing Secret Santa gift exchanges easy and fun. Create groups, make wishlists, and
              spread holiday cheer with friends, family, or colleagues no matter where they are.
            </Typography>
            <Box mt={2}>
              <SocialIcon href="https://facebook.com" target="_blank" bgcolor="#3b5998" whileHover={{ y: -3 }}>
                <FacebookIcon />
              </SocialIcon>
              <SocialIcon href="https://twitter.com" target="_blank" bgcolor="#1da1f2" whileHover={{ y: -3 }}>
                <TwitterIcon />
              </SocialIcon>
              <SocialIcon href="https://instagram.com" target="_blank" bgcolor="#c32aa3" whileHover={{ y: -3 }}>
                <InstagramIcon />
              </SocialIcon>
              <SocialIcon href="https://github.com" target="_blank" bgcolor="#333" whileHover={{ y: -3 }}>
                <GitHubIcon />
              </SocialIcon>
            </Box>
          </FooterSection>

          <FooterSection>
            <FooterTitle variant="h6">Quick Links</FooterTitle>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/create-group">Create Group</FooterLink>
            <FooterLink to="/join-group">Join Group</FooterLink>
            <FooterLink to="/wishlist">Wishlist</FooterLink>
          </FooterSection>

          <FooterSection>
            <FooterTitle variant="h6">Resources</FooterTitle>
            <FooterLink to="/faq">FAQ</FooterLink>
            <FooterLink to="/gift-ideas">Gift Ideas</FooterLink>
            <FooterLink to="/blog">Blog</FooterLink>
            <FooterLink to="/support">Support</FooterLink>
          </FooterSection>

          <FooterSection>
            <FooterTitle variant="h6">Legal</FooterTitle>
            <FooterLink to="/privacy">Privacy Policy</FooterLink>
            <FooterLink to="/terms">Terms of Service</FooterLink>
            <FooterLink to="/cookies">Cookie Policy</FooterLink>
            <FooterLink to="/contact">Contact Us</FooterLink>
          </FooterSection>
        </Box>

        <Copyright variant="body2">
          &copy; {new Date().getFullYear()} Virtual Secret Santa. All rights reserved.
        </Copyright>
      </Container>
    </FooterContainer>
  )
}

export default Footer

