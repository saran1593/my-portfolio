import React from "react";
import { Box, Typography, Stack, Link, Paper } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactSection = () => {
    return (
        <Box
            sx={{
                minHeight: { xs: '40vh', sm: '30vh' },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                px: { xs: 1, sm: 4 },
                py: { xs: 2, sm: 4 },
            }}
        >
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
                Contact Me
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 6 }} mt={4} width="100%" sx={{ justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ width: { xs: '100%', sm: 'auto' }, justifyContent: { xs: 'center', sm: 'flex-start' }, mb: { xs: 1, sm: 0 } }}>
                    <LinkedInIcon sx={{ fontSize: { xs: 24, sm: 30 }, verticalAlign: 'middle' }} />
                    <Link
                        href="https://www.linkedin.com/in/saran-s-v-602775291/"
                        target="_blank"
                        underline="hover"
                        color="inherit"
                        sx={{ fontSize: { xs: 16, sm: 20 }, display: 'flex', alignItems: 'center', wordBreak: 'break-all' }}
                    >
                        LinkedIn
                    </Link>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1} sx={{ width: { xs: '100%', sm: 'auto' }, justifyContent: { xs: 'center', sm: 'flex-start' }, mb: { xs: 1, sm: 0 } }}>
                    <WhatsAppIcon sx={{ color: "#25D366", fontSize: { xs: 24, sm: 30 }, verticalAlign: 'middle' }} />
                    <Link
                        href="https://wa.me/916369427466"
                        target="_blank"
                        underline="hover"
                        color="inherit"
                        sx={{ fontSize: { xs: 16, sm: 20 }, display: 'flex', alignItems: 'center', wordBreak: 'break-all' }}
                    >
                        WhatsApp
                    </Link>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1} sx={{ width: { xs: '100%', sm: 'auto' }, justifyContent: { xs: 'center', sm: 'flex-start' }, mb: { xs: 1, sm: 0 } }}>
                    <EmailIcon sx={{ color: '#F44336', fontSize: { xs: 24, sm: 30 }, verticalAlign: 'middle' }} />
                    <Link
                        href="mailto:saranz1593@gmail.com"
                        underline="hover"
                        color="inherit"
                        sx={{ fontSize: { xs: 16, sm: 20 }, display: 'flex', alignItems: 'center', wordBreak: 'break-all' }}
                    >
                        saranz1593@gmail.com
                    </Link>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1} sx={{ width: { xs: '100%', sm: 'auto' }, justifyContent: { xs: 'center', sm: 'flex-start' }, mb: { xs: 1, sm: 0 } }}>
                    <InstagramIcon sx={{ color: "#E1306C", fontSize: { xs: 24, sm: 30 }, verticalAlign: 'middle' }} />
                    <Link
                        href="https://www.instagram.com/saran.__z/"
                        target="_blank"
                        underline="hover"
                        color="inherit"
                        sx={{ fontSize: { xs: 16, sm: 20 }, display: 'flex', alignItems: 'center', wordBreak: 'break-all' }}
                    >
                        Instagram
                    </Link>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1} sx={{ width: { xs: '100%', sm: 'auto' }, justifyContent: { xs: 'center', sm: 'flex-start' }, mb: { xs: 1, sm: 0 } }}>
                    <GitHubIcon sx={{ fontSize: { xs: 24, sm: 30 }, verticalAlign: 'middle' }} />
                    <Link
                        href="https://github.com/saran1593"
                        target="_blank"
                        underline="hover"
                        color="inherit"
                        sx={{ fontSize: { xs: 16, sm: 20 }, display: 'flex', alignItems: 'center', wordBreak: 'break-all' }}
                    >
                        GitHub
                    </Link>
                </Stack>
            </Stack>
        </Box>
    );
};

export default ContactSection;
