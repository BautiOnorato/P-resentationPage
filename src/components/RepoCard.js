import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LaunchIcon from '@mui/icons-material/Launch';
import { Tooltip } from '@mui/material';

export default function RepoCard({ name, link, owner, img }) {

  return (
    <Card sx={{ display: 'flex', width: "450px" }}>
        <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={img}
        alt=""
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', width: "80%" }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
            <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "space-between" }}>
                <Typography component="div" variant="h5">
                    {name}
                </Typography>
                <Tooltip title="Go to Github">
                    <IconButton>
                        <a href={link} target="e_blank" rel="nonreferrer" style={{ color: '#000' }}>
                            <LaunchIcon/>
                        </a>
                    </IconButton>
                </Tooltip>
            </Box>
            <Typography variant="subtitle1" color="text.secondary" component="div">
                {owner}
            </Typography>
            </CardContent>
        </Box>
    </Card>
  );
}