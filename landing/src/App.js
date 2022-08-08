import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { SwitchTransition } from 'react-transition-group';
import Fade from '@mui/material/Fade';
import LightbulbCircleTwoToneIcon from '@mui/icons-material/LightbulbCircleTwoTone';
import { useTheme } from '@mui/material/styles';

function App() {
  const [chinese, setChinese] = useState(false);
  const theme = useTheme();
  const today = new Date();
  return (
    <Container maxWidth="sm">

      <Box sx={{ display: "flex", justifyContent: "center", mt:2}}>
        <ButtonGroup variant="text" sx={{width: "50%"}} color="primary">
          <Button sx={{width: "50%"}} onClick={() => setChinese(false)}>English</Button>
          <Button sx={{width: "50%"}} onClick={() => setChinese(true)}>中文</Button>
        </ButtonGroup>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", p: 8}}>
        <LightbulbCircleTwoToneIcon fontSize="large" sx={{ color: theme.palette.grey[400]}}/>
      </Box>

      <SwitchTransition>
        { 
          chinese ?  
          <Fade key={chinese}>
            <div>
              <Typography variant="h4" align="center" sx={{pb:4}}>
                中文
              </Typography>
              <Typography paragraph align="justify">
                中文
              </Typography>
              <Typography paragraph align="justify">
                中文
              </Typography>
              <Divider sx={{my:4}}/>
              <Typography>
                中文
              </Typography>
              <Typography sx={{mt: 16, color: theme.palette.grey[400]}} variant="body2" align="center">
                中文 {today.getFullYear()}
              </Typography>
            </div>
          </Fade>
          :
          <Fade key={chinese}>
            <div>
              <Typography variant="h4" align="center" sx={{pb:4}}>
                Follow in our footsteps.
              </Typography>
              <Typography paragraph align="justify">
                Star Path offers college admissions guidance from recent graduates of exceptionally competitive undergraduate programs. We believe only those who experience and conquer the process themselves can give the best advice. Our mentors understand firsthand the qualities that top universities want and the practicalities of integrating those qualities into one's life.
              </Typography>
              <Divider sx={{my:4}}/>
              <Typography paragraph align="justify">
                Our program supports a small cohort of students individually selected by our mentors. New availability opens when students exit the program or mentors offer additional time slots.
              </Typography>
              <Typography>
                Applications are currently open. To apply for mentorship please submit the following information to <Link underline="hover">applications@paladinmentors.com</Link> or via WeChat at <Link underline="hover">WeChatIDHere</Link>:
              </Typography>
              <ul>
                <li>The student's name and year of school</li>
                <li>The parent's name and contact information</li>
                <li>A brief description of the student's relevant activities and performance (e.g. interests, classes, GPA, extracurriculars, test scores, etc.)</li>
                <li>A brief description of the student's long term goals (e.g. target colleges, majors, life goals, etc.)</li>
              </ul>
              <Typography sx={{mt: 12, mb: 4, color: theme.palette.grey[400]}} variant="body2" align="center">
                Star Path Mentorship Group {today.getFullYear()}
              </Typography>
            </div>
          </Fade>
        }
      </SwitchTransition>
    </Container>
  );
}

export default App;
