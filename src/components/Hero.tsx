import React from 'react';
import { Container, Typography, Box, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Hero: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: theme.palette.background.default,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.primary.main,
                mb: 3,
                fontFamily: 'monospace',
              }}
            >
              Hi, my name is
            </Typography>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 800,
                mb: 2,
                color: theme.palette.text.primary,
              }}
            >
              [Your Name]
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.5rem', md: '2rem' },
                color: theme.palette.text.secondary,
                mb: 4,
                fontWeight: 400,
              }}
            >
              I build things for the web
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="outlined"
                size="large"
                href="#projects"
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
                Check out my work
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="#contact"
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
                Get in touch
              </Button>
            </Box>
          </motion.div>
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <Button
            href="#projects"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
              color: theme.palette.primary.main,
              '&:hover': {
                background: 'rgba(100, 255, 218, 0.1)',
              },
            }}
          >
            <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
              Scroll Down
            </Typography>
            <ArrowDownwardIcon />
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero; 