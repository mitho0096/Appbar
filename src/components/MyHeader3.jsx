import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'

function MyHeader3() {
  return (
    <div>
         <AppBar position='static' sx={{backgroundColor:'white',marginTop:'50px'}} >
    <Toolbar>
      <Typography sx={{flexGrow:1}} variant="h6" component="div">
        <Button color='success'>Contact</Button>
        <Button color='success'>Contact</Button>
        <Button color='success'>Contact</Button>
        <Button color='success'>Contact</Button>
      </Typography>
    </Toolbar>
  </AppBar>
    </div>
  )
}

export default MyHeader3