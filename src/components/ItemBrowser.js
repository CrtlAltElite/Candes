import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';
import InfoIcon from '@mui/icons-material/Info';

const items=[{
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
    "id":3,
    "name":"itemA",
    "desc":"itemA is good",
    "price":9.99,
    "img":"https://res.cloudinary.com/cae67/image/upload/v1652745758/kyle1_plkclv.png",
    "category_id":1,
    "category_name":'Sour'
  },{
    "id":4,
    "name":"itemA",
    "desc":"itemA is good",
    "price":9.99,
    "img":"https://res.cloudinary.com/cae67/image/upload/v1652745758/kyle1_plkclv.png",
    "category_id":1,
    "category_name":'Sour'
  },{
    "id":5,
    "name":"itemA",
    "desc":"itemA is good",
    "price":9.99,
    "img":"https://res.cloudinary.com/cae67/image/upload/v1652745758/kyle1_plkclv.png",
    "category_id":1,
    "category_name":'Sour'
  }

]

export default function ItemBrowser({category_id}) {
    const handleAddToCart = (item) =>{
        console.log("added", item.name, "to cart")
    }

  return (
    <ImageList cols={3}>
        {items.map((item)=>(
            <ImageListItem key={item.id}>
                <img src={item.img} srcSet={item.img} alt={item.name} loading="lazy"/>
                <ImageListItemBar
                title={item.name}
                subtitle={'$'+item.price.toFixed(2)}
                actionIcon={<>
                    <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} aria-label={`info about ${item.title}`} onClick={()=>console.log('get more info')}>
                        <InfoIcon/>
                    </IconButton>
                    <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} aria-label={`info about ${item.title}`} onClick={()=>handleAddToCart(item)}>
                        <AddShoppingCartTwoToneIcon/>
                    </IconButton>

                </>}
                />

            </ImageListItem>
        ))}
    </ImageList>

  )
}
