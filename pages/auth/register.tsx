import { AuthLayout } from '@/components/layouts'
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material'
import NextLink from 'next/link'
import React from 'react'

const RegisterPage = () => {
    
  return (
    <AuthLayout title='Registar cuenta'>
        <Box sx={{ width: 350, padding: '10px 20px' }}>
            <Grid container spacing={ 2 }>
                <Grid item xs={ 12 } display='flex' justifyContent='center'>
                    <Typography variant='h1' component='h1'>Crear Cuenta</Typography>
                </Grid>
                <Grid item xs={ 12 }>
                    <TextField label='Usuario' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={ 12 }>
                    <TextField label='Correo' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={ 12 }>
                    <TextField label='contraseña' type='password' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={ 12 }>
                    <Button color='secondary' className='circular-btn' size='large' fullWidth>
                        Registrarse
                    </Button>
                </Grid>

                <Grid item xs={ 12 } display='flex' justifyContent='center'>
                    <NextLink href='/auth/login' passHref legacyBehavior>
                        <Link underline='always'>
                            ¿Ya tienes una cuenta?
                        </Link>
                    </NextLink>
                </Grid>
                
            </Grid>
        </Box>
    </AuthLayout>
  )
}

export default RegisterPage