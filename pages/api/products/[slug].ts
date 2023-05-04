import { db, SHOP_CONSTANTS } from '@/database'
import { Product } from '@/models'
import type { NextApiRequest, NextApiResponse } from 'next'
import { IProduct } from '@/interfaces';

type Data =
    | { message: string }
    | IProduct[]
    | IProduct

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {

    switch ( req.method ) {
        case 'GET':
            return getProductBySlug( req, res )
    
        default:
            return res.status(400).json({ message: 'Bad Request' })
    }

}

const getProductBySlug = async( req: NextApiRequest, res: NextApiResponse<Data>  ) => {

    const { slug } = req.query

    await db.connect()
    const product = await Product.findOne({ slug })
                                 .lean()
    await db.disconnect()

    if ( !product ) {
        return res.status(404).json({
            message: 'Producto no encontrado'
        })
    }

    res.status(200).json( product )
}