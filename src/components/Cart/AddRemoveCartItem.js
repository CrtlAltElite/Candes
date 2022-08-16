import ButtonGroup from '@mui/material/ButtonGroup'
import IconButton from '@mui/material/IconButton';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoTone';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';

export default function AddRemoveCartItem({item}) {
  return (
    <ButtonGroup sx={{margin:"auto"}}>
        <IconButton key="delete" onClick={()=>{console.log('removing all of ', item.name)}}>
            <DeleteForeverTwoToneIcon fontSize="small" />
        </IconButton>
        <IconButton key="rm" onClick={()=>{console.log('removeinf 1', item.name)}}>
            <RemoveCircleTwoToneIcon fontSize="small" />
        </IconButton>
        <IconButton key="add" onClick={()=>{console.log('added 1 more', item.name)}}>
            <AddCircleTwoToneIcon fontSize="small" />
        </IconButton>
    </ButtonGroup>
  )
}
