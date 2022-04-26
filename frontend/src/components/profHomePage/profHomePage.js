import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import courses from '../../data/enrolledCourses';
import MenuAppBar from '../../header';
import img from '../../images/coding.jpg';
import "./profHomePage.css"
import AddCourse from './addCourse';

export default function ProfHomepage() {
  var name = "Prof. Narasimha"
  return (
    <div>
    <MenuAppBar />
    <h2> Hi {name}, Your course(s) are</h2>
    <div style={{paddingLeft : '15px', paddingBottom : '10px'}}>
      <AddCourse />
    </div>
    <div style={{paddingLeft : '15px'}}>
    <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        style = {{ height: 200}}
        component="img"
        src={img}
        height="140"
        image= {img}
        alt="image"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {courses[0].name}
        </Typography>
        <Typography variant="h7" color="text.primary">
          Computer Programming
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small" variant="contained" href="#text-buttons">Get Details</Button> */}
        <Button size="small" variant="contained" href="/profCourse">Go to Course Content</Button>
      </CardActions>
    </Card>
    </div>
    </div>
  );
}