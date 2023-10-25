import { Box, Container, CssBaseline, Grid } from '@mui/material'
import React from 'react'
import { NavBar } from '../pages/shared/header/bar/NavBar'
import { Login } from '../pages/login/login/Login'
import { Outlet } from 'react-router-dom'

export const LoginLayout = () => {
  return (
   <React.Fragment>
        <CssBaseline/>
        <Container maxWidth='xl' sx={{ height:'100vh', bgcolor:'#E2E8F0'  }}  disableGutters  >
               <Grid container height={'100%'} direction={'column'} >
                    <Grid item  xs={1} >
                            <NavBar/>
                    </Grid>
                    <Grid item xs={10} container  >
                        <Grid item xs={4} >

                        </Grid>
                        <Grid item xs={4} container  >
                                <Outlet/>
                        </Grid>
                        <Grid item xs={4} >

                        </Grid>
                    </Grid>
               </Grid>
        </Container>
   </React.Fragment>
  )
}
