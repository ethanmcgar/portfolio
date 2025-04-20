import React from 'react';
import { Container, Typography, Box, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      id="contact"
      sx={{
        py: 15,
        backgroundColor: theme.palette.background.default,
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              component="span"
              sx={{
                color: theme.palette.primary.main,
                fontFamily: 'monospace',
                fontSize: '1.2rem',
                mb: 2,
                display: 'block',
              }}
            >
              04. What's Next?
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 3,
                fontWeight: 700,
                color: theme.palette.text.primary,
              }}
            >
              Get In Touch
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                mb: 5,
              }}
            >
              I'm currently looking for new opportunities, and my inbox is always open.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </Typography>
            <Button
              variant="outlined"
              size="large"
              href="mailto:your.email@example.com"
              sx={{
                borderRadius: '4px',
                px: 4,
                py: 1.5,
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
                '&:hover': {
                  borderColor: theme.palette.primary.main,
                  background: 'rgba(100, 255, 218, 0.1)',
                },
              }}
            >
              Say Hello
            </Button>

            <Box sx={{ mt: 8 }}>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  fontFamily: 'monospace',
                }}
              >
                Built with React & Material-UI
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact; 