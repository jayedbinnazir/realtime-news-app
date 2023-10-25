import { Box, Typography } from '@mui/material'
import React from 'react'
import Qzone1 from '../../../../assets/Qzone1.png'
import Qzone2 from '../../../../assets/Qzone2.png'
import Qzone3 from '../../../../assets/Qzone3.png'

export const Qzone = () => {
  return (
    <Box bgcolor={'#F3F3F3'} p={2.5} mb={5} display={'flex'} flexDirection={'column'} mt={5}  justifyContent={'center'} >
        <Typography gutterBottom align='left' variant='h5' fontWeight={'bold'} color={'#403F3F'} >Q Zone</Typography>
        <img src={Qzone1} />
        <img src={Qzone2} />
        <img src={Qzone3} />
    </Box>
  )
}
