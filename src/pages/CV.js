import React from 'react'
// import '../styles/CVStyles.css'
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

const CV = () => {
  return (
    <div className='container'>
      <div className='left-container'>
        <Button variant="outlined" href="#outlined-buttons" 
        sx={{ borderColor: "black", color: "black", "&:hover": {backgroundColor: "black", color: "white", borderColor: "white"}}}>
          OPEN CV WITH GOOGLE DRIVE
        </Button>
        <Button variant="contained" endIcon={<DownloadIcon />}
        sx={{ backgroundColor: "black", "&:hover": {outline: "1px solid black", backgroundColor: "white", color: "black"} }}>
          DOWNLOAD CV
        </Button>
      </div>
      <div className='right-container'>
        <img src='https://www.getyourcv.net/wp-content/uploads/2022/04/free-cv-template-7.jpg'/>
      </div>
    </div>
  )
}

export default CV