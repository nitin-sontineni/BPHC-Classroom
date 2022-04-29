import * as React from 'react';
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
//import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AddLecture() {
  const [open, setOpen] = React.useState(false);
  const [courseid, setCourseId] = useState('');
  const [courseName, setCourseName] = useState('');

  const courseIdChangeHandler = (event) => {
    setCourseId(event.target.value);
  };

  const courseNameChangeHandler = (event) => {
    setCourseName(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    console.log(courseid);
    console.log(courseName);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add New Lecture
      </Button>
      <Dialog open={open} onClose={handleCancel}>
        <DialogTitle>New Lecture</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Add New course
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="normal"
            id="id"
            label="Date of Lecture"
            type= "date"
            fullWidth
            variant="filled"
            required
            onChange={courseIdChangeHandler}
          />
          <TextField
            margin="normal"
            id="name"
            label="Lecture Title"
            fullWidth
            variant="filled"
            required
            onChange={courseNameChangeHandler}
          />
          <TextField
            margin="normal"
            id="name"
            label="Lecture Link"
            fullWidth
            variant="filled"
            required
            onChange={courseNameChangeHandler}
          />
          <TextField
            margin="normal"
            id="name"
            label="Slides Link"
            fullWidth
            variant="filled"
            onChange={courseNameChangeHandler}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
