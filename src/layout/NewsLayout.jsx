import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../pages/shared/header/Header";
import { Footer } from "../pages/shared/footer/Footer";
import Container from "@mui/material/Container";
import { CssBaseline, Grid, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import { LeftNav } from "../pages/shared/leftnav/LeftNav";
import { RightNav } from "../pages/shared/RightNav/RightNav";
export const NewsLayout = () => {
  return (
    <React.Fragment>
    <CssBaseline />
    <Header></Header>
    <Container maxWidth='xl' disableGutters > 
      <Grid container textAlign={"center"}  >
        <Grid item md={1} >

        </Grid>
        <Grid item md={8} >
            <Outlet/>
        </Grid>
        <Grid item md={3}   >
            < RightNav />
        </Grid>
      </Grid>
    </Container>
    <Footer></Footer>
  </React.Fragment>
  )
}
