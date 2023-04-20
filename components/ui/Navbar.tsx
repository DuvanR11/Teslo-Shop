import React from 'react'
import { AppBar, Toolbar, Link, Typography, Box, Button, IconButton, Badge } from '@mui/material';
import NextLink from 'next/link'
import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";

export const Navbar = () => {
  return (
    <AppBar>
        <Toolbar>
          <NextLink href='/' passHref legacyBehavior>
              <Link display='flex' alignItems='center'>
                  <Typography variant='h6'>Teslo |</Typography>
                  <Typography sx={{ ml: 0.5 }}>Shop</Typography>
              </Link>
          </NextLink>

          <Box flex={ 1 }/>

          
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <NextLink  href='/category/men' passHref legacyBehavior>
                <Link>
                  <Button>Hombres</Button>
                </Link>
            </NextLink>
            <NextLink  href='/category/women' passHref legacyBehavior>
                <Link>
                  <Button>Mujeres</Button>
                </Link>
            </NextLink>
            <NextLink  href='/category/kid' passHref legacyBehavior>
                <Link>
                  <Button>Niños</Button>
                </Link>
            </NextLink>
          </Box>
        
        
          <Box flex={ 1 }/>

          <IconButton>
            <SearchOutlined/>
          </IconButton>

          <NextLink  href='/cart' passHref legacyBehavior>
                <Link>
                  <IconButton>
                    <Badge badgeContent={ 2 } color='secondary'> 
                      <ShoppingCartOutlined/> 
                    </Badge>
                  </IconButton>
                </Link>
          </NextLink>

          <Button>
            Menu
          </Button>

        </Toolbar>
    </AppBar>
  )
}
