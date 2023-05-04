import React from 'react'
import { ShopLayout } from "@/components/layouts";
import { ProductSlideshow, SizeSelector } from "@/components/products";
import { Typography, Grid, Box, Button } from '@mui/material';
import { ItemCounter } from '@/components/ui';
import { IProduct } from '@/interfaces';
import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { dbProducts } from '@/database';


interface Props {
  product: IProduct
}

const ProductPage: NextPage<Props> = ({ product }) => {

  // const { query } = useRouter()
  // const { products: product, isLoading } = useProducts(`/products/${query.slug}`)


  return (
    <ShopLayout title={ product.title } pageDesciption={ product.description } imageFullUrl={''} >
      <Grid container spacing={ 3 }>

        <Grid item xs={ 12 } sm={ 7 }>
          <ProductSlideshow images={ product.images } />
        </Grid>

        <Grid item xs={ 12 } sm={ 5 }>
          <Box display='flex' flexDirection='column'>
            <Typography variant='h1' component='h1'>{ product.title }</Typography>
            <Typography variant='subtitle1' component='h2'>${ product.price }</Typography>

            <Box sx={{ my: 2 }}>
              <Typography variant='subtitle1'>Cantidad</Typography>
              <ItemCounter/>
              <SizeSelector selectedSize={ product.sizes[0] } sizes={ product.sizes }/>
            </Box>

            <Button color='secondary' className='circular-btn'>
              Agregar al carrito
            </Button>

            {/* <Chip label='No hay disponibles' color='error' variant='outlined'/> */}

            <Box sx={{ mt: 3 }}>
              <Typography variant='subtitle2'>Description</Typography>
              <Typography variant='body2'>{ product.description }</Typography>
            </Box>

          </Box>
        </Grid>

      </Grid>
    </ShopLayout>
  )
}

// Esto es para sobrecargar
// export  const getServerSideProps: GetServerSideProps = async( { params } ) => {

//   const { slug  = ''} = params as { slug: string }
  
//   const product = await dbProducts.getProductBySlug( slug )
  
//   if ( !product ) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false
//       }
//     }
//   }

//   return {
//     props: {
//       product
//     }, 
//   }
// }

export const getStaticPaths: GetStaticPaths = async(ctx) => {

  const productSlugs = await dbProducts.getAllProductsSlug()

  return {
    paths: productSlugs.map( ({ slug }) => ({
      params: {
        slug
      }
    })),
    fallback: 'blocking', 
  }
}

export const getStaticProps: GetStaticProps = async({  params }) => {

  const { slug  = ''} = params as { slug: string }
  const product = await dbProducts.getProductBySlug( slug )

  if ( !product ) {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }

  return {
    props: { 
      product
     },
     revalidate: 60 * 60 * 24
  }
}

export default ProductPage