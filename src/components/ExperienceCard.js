import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LaunchIcon from '@mui/icons-material/Launch';
import { Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export default function ExperienceCard() {

  return (
    <Card sx={{ display: 'flex', width: "60vw", margin: "20px" }}>
        <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://static.wixstatic.com/media/85927f_7777d42085d048dd992818d494b800e0~mv2.png/v1/fill/w_400,h_400,al_c,q_90/file.jpg"
        alt=""
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', width: "90%" }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
            <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "space-between" }}>
                <Typography component="div" variant="h5">
                    Digital House <span>*</span>
                </Typography>
                <Box>
                    <Tooltip title="Website">
                        <IconButton>
                            <a target="e_blank" rel="nonreferrer" style={{ color: '#000' }}>
                                <LaunchIcon/>
                            </a>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit">
                        <IconButton>
                            <a target="e_blank" rel="nonreferrer" style={{ color: '#000' }}>
                                <EditIcon/>
                            </a>
                        </IconButton>
                    </Tooltip>
                </Box>    
            </Box>
            <Typography variant="subtitle1" color="text.secondary" component="div">
            Digital House es una organización educativa (EdTech) que transforma la vida de las personas desarrollando habilidades digitales que impactan a la sociedad
            </Typography>
            </CardContent>
        </Box>
    </Card>
  );
}