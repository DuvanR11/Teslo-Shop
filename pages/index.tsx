import { ShopLayout } from "@/components/layouts";
import { ProductList } from "@/components/products";
import { FullScreenLoading } from "@/components/ui";
import { useProducts } from "@/hooks";
import { Typography, Grid, Card, CardActionArea, CardMedia } from '@mui/material'


export default function HomePage() {
  
  const { products, isLoading } = useProducts('/products')

  return (
    <ShopLayout title={'Teslo-Shop - Home'} pageDesciption={'Encuentra los mejores'} imageFullUrl={''} >
        <Typography variant='h1' component='h1'>Tienda</Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>Todos los Productos</Typography>
        {
          isLoading
            ? <FullScreenLoading/>
            : <ProductList products={ products } />
        }
    </ShopLayout>
  )
}
