import React from 'react'
import { ShopLayout } from "@/components/layouts";
import { Typography, Grid, Card, CardActionArea, CardMedia, TextField, FormControl, InputLabel, Select, MenuItem, Box, Button } from '@mui/material'

const AddressPage = () => {
  return (
    <ShopLayout title={'Direccion'} pageDesciption={'Confirmar dirreción de destino'} imageFullUrl={''} >
        <Typography variant='h1' component='h1'>Dirección</Typography>

        <Grid container spacing={ 2 }>
            <Grid item xs={ 12 } sm={ 6 }>
                <TextField label='Nombre' variant='filled' fullWidth></TextField>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
                <TextField label='Apellido' variant='filled' fullWidth></TextField>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
                <TextField label='Dirección' variant='filled' fullWidth></TextField>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
                <TextField label='Dirección 2 (opcional)' variant='filled' fullWidth></TextField>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
                <TextField label='Codigo Postal' variant='filled' fullWidth></TextField>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
                <TextField label='Ciudad' variant='filled' fullWidth></TextField>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
               <FormControl fullWidth>
                    <Select
                        variant='filled'
                        label="Pais"
                        value={ 1 }
                    >
                        <MenuItem value={ 1 }>Costa Rica</MenuItem>
                        <MenuItem value={ 2 }>Honduras</MenuItem>
                        <MenuItem value={ 3 }>El Salvador</MenuItem>
                        <MenuItem value={ 4 }>Colombia</MenuItem>

                    </Select>
               </FormControl>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
                <TextField label='Telefono' variant='filled' fullWidth></TextField>
            </Grid>
        </Grid>

        <Box sx={{ mt: 5 }} display='flex' justifyContent='center'>
            <Button color='secondary' className='circular-btn' size='large'>
                Revisar pedido
            </Button>
        </Box>
    </ShopLayout>
  )
}

export default AddressPage