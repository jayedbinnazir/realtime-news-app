import { Divider, Grid, Paper, Typography, TextField, Button, Box } from "@mui/material";
import React from "react";
import { useForm } from 'react-hook-form';
import {DevTool} from '@hookform/devtools'
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../provider/AuthProvider";


export const Login = () => {
    const navigate = useNavigate();
    const form  = useForm()
    const {signIn } = useAuth()
    const { register , formState , control ,handleSubmit  } = form ;
    const location = useLocation()

    const from = location.state?.from || '/category/0'

    const onSubmit=(data)=>{
      signIn(data.email , data.password)
        .then((result)=>{
          const loggedUser = result.user ;
          console.log(loggedUser)
          navigate(from , { replace:true})
        })
        .catch((error)=>{
          console.log(error)
        })
    }

  return (
     <Grid container component={Paper} minWidth={'370px'} elevation={16}  direction={'column'} rowGap={4} >
         <Grid item  xs={3}  container justifyContent={'center'} >
            <Grid   item  >
               <Typography textAlign={'center'} mt={6}  variant="h5" fontWeight={'bold'}  gutterBottom >Log in to your Account</Typography>
            </Grid>
            <Grid xs={9} item >
                  <Divider/>
            </Grid>
         </Grid>

         <Grid item  container justifyContent={'center'} rowGap={4} component={'form'} onSubmit={handleSubmit(onSubmit)} >
            <Grid item xs={9}   >
            <div>
              <label htmlFor="email" className="block text-sm font-bold  leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"

                  {
                     ...register('email')
                  }
                  autoComplete="email"
                  required
                  className="block w-full rounded-none px-2  bg-gray-200 border-none py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            </Grid>
            <Grid item xs={9} >
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-bold leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  placeholder="Enter Your password"
                  {
                     ...register('password')
                  }
                  autoComplete="current-password"
                  required
                  className="block w-full text-2xl bg-gray-200 px-2 border-none py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="mt-3" >
              <button
                type="submit"
                className="flex w-full justify-center  bg-gray-700 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-base-content focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>

            </div>
            <Typography mt={4} textAlign={'center'} variant="subtitle2" >Don't have an account ? <NavLink to={'/register'} style={{ color:'red' }} >Register</NavLink> </Typography>
            </Grid>
            <DevTool control={control} />
         </Grid>
        
     </Grid>
  );
};
