import './App.css';
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

function App() {
  return (
    <>
    <NavBar>
     
      <AdminSelectCat/>

      <AdminMenu/> 
    </NavBar>
    </>
  );
}

export default App;
