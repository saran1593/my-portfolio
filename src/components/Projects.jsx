import React from 'react';
import { Grid, Typography, Card, CardContent, Box } from '@mui/material';
import { motion } from 'framer-motion';
import StorageIcon from '@mui/icons-material/Storage';
import LanguageIcon from '@mui/icons-material/Language';
import AndroidIcon from '@mui/icons-material/Android';
import FunctionsIcon from '@mui/icons-material/Functions';
import SchoolIcon from '@mui/icons-material/School';
import SensorsIcon from '@mui/icons-material/Sensors';

const MotionCard = motion(Card);

const cardVariants = {
    hover: {
        scale: 1.03,
        boxShadow: '0px 0px 15px 3px rgba(163, 240, 235, 0.6)',
        transition: { duration: 0.3 }
    }
};

const projects = [
    {
        title: 'Qural-ERP System',
        company: 'Conserve Solution',
        url: 'https://learn.quraltalent.com',
        description:
            'Made significant contributions to the development of an ERP system utilizing Laravel, MySQL, React, and Material UI. Deployed on a DigitalOcean droplet throughout a six-month internship at Agiletribers.',
        icon: <LanguageIcon sx={{ fontSize: 40, color: '#a3f0eb' }} />
    },
    {
        title: 'Reverse Osmosis System (Android)',
        company: 'VChem Watercare',
        description:
            'Significant input in development utilizing FlutterFlow and Firebase (Cloud Functions & Storage). Released on the Google Play Store as part of a six-month internship at Agiletribers.',
        icon: <AndroidIcon sx={{ fontSize: 40, color: '#a3f0eb' }} />
    },
    {
        title: 'AI-Based Learning Support System',
        company: 'Final Year Project',
        description:
            'Created a refined AI model to support educational platforms. incorporated language-based Chat Assistant with AI logic to tutor platform users and make contributions to open source.',
        icon: <FunctionsIcon sx={{ fontSize: 40, color: '#a3f0eb' }} />
    },
    {
        title: 'Inventory Management System',
        description:
            'Created as part of self-learning using React js. Manages stock, sales, and reporting efficiently.',
        icon: <StorageIcon sx={{ fontSize: 40, color: '#a3f0eb' }} />
    },
    {
        title: 'Noise Pollution Detection System',
        description:
            'Designed using virtual IoT sensors using Wokwi simulator to monitor and report environmental noise levels.',
        icon: <SensorsIcon sx={{ fontSize: 40, color: '#a3f0eb' }} />
    }
];

const ProjectsSection = () => {
    return (
        <Box
            sx={{
                backgroundImage: 'linear-gradient(to right, #3f51b5, #9c27b0)',
                color: '#fff',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                px: { xs: 0, sm: 2 },
                textAlign: 'center',
                py: { xs: 2, sm: 4 },
            }}
        >
            <Box sx={{ width: '100%', maxWidth: '1300px', py: { xs: 2, sm: 5 }, mx: 'auto', px: { xs: 1, sm: 2 } }}>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                        background: 'linear-gradient(90deg,rgb(225, 255, 107),rgb(255, 61, 197))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        textFillColor: 'transparent',
                        display: 'inline-block',
                        fontSize: { xs: '2rem', sm: '2.5rem' },
                    }}
                >
                    My Projects
                </Typography>

                <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} rowSpacing={{ xs: 3, sm: 5, md: 7 }} alignItems="stretch" wrap="wrap" sx={{ justifyContent: 'center' }}>
                    {projects.map((project, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center', minWidth: 0 }}>
                            <MotionCard
                                whileHover="hover"
                                variants={cardVariants}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    background: 'linear-gradient(135deg, #4844c1, #9619e8)',
                                    color: '#fff',
                                    borderRadius: 3,
                                    width: '100%',
                                    maxWidth: { xs: 320, sm: 340, md: 360 },
                                    minWidth: 0,
                                    height: '100%',
                                    p: { xs: 1, sm: 2 },
                                    flex: 1,
                                }}
                            >
                                <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', px: { xs: 1, sm: 2 }, py: { xs: 1, sm: 2 } }}>
                                    <Box display="flex" alignItems="center" gap={2} mb={2}>
                                        {React.cloneElement(project.icon, { sx: { ...project.icon.props.sx, fontSize: { xs: 32, sm: 40 } } })}
                                        <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                                            {project.title}
                                        </Typography>
                                    </Box>
                                    <Typography variant="body2" sx={{ mb: 1, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                                        <strong>Company:</strong> {project.company || 'Personal Project'}
                                    </Typography>
                                    {project.url && (
                                        <Typography variant="body2" sx={{ mb: 1, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                                            <strong>URL:</strong>{' '}
                                            <a href={project.url} style={{ color: '#a3f0eb', wordBreak: 'break-all', fontSize: 'inherit' }} target="_blank" rel="noopener noreferrer">
                                                {project.url}
                                            </a>
                                        </Typography>
                                    )}
                                    <Typography variant="body2" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>{project.description}</Typography>
                                </CardContent>
                            </MotionCard>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default ProjectsSection;
