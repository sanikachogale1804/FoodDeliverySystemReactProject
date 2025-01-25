import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './Component/User/Navbar';
import UserRegister from './Component/User/UserRegister';
import RestaurantRegister from './Component/Restaurant/RestaurantRegister';
import MenuItemsRegister from './Component/MenuItems/MenuItemsRegister';
import Main from './Component/Main';
import MenuItems from './Component/MenuItems/MenuItems';
import Menu from './Component/MenuItems/Menu';
import MenuItemForm from './Component/MenuItems/MenuItemForm';


const routes=createBrowserRouter([
{
  path:"/",
  element:<><Navbar/> <Main/></>
},
{
  path:"/userregister",
  element:<><Navbar/><UserRegister/></>
},
{
  path:"/restaurantregister",
  element:<RestaurantRegister/>
},
{
  path:"/menuItemsRegister",
  element:<MenuItemsRegister/>
},
{
  path:"/main",
  element:<Main/>
},
{
  path:"menuItems",
  element:<><Navbar/><Menu/></>
},
{
  path:"menuItemForm",
  element:<MenuItemForm/>
}])

function App() {
  return (
    <div className="App">

<RouterProvider router={routes}/>

      
    </div>
  );
}

export default App;
