import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  IconButton,
  Card,
  CardContent,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LinkIcon from '@mui/icons-material/Link';

const WishlistContainer = styled(Paper)`
  position: relative;
  padding: 2rem;
  margin: 2rem auto;
  max-width: 800px;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  
  &::before {
    content: '🎄';
    position: absolute;
    top: -30px;
    left: -30px;
    font-size: 3rem;
    animation: float 6s ease-in-out infinite;
  }
  
  &::after {
    content: '🎁';
    position: absolute;
    bottom: -30px;
    right: -30px;
    font-size: 3rem;
    animation: float 6s ease-in-out infinite;
    animation-delay: -3s;
  }

`;

const GiftTag = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  background: #e63946;
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
  transform: rotate(5deg);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const WishlistItem = styled(Card)`
  position: relative;
  margin: 1rem 0;
  border-radius: 10px;
  transition: all 0.3s ease;
  background: linear-gradient(145deg, #ffffff, #f8f9fa);
  border: 2px solid transparent;
  
  &:hover {
    transform: translateY(-2px) rotate(1deg);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    border-color: #2a9d8f;
  }

`;

const AddItemContainer = styled(Box)`
  position: relative;
  background: linear-gradient(145deg, rgba(42, 157, 143, 0.1), rgba(42, 157, 143, 0.05));
  padding: 1.5rem;
  border-radius: 10px;
  margin: 2rem 0;
  border: 2px dashed #2a9d8f;
  
  &::before {
    content: '✨';
    position: absolute;
    top: -15px;
    left: -15px;
    font-size: 2rem;
    animation: twinkle 2s ease-in-out infinite;
  }
  
  &::after {
    content: '🎁';
    position: absolute;
    bottom: -15px;
    right: -15px;
    font-size: 2rem;
    animation: float 4s ease-in-out infinite;
  }

`;

function Wishlist() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: '',
    price: '',
    link: '',
    notes: '',
  });

  const handleAddItem = () => {
    if (newItem.name) {
      setItems([...items, { ...newItem, id: Date.now() }]);
      setNewItem({ name: '', price: '', link: '', notes: '' });
    }
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <WishlistContainer elevation={3}>
          <Typography variant="h4" gutterBottom align="center" color="primary" className="gradient-text">
            ✨ My Holiday Wishlist 🎁
            <Box component="span" sx={{ display: 'block', fontSize: '1rem', mt: 1, color: '#666' }}>
              Make your wishes come true! ✨ 🎄 🎁
            </Box>
          </Typography>

          <AddItemContainer>
            <Typography variant="h6" gutterBottom color="secondary">
              Add New Item
            </Typography>
            <Box display="grid" gap={2}>
              <TextField
                fullWidth
                label="Item Name"
                variant="outlined"
                value={newItem.name}
                onChange={(e) =>
                  setNewItem({ ...newItem, name: e.target.value })
                }
                placeholder="What would you like to receive?"
              />
              <Box display="flex" gap={2}>
                <TextField
                  fullWidth
                  label="Price"
                  type="number"
                  variant="outlined"
                  value={newItem.price}
                  onChange={(e) =>
                    setNewItem({ ...newItem, price: e.target.value })
                  }
                  InputProps={{
                    startAdornment: <AttachMoneyIcon color="action" />,
                  }}
                />
                <TextField
                  fullWidth
                  label="Link"
                  variant="outlined"
                  value={newItem.link}
                  onChange={(e) =>
                    setNewItem({ ...newItem, link: e.target.value })
                  }
                  placeholder="Add a link to the item"
                  InputProps={{
                    startAdornment: <LinkIcon color="action" />,
                  }}
                />
              </Box>
              <TextField
                fullWidth
                label="Notes"
                variant="outlined"
                multiline
                rows={2}
                value={newItem.notes}
                onChange={(e) =>
                  setNewItem({ ...newItem, notes: e.target.value })
                }
                placeholder="Add any additional notes (size, color, etc.)"
              />
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={handleAddItem}
                disabled={!newItem.name}
              >
                Add to Wishlist
              </Button>
            </Box>
          </AddItemContainer>

          <Typography variant="h6" gutterBottom mt={4}>
            My Items
          </Typography>

          <AnimatePresence>
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <WishlistItem>
                  <GiftTag>${item.price || 'Surprise!'}</GiftTag>
                  <CardContent>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="flex-start"
                    >
                      <Box>
                        <Typography variant="h6">{item.name}</Typography>
                        {item.price && (
                          <Typography color="primary" variant="subtitle1">
                            ${item.price}
                          </Typography>
                        )}
                        {item.notes && (
                          <Typography color="textSecondary" variant="body2">
                            {item.notes}
                          </Typography>
                        )}
                        {item.link && (
                          <Button
                            startIcon={<LinkIcon />}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                            sx={{ mt: 1 }}
                          >
                            View Item
                          </Button>
                        )}
                      </Box>
                      <IconButton
                        color="error"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </CardContent>
                </WishlistItem>
              </motion.div>
            ))}
          </AnimatePresence>

          {items.length === 0 && (
            <Typography
              color="textSecondary"
              align="center"
              sx={{ mt: 4 }}
            >
              Your wishlist is empty. Add some items above! 🎁
            </Typography>
          )}
        </WishlistContainer>
      </motion.div>
    </Container>
  );
}

export default Wishlist;
