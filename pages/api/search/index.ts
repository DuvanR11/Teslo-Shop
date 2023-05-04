import { db, SHOP_CONSTANTS } from '@/database'
import { Product } from '@/models'
import type { NextApiRequest, NextApiResponse } from 'next'
import { IProduct } from '@/interfaces';

type Data =
    | { message: string }
    | IProduct[]
    | IProduct

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {

    return res.status(400).json({ message: 'Debe especificar query de busqueda' })
    

}

