import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Chip,
  IconButton,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Project One',
    description: 'A modern web application built with React and Node.js',
    image: 'https://via.placeholder.com/600x400',
    technologies: ['React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'An e-commerce platform with real-time features',
    image: 'https://via.placeholder.com/600x400',
    technologies: ['Next.js', 'TypeScript', 'Firebase'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A mobile-first social media dashboard',
    image: 'https://via.placeholder.com/600x400',
    technologies: ['React Native', 'Redux', 'GraphQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];

const Projects: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      id="projects"
      sx={{
        py: 8,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              mb: 6,
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
              03. What I've Built
            </Typography>
            My Projects
          </Typography>
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 2,
                      overflow: 'hidden',
                      transition: 'transform 0.3s ease-in-out',
                      backgroundColor: theme.palette.background.paper,
                      '&:hover': {
                        transform: 'translateY(-8px)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="240"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        objectFit: 'cover',
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography variant="h5" component="h3" gutterBottom sx={{ 
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                      }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: theme.palette.text.secondary }} paragraph>
                        {project.description}
                      </Typography>
                      <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(100, 255, 218, 0.1)',
                              color: theme.palette.primary.main,
                              '&:hover': {
                                backgroundColor: 'rgba(100, 255, 218, 0.2)',
                              },
                            }}
                          />
                        ))}
                      </Box>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        {project.githubUrl && (
                          <IconButton
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              color: theme.palette.text.secondary,
                              '&:hover': {
                                color: theme.palette.primary.main,
                              },
                            }}
                          >
                            <GitHubIcon />
                          </IconButton>
                        )}
                        {project.liveUrl && (
                          <IconButton
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              color: theme.palette.text.secondary,
                              '&:hover': {
                                color: theme.palette.primary.main,
                              },
                            }}
                          >
                            <LaunchIcon />
                          </IconButton>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects; 