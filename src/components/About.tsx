import React from 'react';
import { Container, Typography, Box, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const theme = useTheme();

  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'SQL',
    'Git',
    'AWS',
  ];

  return (
    <Box
      id="about"
      sx={{
        py: 15,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography
                variant="h2"
                component="h2"
                gutterBottom
                sx={{
                  mb: 4,
                  fontWeight: 700,
                  color: theme.palette.text.primary,
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    color: theme.palette.primary.main,
                    fontFamily: 'monospace',
                    fontSize: '1.2rem',
                    display: 'block',
                    mb: 1,
                  }}
                >
                  02. About Me
                </Typography>
                Who I Am
              </Typography>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box sx={{ mb: 4 }}>
                <Typography 
                  variant="body1" 
                  paragraph
                  sx={{ color: theme.palette.text.secondary }}
                >
                  Hello! I'm [Your Name], a passionate full-stack developer who loves building things for the web. 
                  My journey in web development started back in [Year] when I decided to try customizing a WordPress theme — turns out hacking together a custom theme taught me a lot about HTML & CSS!
                </Typography>
                <Typography 
                  variant="body1" 
                  paragraph
                  sx={{ color: theme.palette.text.secondary }}
                >
                  Fast-forward to today, and I've had the privilege of working at various organizations, from startups to large corporations. 
                  My main focus these days is building accessible, inclusive products and digital experiences.
                </Typography>
                <Typography 
                  variant="body1"
                  sx={{ color: theme.palette.text.secondary }}
                >
                  Here are a few technologies I've been working with recently:
                </Typography>
              </Box>
              <Grid container spacing={2}>
                {skills.map((skill) => (
                  <Grid item xs={6} sm={4} key={skill}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography
                        component="span"
                        sx={{
                          color: theme.palette.primary.main,
                          mr: 1,
                          fontFamily: 'monospace',
                        }}
                      >
                        ▹
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: theme.palette.text.secondary }}
                      >
                        {skill}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 20,
                    left: 20,
                    border: `2px solid ${theme.palette.primary.main}`,
                    borderRadius: 4,
                    zIndex: 0,
                  },
                }}
              >
                <Box
                  component="img"
                  src="https://via.placeholder.com/400x500"
                  alt="Profile"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 4,
                    position: 'relative',
                    zIndex: 1,
                    filter: 'grayscale(100%)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      filter: 'none',
                      transform: 'translate(-5px, -5px)',
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 