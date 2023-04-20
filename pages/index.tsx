import { ShopLayout } from "@/components/layouts";
import { ProductList } from "@/components/products";
import { initialData } from "@/database/products";
import { Typography, Grid, Card, CardActionArea, CardMedia } from '@mui/material'


export default function Home() {
  return (
    <ShopLayout title={'Teslo-Shop - Home'} pageDesciption={'Encuentra los mejores'} imageFullUrl={''} >
        <Typography variant='h1' component='h1'>Tienda</Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>Todos los Productos</Typography>

        <ProductList 
          products={ initialData.products as any }
        />

    </ShopLayout>
  )
}
