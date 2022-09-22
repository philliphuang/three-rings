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
import AnimationTwoToneIcon from '@mui/icons-material/AnimationTwoTone';
import { useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


function App(props) {
  const [chinese, setChinese] = useState(props.chinese);
  const [splash, setSplash] = useState(true);
  const theme = useTheme();
  const today = new Date();

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplash(false);
    }, 1500);
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
        {
          chinese ?
          <Grid item xs={3}>
            <Typography gutterBottom variant="h2" align="center">三环</Typography>
            <Typography variant="h6" align="center">入名校传帮带</Typography>
          </Grid>  
          : 
          <Grid item xs={3}>
            <Typography gutterBottom variant="h2" align="center">Three Rings</Typography>
            <Typography variant="h6" align="center">College Admissions Mentorship</Typography>
          </Grid>  
        }
       
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
  
        <Box sx={{ display: "flex", justifyContent: "center", py: 6}}>
          <AnimationTwoToneIcon fontSize="large" sx={{ color: theme.palette.grey[400]}}/>
        </Box>
    
        <SwitchTransition>
          { 
            chinese ?  
            <Fade key={chinese} timeout={500}>
              <div>
                <Typography variant="h4" align="center" sx={{pb:4}}>
                  跟随我们的脚步
                </Typography>
                <Typography paragraph>
                  三环 (Three Rings) 为竞争异常激烈的大学录取提供指导。根据我们自身被名校录取的经验, 我们能够提供最好的建议。
                </Typography>
                <Divider sx={{my:4}}/>
                <Typography paragraph>
                  我们的计划仅针对导师们精心挑选的一部分学生。 如感兴趣，请发信息至 <Link underline="hover">apply@threeringsmentors.com</Link>。
                </Typography>
                <Typography sx={{mt: 12, mb: 4, color: theme.palette.grey[400]}} variant="body2" align="center">
                  三环传帮带 {today.getFullYear()}
                </Typography>
              </div>
            </Fade>
            :
            <Fade key={chinese} timeout={500}>
              <div>
              <Typography variant="h4" align="center" sx={{pb:10}}>
                  Follow in our footsteps.
              </Typography>

              <Accordion elevation={0} sx={{py: 1, background:"none", '&:before': {display: 'none'}}} disableGutters>
                <AccordionSummary>
                <Typography align="center" sx={{width: "100%", letterSpacing: "0.3em", marginRight: "-0.3em",}}>
                  PHILOSOPHY
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography paragraph>
                    Why do students that seem to have the perfect college application still get rejected? Colleges want students that stand out, but college consultants focus on what everyone else already has: grades and tests; clubs and activities; essay writing and summer programs.
                  </Typography>
                  <Typography paragraph>
                    Three Rings is different. As recent graduates from Harvard and Berkeley, we know the secret to standing out to top schools: passion. Only genuine passion drives a student to achieve things others never even imagine.
                  </Typography>
                  <Typography paragraph>
                    Years of exploring our own passions let us guide others to find theirs. We first build a deep, sibling-like connection with students to help them understand themselves and find a specialty they truly enjoy. Then, we use our experience to transform their specialty into the world-class accomplishments that colleges want.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion elevation={0} sx={{py: 1, background:"none", '&:before': {display: 'none'}}} disableGutters>
                <AccordionSummary>
                <Typography align="center" sx={{width: "100%", letterSpacing: "0.3em", marginRight: "-0.3em",}}>
                  MENTORS
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Mentor 1: Harvard Graduate 2018
                  </Typography>
                  <Typography paragraph>
                    SAT Perfect Score, GPA 4.0, 1st place essay statewide, first Harvard admit in 10+ years from his high school. Chinese American male. Speaks English & Mandarin.
                  </Typography>
                  <Typography>
                    Mentor 2: Berkeley Graduate 2018
                  </Typography>
                  <Typography paragraph>
                    Computer Science and Economics double major, Monta Vista High graduate, accepted by all UCs. Chinese American female. Speaks English & Mandarin.
                  </Typography>
                  <Typography>
                    Mentor 3: Harvard Graduate 2018
                  </Typography>
                  <Typography paragraph>
                    Top tech company engineering lead, 7 years of tutoring experience, 8 art mediums, 5 musical instruments, 6 sports. Chinese American male.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion elevation={0} sx={{py: 1, background:"none", '&:before': {display: 'none'}}} disableGutters>
                <AccordionSummary>
                  <Typography align="center" sx={{width: "100%", letterSpacing: "0.3em", marginRight: "-0.3em",}}>
                    APPLICATIONS
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography paragraph>
                    Due to limited availability, we individually select a small cohort of students to participate in our program.
                    To apply for a mentor, please email <Link underline="hover">apply@threeringsmentors.com</Link>.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Typography sx={{mt: 12, mb: 4, color: theme.palette.grey[400]}} variant="body2" align="center">
                Three Rings Mentors {today.getFullYear()}
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
