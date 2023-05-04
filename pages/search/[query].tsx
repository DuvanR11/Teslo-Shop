import { ShopLayout } from "@/components/layouts";
import { ProductList } from "@/components/products";
import { FullScreenLoading } from "@/components/ui";
import { dbProducts } from "@/database";
import { useProducts } from "@/hooks";
import { IProduct } from "@/interfaces";
import { Typography, Grid, Card, CardActionArea, CardMedia } from '@mui/material'
import { GetServerSideProps, NextPage } from "next";

interface Props {
    products: IProduct[]
}
const SearchPage: NextPage<Props> = ({ products }) =>  {
  
//   const { products, isLoading } = useProducts('/products')

  return (
    <ShopLayout title={'Teslo-Shop - Serach'} pageDesciption={'Buscar producto'} imageFullUrl={''} >
        <Typography variant='h1' component='h1'>Buscar Producto</Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>ABC --- 123</Typography>
        {/* {
          isLoading
            ? <FullScreenLoading/>
            : <ProductList products={ products } />
        } */}

        <ProductList products={ products } />
    </ShopLayout>
  )
}

export  const getServerSideProps: GetServerSideProps = async( { params } ) => {

  const { query  = ''} = params as { query: string }
    
  if ( query.length === 0 ) {
    return {
      redirect: {
        destination: '/',
        permanent: true
      }
    }
  }

  let products = await dbProducts.getProductByTerm( query )

  return {
    props: {
      products
    }, 
  }
}


export default SearchPage