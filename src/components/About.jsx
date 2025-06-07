import React from 'react';
import { Box, Typography, Container, Divider, Grid, Chip, CardContent } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkIcon from '@mui/icons-material/Work';
import InterestsIcon from '@mui/icons-material/Interests';
import { motion } from "framer-motion";
import { styled } from '@mui/system';
const MotionCard = motion(styled('div')(({ theme }) => ({
    borderRadius: '12px',
    padding: '16px',
    background: 'linear-gradient(90deg, rgb(72, 89, 185), rgb(149, 25, 232))',
    color: '#fff',
    height: '100%',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
})));

const cardHoverAnimation = {
    hover: {
        scale: 1.02,
        boxShadow: '0px 0px 20px 4px rgba(163, 240, 235, 0.8)',
        transition: { duration: 0.4 },
    },
};
const About = () => {
    return (
        <Box
            sx={{ py: { xs: 2, sm: 4 }, px: { xs: 0, sm: 2 } }}
        >
            <Container>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        px: { xs: 1, sm: 2 },
                        py: { xs: 2, sm: 4 },
                    }}
                >

                    <Box sx={{ px: { xs: 0, sm: 2 }, py: { xs: 2, sm: 4 } }}>
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
                            Education & Personal Info
                        </Typography>

                        <Grid container spacing={{ xs: 2, sm: 3 }} justifyContent="center" alignItems="stretch">
                            <Grid item xs={12} sm={6} md={4} display="flex" mb={{ xs: 4, sm: 0 }}>
                                <MotionCard
                                    variants={cardHoverAnimation}
                                    whileHover="hover"
                                    style={{ width: '100%' }}
                                >
                                    <CardContent>
                                        <Box display="flex" alignItems="center" gap={1} mb={1}>
                                            <SchoolIcon sx={{ color: '#a3f0eb' }} />
                                            <Typography variant="h5" fontWeight="bold" sx={{ color: '#a3f0eb', fontSize: { xs: '1.1rem', sm: '1.3rem' } }}>
                                                Education
                                            </Typography>
                                        </Box>
                                        <Typography variant='body1' fontWeight='bold' sx={{ color: '#a3f0eb' }}>SSLC</Typography>
                                        <Typography variant="body2"><strong>School Name  </strong>- Carmel Higher Secondary School, Nagercoil</Typography>
                                        <Typography><strong>Batch</strong>- 2019</Typography>
                                        <Typography variant="body2"><strong>SSLC Percentage</strong>-89.5%</Typography>
                                        <Divider sx={{ width: '100%', mb: 3 }} />
                                        <Typography variant='body1' fontWeight='bold' sx={{ color: '#a3f0eb' }}>HSC</Typography>
                                        <Typography variant="body2"><strong>School Name  </strong>- Carmel Higher Secondary School, Nagercoil</Typography>
                                        <Typography><strong>Batch</strong>- 2021</Typography>
                                        <Typography variant="body2"><strong>HSC Percentage</strong>-90.5%</Typography>
                                        <Divider sx={{ width: '100%', mb: 3 }} />
                                        <Typography variant='body1' fontWeight='bold' sx={{ color: '#a3f0eb' }}>Bachelor's degree</Typography>
                                        <Typography variant="body2"><strong>College Name  </strong>- Univetsity college of Engineering Nagercoil</Typography>
                                        <Typography variant="body2"><strong>Course </strong>- Bachelors of Engineering</Typography>
                                        <Typography variant="body2"><strong>Department </strong>- Computer Science and Engineering</Typography>
                                        <Typography><strong>Batch</strong>- 2021-2025</Typography>
                                        <Typography variant="body2"><strong> CGPA</strong>-8.2</Typography>
                                    </CardContent>
                                </MotionCard>
                            </Grid>

                            <Grid item xs={12} sm={6} md={4} display="flex" mb={{ xs: 4, sm: 0 }}>
                                <MotionCard
                                    variants={cardHoverAnimation}
                                    whileHover="hover"
                                    style={{
                                        width: '100%',
                                        background: 'linear-gradient(90deg, rgb(149, 25, 232),rgb(255, 61, 183))',
                                    }}
                                >
                                    <CardContent>
                                        <Box display="flex" alignItems="center" gap={1} mb={1}>
                                            <AccountCircleIcon sx={{ color: '#ffffff' }} />
                                            <Typography variant="h5" fontWeight="bold" sx={{ color: '#a3f0eb', fontSize: { xs: '1.1rem', sm: '1.3rem' } }}>
                                                Personal Info
                                            </Typography>
                                        </Box>
                                        <Typography variant="body2">
                                            <strong>Father's Name </strong>- Suresh Sahayam
                                        </Typography>
                                        <Typography variant="body2">
                                            <strong>Date of Birth </strong>- 15-Sep,2003
                                        </Typography>
                                        <Typography variant="body2">
                                            <strong>Gender </strong>- Male
                                        </Typography>
                                        <Typography variant="body2">
                                            <strong>Location </strong>
                                            - Nagercoil,Kanyakumari,TamilNadu
                                        </Typography>
                                        <Typography variant='body2'><strong>Nationality </strong>
                                            - Indian</Typography>
                                        <Typography variant="body2">
                                            <strong>Religion</strong>- Christianity
                                        </Typography>
                                        <Typography variant='body2'><strong>Marital Status </strong>
                                            - Single</Typography>
                                        <Typography variant='body2'><strong>Languages </strong>- Tamil,English</Typography>
                                        <Divider sx={{ width: '100%', mb: 3 }} />
                                        <Typography variant="body1" fontWeight="bold" sx={{ color: '#a3f0eb', display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
                                            <WorkIcon sx={{ color: '#ffffff' }} />
                                            <strong>Current Role</strong>
                                        </Typography>

                                        <Typography variant='body2'>Software Developer @ <strong>Agiletribers</strong>,Nagercoil</Typography>
                                        <Divider sx={{ width: '100%', mb: 3 }} />
                                        <Typography variant="body1" fontWeight="bold" sx={{ color: '#a3f0eb', display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
                                            <InterestsIcon sx={{ color: '#ffffff' }} />
                                            <strong>Hobbies & Interest</strong>
                                        </Typography>
                                        <Typography variant='body2'><strong>Technical Interest </strong>- Problem solving, Web development</Typography>
                                        <Typography variant='body2'><strong>Personal Interest </strong>- Volleyball, Swimming, Watching Movies</Typography>
                                    </CardContent>
                                </MotionCard>
                            </Grid>
                        </Grid>
                    </Box>

                    <Divider sx={{ width: { xs: '90%', sm: '60%' }, mb: 3 }} />

                    <Box mb={2}>
                        <Typography variant="h4" fontWeight="bold" gutterBottom
                            sx={{
                                background: 'linear-gradient(90deg,rgb(225, 255, 107),rgb(255, 61, 197))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                textFillColor: 'transparent',
                                display: 'inline-block',
                                fontSize: { xs: '2rem', sm: '2.5rem' },
                            }}>
                            Skills
                        </Typography>
                        <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2} sx={{ px: { xs: 0, sm: 2 } }}>
                            {['HTML',
                                'CSS',
                                'JavaScript',
                                'React.js',
                                'Material UI',
                                'Bootstrap',
                                'Java',
                                'Springboot',
                                'Node.js',
                                'MySQL',
                                'Firebase',
                                'Git',
                                'PHP',
                                'Laravel',
                                'FlutterFlow'
                            ].map((skill, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        p: '2px',
                                        borderRadius: '20px',
                                        background: 'linear-gradient(90deg, #FF6B6B, #3D98FF)',
                                        display: 'inline-block',
                                        minWidth: { xs: '110px', sm: '140px' },
                                    }}
                                >
                                    <Chip
                                        icon={<LaptopMacIcon />}
                                        label={
                                            <Box
                                                component="span"
                                                sx={{
                                                    background: 'linear-gradient(90deg,rgb(255, 255, 107),rgb(255, 61, 197))',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    fontWeight: 'bold',
                                                    fontSize: { xs: '0.9rem', sm: '1rem' },
                                                }}
                                            >
                                                {skill}
                                            </Box>
                                        }
                                        variant="outlined"
                                        sx={{
                                            border: 'none',
                                            backgroundColor: '#4d0585',
                                            color: 'white',
                                            borderRadius: '20px',
                                            '& .MuiChip-icon': {
                                                color: '#fff',
                                                background: 'linear-gradient(90deg,rgb(255, 255, 107),rgb(255, 61, 197))',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                            },
                                            px: { xs: 1, sm: 2 },
                                            py: { xs: 0.5, sm: 1 },
                                            fontSize: { xs: '0.9rem', sm: '1rem' },
                                        }}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default About;
