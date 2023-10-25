import { Divider, Grid, Paper, Typography, TextField, Button, Box, Checkbox, FormControlLabel } from "@mui/material";
import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import {DevTool} from '@hookform/devtools'
import { useAuth } from "../../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";
import { Link } from "react-router-dom";

export const Register = () => {

    const form  = useForm()

    const { createUser } = useAuth()
    const [ accepted , setAccepted ] = useState(false)
    const { register , formState , control ,handleSubmit  } = form ;
    const {isSubmitting } = formState

    console.log({accepted})

    const handleChecked=(event)=>{
      console.log(event.target.checked)
        setAccepted(event.target.checked)
    }
    const onSubmit=(data)=>{
      createUser(data.email, data.password)
            .then((result)=>{
              updateProfile(auth.currentUser,{
                displayName:data.name ,
                photoURL:data.photoURL ,
              })
              
              const createdUser = result.user ;
              return createdUser
            })
            .then(user=>console.log(user))
            .catch(error=>console.log(error))
      
    }

  return (
     <Grid container component={Paper} minWidth={'370px'} elevation={16}  direction={'column'}  >
         <Grid item xs={2}  container justifyContent={'center'} >
            <Grid   item  >
               <Typography textAlign={'center'} mt={4}  variant="h5" fontWeight={'bold'}  gutterBottom >Register your account</Typography>
            </Grid>
            <Grid xs={9} item >
                  <Divider/>
            </Grid>
         </Grid>

         <Grid item container mt={1} justifyContent={'center'} rowGap={2} component={'form'} onSubmit={handleSubmit(onSubmit)} >
            <Grid item xs={9}   >
            <div>
              <label htmlFor="email" className="block text-sm font-bold  leading-6 text-gray-900">
                Your Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"

                  {
                     ...register('name')
                  }
                  autoComplete="name"
                  required
                  className="block w-full rounded-none px-2  bg-gray-200 border-none py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            </Grid>
            <Grid item xs={9}   >
            <div>
              <label htmlFor="email" className="block text-sm font-bold  leading-6 text-gray-900">
                Photo URL
              </label>
              <div className="mt-1">
                <input
                  id="photo"
                  type="text"
                  placeholder="Upload Your Photo"

                  {
                     ...register('photoURL')
                  }
                  required
                  className="block w-full rounded-none px-2  bg-gray-200 border-none py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            </Grid>
            <Grid item xs={9}   >
            <div>
              <label htmlFor="email" className="block text-sm font-bold  leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-1">
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
              
              </div>
              <div className="mt-1">
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
              <div className="mt-1" >
              <FormControlLabel control={<Checkbox onClick={handleChecked} />} label='Accept Terms and Conditions' />
            </div>
            </div>
            <div className="mt-2" >
              <button
                type="submit"
                disabled={ !accepted || isSubmitting }

                className="flex w-full justify-center  bg-gray-700 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-base-content focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
         
            </Grid>  
            <DevTool control={control} />
         </Grid>
        
     </Grid>
  );
};
