import './App.css';
import Box from '@mui/material/Box'
import Error from './components/Error';
import Button from './components/Button';
import CategoryBar from './components/CategoryBar';
import NavBar from './components/NavBar';
import AdminMenu from './components/AdminMenu';
import Item from './components/Item';
import LoginForm from './forms/LoginForm';
import CatForm from './forms/CatForm';
import ItemForm from './forms/ItemForm';
import AdminSelectCat from './components/AdminSelectCat';
import AdminSelectItem from './components/AdminSelectItem';
import Login from "./views/Login.js"
import AdminCategory from './views/AdminCategory';
import AdminItem from './views/AdminItem';
import Shop from './views/Shop';
import Cart from './components/Cart/Index';
import CartPage from './views/CartPage';
import {Route, Router, Routes} from 'react-router-dom';
import CheckOutSuccess from './views/CheckOutSuccess';
import  SnackBar  from './components/SnackBar';
const HomePage = ()=>(<h1>Welcome To CAndEs</h1>)

function App() {

  return (
    <>
    <SnackBar/>
      <NavBar>
        <Box sx={{minHeight:'90vh'}}>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/checkoutsuccess" element={<CheckOutSuccess/>}/>
            <Route path="/admincat" element={<AdminCategory/>}/>
            <Route path="/adminitem" element={<AdminItem/>}/>

          </Routes>
        </Box>
        <AdminMenu/>
      </NavBar>
    </>
  );
}

export default App;
