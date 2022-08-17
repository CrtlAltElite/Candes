import React, {useContext} from 'react'
import Cart from '../components/Cart/Index'
import { Typography, Box } from '@mui/material'
import { AppContext } from '../context/AppContext'

export default function CartPage() {
 

  return (
    <>
    
      <Box sx={{maxWidth:"75%", mx:"auto"}}>
        <Typography variant='h3' sx={{ml:'20px'}}>Your Cart  
        </Typography>
        <Cart/>
      </Box>  
    </>
  )
}
