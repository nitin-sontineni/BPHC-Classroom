import * as React from 'react';
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Box } from '@mui/system';
//import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import LectureRating from "./rating.js";

export default function TakeFeedback() {
  const [open, setOpen] = React.useState(false);
  const [feedback, setFeedback] = useState('');
  
  const feedbackChangeHandler = (event) => {
    setFeedback(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    setOpen(false);
  };

  var playedTime = window.sessionStorage.getItem("playedTime");
  var button_title = `Give your feedback at ${playedTime}`

  return (
    <div alignItems="center">
    <Box marginLeft={30}>
      <Button variant="outlined" style={{textTransform : 'none', padding: 5 }} onClick={handleClickOpen}>
        {button_title}
      </Button>
      </Box>
      <Dialog open={open} onClose={handleCancel} fullWidth >
        <DialogTitle>Feedback</DialogTitle>
        <LectureRating />
        <DialogContent>
          <TextField
            id="standard-multiline-static"
            label="Write your comments here"
            multiline
            rows={4}
            variant="standard"
            fullWidth
            onChange={feedbackChangeHandler}
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
