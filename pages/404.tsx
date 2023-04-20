import React from 'react'
import { ShopLayout } from "@/components/layouts";
import { Typography, Box } from '@mui/material';

const Custom404 = () => {
  return (
    <ShopLayout title={'Page not Found'} pageDesciption={'Encuentra los mejores'} imageFullUrl={''} >
        <Box 
            display='flex' 
            justifyContent='center' 
            alignItems='center' 
            height='calc(100vh - 140px)'
            sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
        >
            <Typography variant='h1' component='h1' fontSize={35} fontWeight={350}> 404 | </Typography>
            <Typography marginLeft={ 1 }>No encontramos ninguna pagina aqui </Typography>
        </Box>
    </ShopLayout>
  )
}

export default Custom404