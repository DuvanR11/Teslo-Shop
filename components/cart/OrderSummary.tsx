import { Grid, Typography } from '@mui/material'
import React from 'react'

export const OrderSummary = () => {
  return (
    <Grid container>

        <Grid item xs={ 6 }>
            <Typography>No. Productos</Typography>
        </Grid>
        <Grid item xs={ 6 } display='flex' justifyContent='end'>
            <Typography>3 items</Typography>
        </Grid>

        <Grid item xs={ 6 }>
            <Typography>SubTotal</Typography>
        </Grid>
        <Grid item xs={ 6 } display='flex' justifyContent='end'>
            <Typography>$ 155.36</Typography>
        </Grid>

        <Grid item xs={ 6 }>
            <Typography>Impuestos (15%)</Typography>
        </Grid>
        <Grid item xs={ 6 } display='flex' justifyContent='end'>
            <Typography>$ 35.33</Typography>
        </Grid>

        <Grid item xs={ 6 } sx={{ mt: 2 }}>
            <Typography variant='subtitle1'>Total:</Typography>
        </Grid>
        <Grid item xs={ 6 } display='flex' justifyContent='end' sx={{ mt: 2 }}>
            <Typography variant='subtitle1'>$ 198213</Typography>
        </Grid>

    </Grid>
  )
}
