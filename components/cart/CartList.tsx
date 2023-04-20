import { initialData } from '@/database/products'
import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material'
import React, { FC } from 'react'
import NextLink from 'next/link'
import { ItemCounter } from '../ui/ItemCounter';

const productsIncart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2]
]

interface Props {
    editable?: boolean;
}

export const CartList: FC<Props> = ({ editable=false }) => {

  return (
    <>
        {
            productsIncart.map( product => (
                <Grid container spacing={ 2 } key={ product.slug } sx={{ mb: 1 }}>
                    <Grid item xs={ 3 }>
                        <NextLink href='/product/slug' passHref legacyBehavior>
                            <Link>
                                <CardActionArea>
                                    <CardMedia
                                        image={ `products/${ product.images[0] }` }
                                        component='img'
                                        sx={{ borderRadius: '5px' }}
                                    />
                                </CardActionArea>
                            </Link>
                        </NextLink>
                    </Grid>
                    <Grid item xs={ 7 }>
                        <Box display='flex' flexDirection='column'>
                            <Typography variant='body1'>{ product.title }</Typography>
                            <Typography variant='body1'>Talla: <strong>M</strong></Typography>
                            {
                                editable
                                ? <ItemCounter/>
                                : <Typography variant='h6'>3 items</Typography>
                            }
                        </Box>
                    </Grid>
                    <Grid item xs={ 2 } display='flex' alignItems='center' flexDirection='column'>
                        <Typography variant='subtitle1'>${ product.price}</Typography>
                        
                        {
                            editable && (
                                <Button variant='text' color='secondary'>
                            Remover
                        </Button>
                            )
                        }
                        
                    </Grid>
                </Grid>
            ))
        }
    </>
  )
}
