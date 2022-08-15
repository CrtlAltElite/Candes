import './App.css';
import Error from './components/Error';
import Button from './components/Button';
import CategoryBar from './components/CategoryBar';
import NavBar from './components/NavBar';
import AdminMenu from './components/AdminMenu';
import Item from './components/Item';

function App() {
  return (
    <>
    <NavBar>
      <CategoryBar/>
      <Item/>
      <AdminMenu/> 
    </NavBar>
    </>
  );
}

export default App;
