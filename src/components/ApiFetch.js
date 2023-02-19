import { Button, CircularProgress, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { red } from '@mui/material/colors';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import data from '../data';
const ApiFetch = () => {
  var [movie,setMovie] =useState([]);
  var [isLoading,setIsLoading] =useState(false);
  //useEffect for loading data when the website loads
  // useEffect(()=>{
  //   setIsLoading(isLoading=true);
  //   axios.get("https://raw.githubusercontent.com/erik-sytnyk/movies-list/master/db.json")
  //   .then((response)=>{
  //      // console.log(response);
  //       setMovie(
  //           movie = response //data inside response>data in the API response
            
  //       );
  //       setIsLoading(isLoading=false);
  //   })
  // },[]);
  // uncoment to load data one first load

const Item = styled(Paper)(({ theme }) => ({
  
}));
  return (
    <div>
            
        <div > 
        <Grid container spacing={3}>
          <Grid item xs={4}> 
            <Item>
              { data.movies.map((value,index)=>{
             return (<Card sx={{ maxWidth: 345 }} style={{marginTop:"60px",marginLeft:"30px",display:"inline"}}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={value.posterUrl}
                      title={value.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {value.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      {value.title} is a {value.year} {value.genress} film directed by {value.director}. Staring {value.actors}.{value.plot}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Edit</Button>
                      <Button size="small">Delete</Button> 
                    </CardActions>
                </Card>)
              
                    })
                    }
            
                </Item>
                </Grid>
              </Grid>  
              </div>
        
 </div>   

  )
}

export default ApiFetch
