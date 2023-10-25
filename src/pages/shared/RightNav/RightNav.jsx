import { Box, Button, Container, CssBaseline, Typography } from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import ListingMedia from "./list/ListingMedia";
import { Qzone } from "./qzone/Qzone";
import bg from '../../../assets/bg.png'

export const RightNav = () => {
  return (
    <Container component={"aside"}>
      <Box mb={"2.5rem"}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bolder" }}
          align="left"
          gutterBottom
        >
          Login With
        </Typography>
        <Button
          fullWidth
          startIcon={<GoogleIcon />}
          size="large"
          variant="outlined"
          sx={{ marginBottom: "0.5rem" }}
        >
          Login with Google
        </Button>
        <Button
          fullWidth
          startIcon={<GitHubIcon sx={{ color: "black" }} />}
          size="large"
          variant="outlined"
          sx={{ borderColor: "black", color: "black" }}
        >
          Login with GitHub
        </Button>
      </Box>
      <Box>
        <Typography color={"#403F3F"} fontWeight={"bold"} align="left">
          Find Us On
        </Typography>
        <ListingMedia />
      </Box>
      <Qzone/>
      <Box position={'relative'} >
        <img src={bg} alt="" className="m-auto" />
          <Box height={'80%'}  width={'80%'}  position={'absolute'} top={'10%'} left={30}  >
              <Typography variant="h4" color={'white'} fontWeight={'bold'} gutterBottom >
              Create an Amazing Newspaper
              </Typography>
              <Box>
              <Typography variant="body1" color={'white'} padding={3} gutterBottom >
              Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
              </Typography>
              <Button variant="contained" color="error" size="large" sx={{ paddingTop:'1rem' , paddingBottom:'1rem' }} >Learn More</Button>
              </Box>
          </Box>
      </Box>
    </Container>
  );
};
