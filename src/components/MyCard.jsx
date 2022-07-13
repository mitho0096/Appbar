import { Card, CardActions, CardContent, CardMedia, Typography ,Button} from '@mui/material'
import React from 'react'
import ShareIcon from '@mui/icons-material/Share';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
function MyCard() {
  return (
    <>
        {/* <Card sx={{maxWidth:'345px', margin:'10px'}}>
            <CardMedia component="string" height="200px" src={props.img}/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant='body2' color="text.secondary">
                   Burgar 40 rupay me ek milta hai . khana hai fast food shop par jao . 
                </Typography>
            </CardContent>
            <CardActions>
                <Button endIcon={<ShareIcon/>} variant="outlined" size="small">Share</Button>
                <Button  endIcon={<ReadMoreIcon/>} variant="outlined" size='small'>Read More</Button>
            </CardActions>
        </Card> */}

       
    </>
  )
}

export default MyCard