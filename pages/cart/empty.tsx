import React from 'react'
import { ShopLayout } from "@/components/layouts";
import { Typography, Box, Link } from '@mui/material'
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import NextLink from 'next/link'


const EmptyPage = () => {
  return (
    <ShopLayout title={'Carrito vacio'} pageDesciption={'No hay articulos en el carrito de compras'} imageFullUrl={''} >
         <Box 
            display='flex' 
            justifyContent='center' 
            alignItems='center' 
            height='calc(100vh - 140px)'
            sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
        >
          <RemoveShoppingCartOutlinedIcon sx={{ fontSize: 80 }}/>
          <Box display='flex' flexDirection='column' alignItems='center'>
                <Typography>Su carrito esta vacio</Typography>
                <NextLink href='/' passHref legacyBehavior>
                    <Link typography='h4' color='secondary'>
                        Regresar
                    </Link>
                </NextLink>
          </Box>
        </Box>
    </ShopLayout>
  )
}

export default EmptyPage