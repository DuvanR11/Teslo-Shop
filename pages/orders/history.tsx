import React from 'react'
import { ShopLayout } from "@/components/layouts";
import { Typography, Box, Grid, Chip, Link } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import NextLink from 'next/link'

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullname', headerName: 'Nombre completo', width: 250 },
    {
        field: 'paid',
        headerName: 'Pagada',
        description: 'Orden pagada',
        width: 180,
        renderCell: (params: GridRenderCellParams) => {
            return (
                params.row.paid
                    ? <Chip color='success' label='Pagada' variant='outlined' sx={{ width: 100 }}/>
                    : <Chip color='error' label='No pagada' variant='outlined' sx={{ width: 100 }}/>
            )
        }
    },
    {
        field: 'orden',
        headerName: 'ver orden',
        description: 'Orden pagada',
        width: 180,
        sortable:false,
        renderCell: (params: GridRenderCellParams) => {
            return (
                <NextLink href={`/orders/${params.row.id}`} passHref legacyBehavior>
                    <Link underline='always'>
                        Ver orden
                    </Link>
                </NextLink>
            )
        }
    }
]

const rows = [
    { id: 1, paid: false,  fullname: 'Duvan Rivera' },
    { id: 2, paid: true,  fullname: 'Duvan Rivera' },
    { id: 3, paid: false,  fullname: 'Duvan Rivera' }
]

const HistoryPage = () => {
  return (
    <ShopLayout title={'Historial de ordenes'} pageDesciption={'Historial de ordenes de clientes'} imageFullUrl={''} >
        <Typography variant='h1' component='h1'></Typography>

        <Grid container>
            <Grid item xs={ 12 } sx={{ height: 650, width: '100%'  }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                pagination: {
                    paginationModel: {
                    pageSize: 5,
                    },
                },
                }}
                pageSizeOptions={[5]}
            />
            </Grid>
        </Grid>

    </ShopLayout>
  )
}

export default HistoryPage