import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function MyTextFiled() {
  return (
    <>
      <Typography variant='h3' margin="4% 37%" color="primary" >Facebook</Typography>

    <Box id="fb" component="form" margin="0 30%" width="33%" borderRadius="5px"  border="1px solid black" padding="20px">
            <Typography variant='h2' sx={{marginLeft:'60px'}}>
                <h4>Log in to Facebook</h4>
            </Typography><br/>

        <TextField  id="one" label="Enter address or phone number" sx={{mb:2}}  fullWidth variant='outlined' /><br/>
        <TextField id="one" label="Password" type="password" sx={{mb:2}} fullWidth variant='outlined' /> <br/>
        <Button  variant='contained' type="submit" value="button" fullWidth>Log In</Button> <br/>

        <div sx={{margin:'2px'}}>
           <Button  sx={{fontSize:'12px'}}> <a href="">Forgotten Password?</a></Button>
           <Button  sx={{fontSize:'12px'}} > <a href="">Sign Up For Password</a></Button>
        </div>
        
    </Box>
    </>
  )
}

export default MyTextFiled