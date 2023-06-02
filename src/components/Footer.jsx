import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import Logo from '../assets/images/Logo.png'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#FFFafb'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
        <img src={Logo} alt='logo' width='48px' height='48px'/>
        <Typography variant='h5' pb='40px' mt= '20px'>
          made with 💜 by Dushmanta
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer