import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Box } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CircularProgress from '@mui/material/CircularProgress';
import { useAuth } from "../../../provider/AuthProvider";


export const News = () => {
  const { id } = useParams();

  const fetchNewsById = ({ queryKey }) => {
    const newsId = queryKey[1];
    return axios.get(`http://localhost:5000/api/news/${newsId}`);
  };

  const {
    isLoading,
    isError,
    isFetching,
    data: news,
    error,
  } = useQuery(["news", id], fetchNewsById);
  console.log(news);
if(isLoading && isFetching){
  return <CircularProgress/>
}
  return (
     <Card  sx={{ minWidth: '50%' ,padding:'1rem' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={news?.data.image_url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" fontWeight={'bold'} textAlign={'justify'} component="div">
            {news?.data.title}
          </Typography>
          <Typography variant="body2" textAlign={'justify'}  color="text.secondary" gutterBottom >
            {news?.data.details}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button LinkComponent={NavLink} to={`/category/${news?.data?.category_id}`} startIcon={<ArrowBackIcon/>} size="large" variant="contained" color="error">
            All news in this category
        </Button>
      </CardActions>
    </Card>
  );
};