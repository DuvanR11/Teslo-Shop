import { ShopLayout } from "@/components/layouts";
import { ProductList } from "@/components/products";
import { FullScreenLoading } from "@/components/ui";
import { useProducts } from "@/hooks";
import { Typography } from '@mui/material'


const MenPage = () => {
  
  const { products, isLoading } = useProducts('/products?gender=men')

  return (
    <ShopLayout title={'Teslo-Shop - Men'} pageDesciption={'Encuentra los mejores productos para hombres'} imageFullUrl={''} >
        <Typography variant='h1' component='h1'>Hombres</Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>Productos para ellos</Typography>
        {
          isLoading
            ? <FullScreenLoading/>
            : <ProductList products={ products } />
        }
    </ShopLayout>
  )
}

export default MenPage 