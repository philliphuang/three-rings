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
            <Typography gutterBottom variant="h1" align="center" sx={{fontFamily: '"Ma Shan Zheng", serif'}}>三环</Typography>
            <Typography variant="h4" align="center" sx={{
              letterSpacing: "0.3em",
              marginRight: "-0.3em", 
              fontFamily: "serif",
            }}>入名校传帮带</Typography>
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
  
        <Box sx={{ display: "flex", justifyContent: "center", py: 8}}>
          <AnimationTwoToneIcon fontSize="large" sx={{ color: theme.palette.grey[400]}}/>
        </Box>
    
        <SwitchTransition>
          { 
            chinese ?  
            <Fade key={chinese} timeout={500}>
              <div>
              <Typography variant="h3" align="center" sx={{pb:8, fontFamily: '"Ma Shan Zheng", serif'}}>
                跟随我们的脚步
              </Typography>

              <Typography align="center" sx={{pb: 2, letterSpacing: "0.3em", marginRight: "-0.3em",}}>
                原理
              </Typography>
              <Typography paragraph>
                为什么大学申请看似完美的学生仍然被拒绝? 大学希望学生出类拔萃，但升学顾问只关注其他人已经拥有的东西： 考试成绩，课外活动，论文写作和暑假规划。
              </Typography>
              <Typography paragraph>
                三环不一样! 我们，作为哈佛和伯克利的新毕业生， 知道从顶尖学校中脱颖而出的秘诀：你的激情，你的向往，你的爱好，你的特点及大学招生的喜好，全方位科学结合，扬长避短。 正如我们在自己和同龄人身上所看到的那样，把学生有限的时间和精力集中在特定的方向，实现他人无法达到的目的。
              </Typography>
              <Typography paragraph>
                我们花了数年时间探索我们独有的特色，我们可以帮助您找到您的特色。我们会像兄弟姐妹一样详细了解您，发现您最强大的闪光点。然后，利用我们的经验，将您的理想转化为大学想要的改变世界的本领。
              </Typography>

              <Box  
                sx={{
                  border: 0,
                  borderRadius: 0,
                  p: 4,
                  my: 8,
                  background: theme.palette.grey[200],
                }}
              >
              <Typography align="center" sx={{pb: 2, letterSpacing: "0.3em", marginRight: "-0.3em",}}>
                导师
              </Typography>
              <Typography paragraph>
                哈佛 2018 毕业, SAT 满分, GPA 4.0, 写作比赛全州夺冠, 为其所在高中十年来首次被哈佛大学录取的学生。华裔男生。会英语和国语。
              </Typography>
              <Divider sx={{my:4}}/>
              <Typography align="center" sx={{pb: 2, letterSpacing: "0.3em", marginRight: "-0.3em",}}>
                导师
              </Typography>
              <Typography paragraph>
                伯克利 2018 毕业, 计算机科学与经济学双学位, 旧金山湾区本地人, 被所有 UC 录取。华裔女生。会英语和国语。
              </Typography>
              <Divider sx={{my:4}}/>
              <Typography align="center" sx={{pb: 2, letterSpacing: "0.3em", marginRight: "-0.3em",}}>
                导师
              </Typography>
              <Typography paragraph>
                哈佛 2018 毕业, 世界顶尖科技公司主管工程师, 7 年辅导经验, 8 艺术媒介, 5 乐器, 6 运动。华裔男生。
              </Typography>
              </Box>

              <Typography align="center" sx={{pb: 2, letterSpacing: "0.3em", marginRight: "-0.3em",}}>
                申请
              </Typography>
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
              <Typography variant="h4" align="center" sx={{pb:8}}>
                  Follow in our footsteps.
              </Typography>

              <Typography align="center" sx={{pb: 2, letterSpacing: "0.3em", marginRight: "-0.3em",}}>
                PHILOSOPHY
              </Typography>
              <Typography paragraph>
                Why do students that seem to have the perfect college application still get rejected? Colleges want students that stand out, but college admissions consultants focus on what everyone else already has: grades and tests; clubs and activities; essay writing and summer programs.
              </Typography>
              <Typography paragraph>
                Three Rings is different. As recent graduates from Harvard and Berkeley, we know the secret to standing out to top schools: genuine passion for a unique specialty. As we witnessed in ourselves and our peers, when students devote their attention to a particular niche, they achieve things others never could.
              </Typography>
              <Typography paragraph>
                We spent years exploring our unique specialties, and we can help you find yours. We first get to know you closely&#8212;much like a sibling&#8212;and discover your strongest ambitions. Then, using our experience, we transform your enthusiasm into the world-changing accomplishments colleges want.
              </Typography>

              <Box  
                sx={{
                  border: 0,
                  borderRadius: 0,
                  p: 4,
                  my: 8,
                  background: theme.palette.grey[200],
                }}
              >
              <Typography align="center" sx={{pb: 2, letterSpacing: "0.3em", marginRight: "-0.3em",}}>
                MENTOR
              </Typography>
              <Typography paragraph>
                Harvard Graduate 2018, SAT Perfect Score, GPA 4.0, 1st place essay statewide, first Harvard admit in 10+ years from his high school.
              </Typography>
              <Divider sx={{my:4}}/>
              <Typography align="center" sx={{pb: 2, letterSpacing: "0.3em", marginRight: "-0.3em",}}>
                MENTOR
              </Typography>
              <Typography paragraph>
                Berkeley Graduate 2018, Computer Science and Economics double major, SF Bay Area native, accepted by all UCs.
              </Typography>
              <Divider sx={{my:4}}/>
              <Typography align="center" sx={{pb: 2, letterSpacing: "0.3em", marginRight: "-0.3em",}}>
                MENTOR
              </Typography>
              <Typography paragraph>
                Harvard Graduate 2018, top tech company engineering lead, 7 years of tutoring experience, 8 art mediums, 5 musical instruments, 6 sports.
              </Typography>
              </Box>


              <Typography align="center" sx={{pb: 2, letterSpacing: "0.3em", marginRight: "-0.3em",}}>
                APPLICATIONS
              </Typography>
              <Typography paragraph>
                Due to limited availability, we individually select a small cohort of students to participate in our program.
                To apply for a mentor, please email <Link underline="hover">apply@threeringsmentors.com</Link>.
              </Typography>

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
