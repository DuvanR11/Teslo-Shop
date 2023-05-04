import React from 'react'
import { ShopLayout } from "@/components/layouts";
import { Typography, Box, Link, Grid, Card, CardContent, Divider, Button, Chip } from '@mui/material';
import NextLink from 'next/link'
import { CartList, OrderSummary } from '@/components/cart';
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material';

const OrderPage = () => {
  return (
    <ShopLayout title={'Resumen de la orden 121212'} pageDesciption={'Resumen de la orden'} imageFullUrl={''} >
        <Typography variant='h1' component='h1'>Orden: ABC11</Typography>

        {/* <Chip 
            sx={{ my: 2 }}
            label="Pendiente de pago"
            variant='outlined'
            color='error'
            icon={ <CreditCardOffOutlined/> }
        /> */}

        <Chip 
            sx={{ my: 2 }}
            label="Orden ya fue pagada"
            variant='outlined'
            color='success'
            icon={ <CreditScoreOutlined/> }
        />

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
                            <h1>Pagar</h1>

                            <Chip 
                                sx={{ my: 2 }}
                                label="Orden ya fue pagada"
                                variant='outlined'
                                color='success'
                                icon={ <CreditScoreOutlined/> }
                            />
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default OrderPage