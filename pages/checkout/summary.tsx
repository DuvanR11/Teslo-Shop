import React from 'react'
import { ShopLayout } from "@/components/layouts";
import { Typography, Box, Link, Grid, Card, CardContent, Divider, Button } from '@mui/material';
import NextLink from 'next/link'
import { CartList, OrderSummary } from '@/components/cart';

const SummaryPage = () => {
  return (
    <ShopLayout title={'Resumen de orden'} pageDesciption={'Resumen de la orden'} imageFullUrl={''} >
        <Typography variant='h1' component='h1'>Carrito</Typography>

        <Grid container>
            <Grid item xs={ 12 } sm={ 7 }>
                <CartList/>
            </Grid>
            <Grid item xs={ 12 } sm={ 5 }>
                <Card className='summary-card'>
                    <CardContent>
                        <Typography variant='h2'>Resumen ( 3 Productos )</Typography>

                        <Divider sx={{ my: 1 }}/>

                        <Box display='flex' justifyContent='space-between'>
                            <Typography variant='subtitle1'>Dirección de entrega</Typography>
                            <NextLink href='/checkout/address' passHref legacyBehavior>
                                <Link underline='always'>
                                    Editar
                                </Link>
                            </NextLink>
                        </Box>

                        <Typography>Duvan Rivera M</Typography>
                        <Typography>Maciones del norte</Typography>
                        <Typography>Calle 51 #4w 28</Typography>
                        <Typography>Neiva</Typography>
                        <Typography>+57 3204084584</Typography>

                        <Divider sx={{ my: 1 }}/>

                        <Box display='flex' justifyContent='end'>
                            <NextLink href='/cart' passHref legacyBehavior>
                                <Link underline='always'>
                                    Editar
                                </Link>
                            </NextLink>
                        </Box>

                        <OrderSummary/>

                        <Box sx={{ mt: 3 }}>
                            <Button color='secondary' className='circular-btn' fullWidth>
                                Confirmar Orden
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default SummaryPage