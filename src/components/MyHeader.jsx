import {AppBar,Toolbar,Typography,Button} from '@mui/material';
const MyHeader=()=>{
return(
    <>
    <AppBar position="static" sx={{backgroundColor:"white",marginTop:'30px'}}>
        <Toolbar variant='dense'>
            <Typography varient="h6" component="div" sx={{flexGrew:1}}>
                <Button  color="success">About Us</Button>
                <Button  color="error">Products</Button>
                <Button  color="error">Markets</Button>
                <Button  color="error">CSR</Button>
                <Button  color="error">Investor</Button>
                <Button  color="error">Blogs</Button>
                <Button  color="error">Careers</Button>
                <Button  color="error">Contact Us</Button>
            </Typography>
        </Toolbar>
    </AppBar>
    </>
)
}
export default MyHeader;