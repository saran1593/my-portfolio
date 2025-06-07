import { Box } from '@mui/material';
import Home from './components/Home';
import About from './components/About';
import ProjectsSection from './components/Projects';
import ContactSection from './components/Contact';
export default function App() {
  return (
    <Box sx={{
      minHeight: '100vh',
      backgroundImage: 'linear-gradient(to right, #3f51b5, #9c27b0)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      // justifyContent: 'center',
      alignItems: 'center',
      px: 2,
      textAlign: 'center',
    }}>
      <Home />
      <About />
      <ProjectsSection />
      <ContactSection />
    </Box>
  );
}
