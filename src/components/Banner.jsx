import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import BannerImage from '../assets/images/banner.png'

const Banner = () => {
  return (
    <Box className='banner-box' sx={{ 
      mt: {lg: '120px', xs: '70px'},
      ml: {sm: '50px'}}} 
      position="relative" p="20px">
        <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
            FitBull
        </Typography>
        <Typography fontWeight={700}
        sx= {{fontSize: {lg: '44px', xs: '40px'}}} mb='23px' mt='30px'>
          Sweat, Smile <br /> and repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb='4px'>
          Checkout effective exrecises
        </Typography>
        <Button variant='contained' href='#exercises' color='error' sx={{backgroundColor: '#FF2625', padding: '10px'}}>
          Explore Exercises
        </Button>
        <Typography className='banner-exercise-block' fontWeight='600' color='#FF2625'
        sx={{opacity: 0.2,
        display: {lg: 'block',xs: 'none'}}} fontSize='150px'>
          Exercise
        </Typography>
        <img src={BannerImage} alt='banner' className='banner-img'/>
    </Box>
  )
}

export default Banner