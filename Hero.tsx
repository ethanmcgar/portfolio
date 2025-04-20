import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('Welcome to My Portfolio');
  const [subtitle, setSubtitle] = useState('I create beautiful and functional web experiences');

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', py: 8 }}>
            {isEditing ? (
              <Box sx={{ mb: 4 }}>
                <TextField
                  fullWidth
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  variant="standard"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  variant="standard"
                  sx={{ mb: 2 }}
                />
                <Button variant="contained" onClick={() => setIsEditing(false)}>
                  Save
                </Button>
              </Box>
            ) : (
              <Box onClick={() => setIsEditing(true)} sx={{ cursor: 'pointer' }}>
                <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {title}
                </Typography>
                <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
                  {subtitle}
                </Typography>
              </Box>
            )}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero; 