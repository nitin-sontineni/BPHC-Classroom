import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/system';
import TablePaginationUnstyled from '@mui/base/TablePaginationUnstyled';
import Button from '@material-ui/core/Button';
import MenuAppBar from '../../header';
import axios from 'axios';

const blue = {
  200: '#A5D8FF',
  400: '#3399FF',
};

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const Root = styled('div')(
  ({ theme }) => `
  table {
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    text-align: left;
    padding: 6px;
  }

  th {
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : grey[100]};
  }
  `,
);

const CustomTablePagination = styled(TablePaginationUnstyled)(
  ({ theme }) => `
  & .MuiTablePaginationUnstyled-spacer {
    display: none;
  }
  & .MuiTablePaginationUnstyled-toolbar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }
  & .MuiTablePaginationUnstyled-selectLabel {
    margin: 0;
  }
  & .MuiTablePaginationUnstyled-select {
    padding: 2px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    border-radius: 50px;
    background-color: transparent;
    &:hover {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    }
    &:focus {
      outline: 1px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
    }
  }
  & .MuiTablePaginationUnstyled-displayedRows {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }
  & .MuiTablePaginationUnstyled-actions {
    padding: 2px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    border-radius: 50px;
    text-align: center;
  }
  & .MuiTablePaginationUnstyled-actions > button {
    margin: 0 8px;
    border: transparent;
    border-radius: 2px;
    background-color: transparent;
    &:hover {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    }
    &:focus {
      outline: 1px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
    }
  }
  `,
);

export default function UnstyledTable() {
  const [rows, setRows] = React.useState([]);
  const [mounted, setMounted] = useState(false);
  // console.log(window.sessionStorage.getItem("course_id"))
  console.log(window.sessionStorage.getItem("student_course_id"))

  if(!mounted) {
  axios.post(
    "http://localhost:8080/professor/course/content",
      {
        "courseId" : window.sessionStorage.getItem("student_course_id"),
      }
    )
  .then(res => { 
    console.log(res)
    setRows(res["data"])
  })
  .catch(err => {
    alert(err);
  })
}

  React.useEffect(() =>{
    setMounted(true)
  },[])
  



  return (
    <div>
    <MenuAppBar />
    <h2> {window.sessionStorage.getItem("student_course_id")} - {window.sessionStorage.getItem("student_course_name")}</h2>
    <div style={{paddingLeft : '15px', paddingBottom : '10px'}}>
        <Button variant="outlined" style={{textTransform : 'none'}} href="/homepage">Back to Homepage</Button>
    </div>
    {rows.length == 0 ? <h3> No Lectures added in this course</h3> :
    <Root sx={{ width: 1200, maxWidth: '100%', paddingLeft: "15px" }}>
      <table aria-label="custom pagination table">
        <thead>
          <tr>
            <th>Lec No</th>
            <th>Date of Lecture</th>
            <th>Title</th>
            <th>Recording Link</th>
            <th>Lecture Slides</th>
          </tr>
        </thead>
        <tbody>
          {(rows).map((row) => (
            <tr key={row.lecNo}>
              <td style={{ width: 20 }}>{row.lecNo}</td>
              <td style={{ width: 100 }} align="right">
                {row.date}
              </td>
              <td style={{ width: 100 }} align="right">
                {row.title}
              </td>
              <td style={{ width: 180 }} align="right">
                <a href= "/lecture">
                <div>
                  {row.recordingLink}
                </div>
                </a>
              </td>
              <td style={{ width: 180 }} align="right">
              <a href= {row.slidesLink} target="_blank">
                <div>
                  Slides Link
                </div>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Root>
    }
    </div>
  );
}
