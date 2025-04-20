import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <AppBar 
      position="fixed" 
      sx={{
        background: isScrolled ? 'rgba(10, 25, 47, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled ? '0 10px 30px -10px rgba(2,12,27,0.7)' : 'none',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                fontWeight: 700,
                color: theme.palette.primary.main,
              }}
            >
              Portfolio
            </Typography>
          </motion.div>

          {isMobile ? (
            <IconButton
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              sx={{ color: theme.palette.primary.main }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {navItems.map((item, index) => (
                <Button
                  key={item.label}
                  href={item.href}
                  sx={{
                    mx: 1,
                    color: theme.palette.text.primary,
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <Typography variant="body2" sx={{ mr: 1, color: theme.palette.primary.main }}>
                    0{index + 1}.
                  </Typography>
                  {item.label}
                </Button>
              ))}
            </motion.div>
          )}
        </Toolbar>

        {isMobile && isMobileMenuOpen && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              py: 2,
              background: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            {navItems.map((item, index) => (
              <Button
                key={item.label}
                href={item.href}
                fullWidth
                sx={{
                  py: 1,
                  color: theme.palette.text.primary,
                  '&:hover': {
                    color: theme.palette.primary.main,
                  },
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Typography variant="body2" sx={{ mr: 1, color: theme.palette.primary.main }}>
                  0{index + 1}.
                </Typography>
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </Container>
    </AppBar>
  );
};

export default Navbar; 