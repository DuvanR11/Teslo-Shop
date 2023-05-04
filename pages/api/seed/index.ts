import { db, seedDatabase } from '@/database'
import { Product } from '@/models'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    message: string
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {

    switch ( req.method ) {
        case 'POST':
            return seedData( req, res )
    
        default:
            return res.status(404).json({ message: 'Bad Request' })
    }

}

const seedData = async( req: NextApiRequest, res: NextApiResponse<Data> ) => {

    if ( process.env.NODE_ENV === 'production' ) {
        return res.status(401).json({ message: 'No tiene acceso a este servicio' })
      }
    
    await db.connect()
    await Product.deleteMany()
    await Product.insertMany( seedDatabase.initialData.products )
    await db.disconnect()
    
    return res.status(200).json({ message: 'Proceso realizado correctamente' })
}