import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';
import InfoIcon from '@mui/icons-material/Info';
import { Box } from '@mui/system';
import Error from './Error';
import { CircularProgress } from '@mui/material';
import useItems from '../hooks/useItems';


export default function ItemBrowser({categoryID}) {
    const {error, items} =useItems(categoryID)
    
    const handleAddToCart = (item) =>{
        console.log("added", item.name, "to cart")
    }

   if (!items){
    return (
        <Box sx={{ display:"flex"}}>
            <CircularProgress/>
        </Box>
    )
} 
   if (error){
       return (
           <Box sx={{ display:"flex"}}>
               <Error>{error}</Error>
           </Box>
       )
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
