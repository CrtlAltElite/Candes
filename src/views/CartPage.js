import React from 'react'
import Cart from '../components/Cart/Index'
import { Typography } from '@mui/material'

export default function CartPage() {
  return (
    <>
      <Typography variant='h3'>Your Cart</Typography>
      <Cart/>
    </>
  )
}
