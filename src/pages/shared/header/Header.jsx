import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Container from "@mui/material/Container";
import { Box, Button, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import { NavBar } from "./bar/NavBar";

export const Header = () => {
  return (
    <Container className="space-y-2 mb-2 mt-3" >
      <div className="text-center  ">
        <img src={logo} className="mx-auto " />
        <p>
          <small className=" font-semibold text-zinc-400">
            Journalism Without Fear or Favour
          </small>
        </p>
        <p> {moment().format("dddd, MMMM Do YYYY, h:mm:ss a")} </p>
      </div>
      <Box   className='flex p-1.5 bg-[#F3F3F3]  '  >
        
        <Button size="small" variant="contained" color="error"  > Latest</Button>
        <Marquee autoFill={true} pauseOnHover={true} speed={70} >
          <Typography  variant="caption" >Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Typography>
        </Marquee>
      </Box>
      <NavBar/>
    </Container>
  );
};
