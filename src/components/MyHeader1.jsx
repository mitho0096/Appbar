import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react'

function MyHeader1() {
  return (
    <>
    <AppBar position='static' sx={{background:'white',marginTop:'50px'}}>
        <Toolbar variant='regular'>
            <Typography variant="h6" sx={{flexGrew:1}} component="div">
                <Button color="success">Home</Button>
                <Button color="success">Home</Button>
                <Button color="success">Home</Button>
                <Button color="success">Home</Button>
                <Button color="success">Home</Button>
                <Button color="success">Home</Button>
                <Button color="success">Home</Button>
                <Button color="success">Home</Button>
                <Button color="success">Home</Button>
            </Typography>
        </Toolbar>
    </AppBar>
    </>
  )
}

export default MyHeader1;