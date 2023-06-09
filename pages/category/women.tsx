import { ShopLayout } from "@/components/layouts";
import { ProductList } from "@/components/products";
import { FullScreenLoading } from "@/components/ui";
import { useProducts } from "@/hooks";
import { Typography } from '@mui/material'


const WomenPage = () => {
  
  const { products, isLoading } = useProducts('/products?gender=women')

  return (
    <ShopLayout title={'Teslo-Shop - Women'} pageDesciption={'Encuentra los mejores productos para mujeres'} imageFullUrl={''} >
        <Typography variant='h1' component='h1'>Mujeres</Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>Productos para ellas</Typography>
        {
          isLoading
            ? <FullScreenLoading/>
            : <ProductList products={ products } />
        }
    </ShopLayout>
  )
}

export default WomenPage 