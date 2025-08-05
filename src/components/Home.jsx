import React from 'react';
import { Box, Typography, CardMedia, Avatar, Container, Stack } from '@mui/material';
import { motion } from "motion/react";
import saran from '../assests/saran.jpg';
const Home = () => {
    return (
        <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'center', md: 'flex-start' }, justifyContent: 'center', pt: { xs: 6, sm: 10 }, pb: { xs: 4, sm: 8 } }}>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 4, md: 8 }} alignItems="center" width="100%">
                <Box sx={{ display: 'flex', justifyContent: 'center', width: { xs: '100%', md: '40%' } }}>
                    <CardMedia>
                        <Avatar
                            sx={{
                                width: { xs: 120, sm: 160, md: 220 },
                                height: { xs: 120, sm: 160, md: 220 },
                                boxShadow: 3,
                            }}
                            alt="User Profile"
                            src={saran}
                        />
                    </CardMedia>
                </Box>
                <Box sx={{ width: { xs: '100%', md: '60%' }, textAlign: { xs: 'center', md: 'left' } }}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            gutterBottom
                            sx={{
                                background: 'linear-gradient(90deg,rgb(225, 255, 107),rgb(255, 61, 197))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                textFillColor: 'transparent',
                                mt: { xs: 2, sm: 4, md: 8 },
                                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                            }}
                        >
                            Hey!, I'm Saran S V
                        </Typography>
                    </motion.div>
                    <Typography variant="h5" gutterBottom sx={{ fontSize: { xs: '1.1rem', sm: '1.5rem' } }}>
                        Aspiring Fullstack Developer
                    </Typography>
                    <Container disableGutters sx={{ maxWidth: 'md', px: { xs: 0, sm: 2 } }}>
                        <Typography variant="body1" sx={{ mb: 3, fontSize: { xs: '0.95rem', sm: '1.1rem' } }}>
                            My name is Saran S V, and I have a 1 year of Experience who is enthusiastic about software engineering and web development. During my internship at AgileTribers, I helped with ongoing ERP and reverse osmosis projects. Making a difference in the tech industry and being a successful software developer are my objectives.
                        </Typography>
                    </Container>
                </Box>
            </Stack>
        </Container>
    );
};

export default Home;
