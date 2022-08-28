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
  
        <Box sx={{ display: "flex", justifyContent: "center", p: 8}}>
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
                  三环（Three Rings）为竞争异常激烈的大学录取提供指导。根据我们自身被名校录取的经验，我们能够提供最好的建议。
                </Typography>
                <Divider sx={{my:4}}/>
                <Typography paragraph>
                  我们的计划支持由我们的导师单独选择的一小部分学生。 申请导师，请提交以下信息至 <Link underline="hover">apply@threeringsmentors.com</Link>：
                </Typography>
                <ul>
                  <li>学生姓名和就读年份</li>
                  <li>父母或监护人的姓名和联系信息</li>
                  <li>简要描述学生的相关活动和表现，例如他们的 GPA、考试分数以及课堂内外的兴趣</li>
                  <li>学生目标的简要描述、包括他们的目标大学、预期专业和其他人生抱负</li>
                </ul>
                <Typography sx={{mt: 12, mb: 4, color: theme.palette.grey[400]}} variant="body2" align="center">
                  三环传帮带 {today.getFullYear()}
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
                  Three Rings provides college admissions guidance from recent graduates of exceptionally competitive undergraduate programs. We believe that only those who conquer the process themselves can offer the best advice.
                </Typography>
                <Divider sx={{my:4}}/>
                <Typography paragraph>
                  Our program supports a small cohort of students individually selected by our mentors.
                  To apply for mentorship please submit the following information to <Link underline="hover">apply@threeringsmentors.com</Link>:
                </Typography>
                <ul>
                  <li>The student's name and year of school</li>
                  <li>A parent or guardian's name and contact information (if applicable)</li>
                  <li>A brief description of the student's relevant activities and performance, such as their GPA, test scores, and interests in and out of the classroom</li>
                  <li>A brief description of the student's goals, including their target colleges, anticipated majors, and other life ambitions</li>
                </ul>
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
