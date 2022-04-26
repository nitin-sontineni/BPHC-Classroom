import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AddCourse() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add New Course
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Course</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Add New course
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="id"
            label="Course ID"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="name"
            label="Course Name"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
