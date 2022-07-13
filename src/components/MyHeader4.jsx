import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

function MyHeader4() {
  return (
    <div>
        <AppBar sx={{backgroundColor:'white', marginTop:'50px'}} position="static">
            <Toolbar>
                <Typography variant='h6' sx={{flexGrow:1}} component="div">
                    <Button color='success'>FAQ</Button>
                    <Button color='success'>FAQ</Button>
                    <Button color='success'>FAQ</Button>
                    <Button color='success'>FAQ</Button>
                    <Button color='success'>FAQ</Button>
                    <Button color='success'>FAQ</Button>
                    <Button color='success'>FAQ</Button>
                </Typography>
            </Toolbar>
        </AppBar>


    </div>
  )
}

export default MyHeader4