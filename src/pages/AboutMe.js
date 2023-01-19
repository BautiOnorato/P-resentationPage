import React from 'react'
import { Box, IconButton, Tooltip } from '@mui/material'
import { contact } from '../navigation/Routes'
// import '../styles/aboutMeStyles.css'

const AboutMe = () => {
  return (
    <div className='container'>
      <div className='card-container'>
        <div className='card-left'>
          <img src='https://scontent-eze1-1.xx.fbcdn.net/v/t31.18172-8/13173314_1011523578940708_4348016679618043329_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=E5CV9koGeVUAX9ZY3wz&_nc_ht=scontent-eze1-1.xx&oh=00_AfDKsdmycSGRlXfchFbyT63UgoMX1Q55kW97QQNEm2rN1w&oe=63E7D8AB'/>
          <Box sx={{ display: "flex", flexDirection: "column", padding: "0px 60px" }}>
            <h3>Contact</h3>
              {contact.map(({id, title, path, element}) => (
                <Tooltip key={id} title={title}>
                  <IconButton>
                    <a href={path} target="e_blank" rel="nonreferrer" style={{ color: '#000' }}>
                      {element}
                    </a>
                  </IconButton>
                </Tooltip>
              ))}
          </Box>
        </div>
        <div className='card-right'>
          <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe