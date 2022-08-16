import React from 'react'
import CartItem from './CartItem'
import Box from '@mui/material/Box'
export default function Index() {
    const cart= [{
        "id":2,
        "name":"itemB",
        "desc":"itemB is good",
        "price":12.99,
        "img":"https://res.cloudinary.com/cae67/image/upload/v1652745758/kyle1_plkclv.png",
        "category_id":1,
        "category_name":'Sour'
      },{
        "id":1,
        "name":"itemA",
        "desc":"itemA is good",
        "price":9.99,
        "img":"https://res.cloudinary.com/cae67/image/upload/v1652745758/kyle1_plkclv.png",
        "category_id":1,
        "category_name":'Sour'
      },{
        "id":1,
        "name":"itemA",
        "desc":"itemA is good",
        "price":9.99,
        "img":"https://res.cloudinary.com/cae67/image/upload/v1652745758/kyle1_plkclv.png",
        "category_id":1,
        "category_name":'Sour'
      },{
        "id":4,
        "name":"hey",
        "desc":"itemA is good",
        "price":9.99,
        "img":"https://res.cloudinary.com/cae67/image/upload/v1652745758/kyle1_plkclv.png",
        "category_id":1,
        "category_name":'Sour'
      },{
        "id":5,
        "name":"another item",
        "desc":"itemA is good",
        "price":9.99,
        "img":"https://res.cloudinary.com/cae67/image/upload/v1652745758/kyle1_plkclv.png",
        "category_id":1,
        "category_name":'Sour'
      }
    
    ]

  return (
   <>
    <Box sx={{mb:15}}>
        {
            [...new Set(cart?.map(JSON.stringify))]?.map(JSON.parse)?.map(
                (item)=><CartItem key={item.id} item={item}/>
            )
        }
    </Box>
   </>


  )
}
