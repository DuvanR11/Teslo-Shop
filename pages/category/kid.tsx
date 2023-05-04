import { ShopLayout } from "@/components/layouts";
import { ProductList } from "@/components/products";
import { FullScreenLoading } from "@/components/ui";
import { useProducts } from "@/hooks";
import { Typography } from '@mui/material'


const KidPage = () => {
  
  const { products, isLoading } = useProducts('/products?gender=kid')

  return (
    <ShopLayout title={'Teslo-Shop - Kid'} pageDesciption={'Encuentra los mejores para niños'} imageFullUrl={''} >
        <Typography variant='h1' component='h1'>Niños</Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>Productos para ellos</Typography>
        {
          isLoading
            ? <FullScreenLoading/>
            : <ProductList products={ products } />
        }
    </ShopLayout>
  )
}

export default KidPage 