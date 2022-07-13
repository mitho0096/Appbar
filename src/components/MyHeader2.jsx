import { Warning } from '@mui/icons-material'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

function MyHeader2() {
  return (
    <>
    <AppBar color='secondary' position="static" sx={{backgroundColor:'white',marginTop:'50px'}}>
        <Toolbar variant='string' disableGutters={false}>
            <Typography sx={{flexgrew:1,}} component="div" variant="h6" >
                <Button color="warning" variant='contained'>About</Button>
                <Button color="warning" variant='outlined'>About</Button>
                <Button color="primary" >About</Button>
                <Button color="error">About</Button>
                <Button color="warning">About</Button>
                <Button color="info">About</Button>
                <Button color="warning">About</Button>
            </Typography>
        </Toolbar>
    </AppBar>
    </>
  )
}

export default MyHeader2;