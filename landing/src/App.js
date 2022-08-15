import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import { SwitchTransition } from 'react-transition-group';
import Fade from '@mui/material/Fade';
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import { useTheme } from '@mui/material/styles';

function App() {
  const [chinese, setChinese] = useState(false);
  const [splash, setSplash] = useState(true);
  const theme = useTheme();
  const today = new Date();

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SwitchTransition>
    {
      splash 
      ? 
      <Fade key={splash} timeout={1000}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '90vh' }}
      >
        <Grid item xs={3}>
          <Typography gutterBottom variant="h2" align="center">Three Gates</Typography>
          <Typography variant="h6" align="center">College Admissions Mentorship</Typography>
        </Grid>  
      </Grid> 
      </Fade>
      : 
      <Fade key={splash} timeout={2000}>
      <Container maxWidth="sm">
        <Box sx={{ display: "flex", justifyContent: "center", mt:2}}>
          <ButtonGroup variant="text" sx={{width: "50%"}} color="primary">
            <Button sx={{width: "50%"}} onClick={() => setChinese(false)}>English</Button>
            <Button sx={{width: "50%"}} onClick={() => setChinese(true)}>中文</Button>
          </ButtonGroup>
        </Box>
  
        <Box sx={{ display: "flex", justifyContent: "center", p: 8}}>
          <SchoolTwoToneIcon fontSize="large" sx={{ color: theme.palette.grey[400]}}/>
        </Box>
    
        <SwitchTransition>
          { 
            chinese ?  
            <Fade key={chinese} timeout={500}>
              <div>
                <Typography variant="h4" align="center" sx={{pb:4}}>
                  中文
                </Typography>
                <Typography paragraph align="justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non eros nulla. Proin sollicitudin diam ultricies, placerat turpis sed, sodales nisi. Fusce semper maximus velit, cursus accumsan orci. Praesent consectetur, libero vitae rutrum ultrices, massa mauris placerat lectus, quis pulvinar mauris nibh nec risus. Nulla tempor vestibulum nisl, eget aliquam urna scelerisque in.
                </Typography>
                <Divider sx={{my:4}}/>
                <Typography paragraph align="justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non eros nulla. Proin sollicitudin diam ultricies, placerat turpis sed, sodales nisi. Fusce semper maximus velit, cursus accumsan orci. Praesent consectetur, libero vitae rutrum ultrices, massa mauris placerat lectus, quis pulvinar mauris nibh nec risus. Nulla tempor vestibulum nisl, eget aliquam urna scelerisque in.
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non eros nulla. Proin sollicitudin diam ultricies, placerat turpis sed, sodales nisi. Fusce semper maximus velit, cursus accumsan orci. Praesent consectetur, libero vitae rutrum ultrices, massa mauris placerat lectus, quis pulvinar mauris nibh nec risus. Nulla tempor vestibulum nisl, eget aliquam urna scelerisque in.
                </Typography>
                <Typography sx={{mt: 16, color: theme.palette.grey[400]}} variant="body2" align="center">
                  中文 {today.getFullYear()}
                </Typography>
              </div>
            </Fade>
            :
            <Fade key={chinese} timeout={500}>
              <div>
                <Typography variant="h4" align="center" sx={{pb:4}}>
                  Follow in our footsteps.
                </Typography>
                <Typography paragraph>
                  Three Gates provides college admissions guidance from recent graduates of exceptionally competitive undergraduate programs. We believe that only those who conquer the process themselves can offer the best advice.
                </Typography>
                <Divider sx={{my:4}}/>
                <Typography paragraph>
                  Our program supports a small cohort of students individually selected by our mentors.
                  To apply for mentorship please submit the following information to <Link underline="hover">apply@threegates.college</Link> or via WeChat at <Link underline="hover">WeChatIDHere</Link>:
                </Typography>
                <ul>
                  <li>The student's name and year of school</li>
                  <li>A parent or guardian's name and contact information</li>
                  <li>A brief description of the student's relevant activities and performance, such as their GPA, test scores, and interests in and out of the classroom</li>
                  <li>A brief description of the student's goals, including their target colleges, anticipated majors, and other ambitions</li>
                </ul>
                <Typography sx={{mt: 12, mb: 4, color: theme.palette.grey[400]}} variant="body2" align="center">
                  Three Gates College Admissions {today.getFullYear()}
                </Typography>
              </div>
            </Fade>
          }
        </SwitchTransition>
      </Container>
      </Fade>
    }
    </SwitchTransition>
  );
}

export default App;
