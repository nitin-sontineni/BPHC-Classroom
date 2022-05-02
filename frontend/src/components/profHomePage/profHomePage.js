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

function createData(no, courseid, coursename) {
  return { no, courseid , coursename };
}

const data = [
  createData("1", "CS F111", "Computer Programming"),
  createData("2", "CS F211", "Data Structures"),
]
export default function ProfHomepage() {
  var name = "Prof. Narasimha";

  return (
    <div>
    <MenuAppBar />
    <h2> Hi {name}, Your course(s) are</h2>
    <div style={{paddingLeft : '15px', paddingBottom : '10px'}}>
      <AddCourse />
    </div>
    <div style={{paddingLeft : '15px', paddingRight : '15px', display: "inline-block", "white-space": "nowrap"}}>
    {(data).map((elem) => (
    <Card sx={{ maxWidth: 345 }} style={{ paddingRight : '15px', display: "inline-block", "white-space": "nowrap",  justifyContent: "space-between" }}>
      <CardMedia
        style = {{ height: 200}}
        component="img"
        src={img}
        image= {img}
        alt="image"
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
          {elem.courseid}
        </Typography>
        <Typography variant="h7" color="text.primary">
          {elem.coursename}
        </Typography>
      </CardContent> 
      <CardActions style={{ justifyContent: "space-between" }}>
        <Button size="small" variant="contained" style={{textTransform : 'none'}} href="/profCourse">Go to Course Content</Button>
      </CardActions>   
    </Card>
    ))}
    </div>
    </div>
  );
}