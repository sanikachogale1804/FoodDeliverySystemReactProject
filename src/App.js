import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './Component/User/Navbar';
import UserRegister from './Component/User/UserRegister';
import RestaurantRegister from './Component/Restaurant/RestaurantRegister';
import Main from './Component/Main';
import MenuItems from './Component/MenuItems/MenuItems';
import Menu from './Component/MenuItems/Menu';
import MenuItemForm from './Component/MenuItems/MenuItemForm';
import UserLogin from './Component/User/UserLogin';
import MenuItemAdmin from './Component/MenuItems/MenuItemAdmin';
import MenuAdmin from './Component/MenuItems/MenuAdmin';
import AboutUs from './Component/User/AboutUs';
import MenuItemDetails from './Component/MenuItems/MenuItemDetails';
import Resturant from './Component/Restaurant/Resturant';
import Contact from './Component/User/Contact';
import ResturantItemDetails from './Component/Restaurant/ResturantItemDetails';
import RestuarantItemForm from './Component/Restaurant/RestuarantItemForm';


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
  path:"/main",
  element:<Main/>
},
{
  path:"menu",
  element:<><Navbar/><Menu/></>
},
{
  path:"/menu-admin",
  element:<><Navbar/><MenuAdmin/></>
},
{
 path:"menuItemAdmin",
 element:<MenuItemAdmin/>
},
{
  path:"userlogin",
  element:<><UserLogin/></>
},
{
  path:"menuItemForm",
  element:<MenuItemForm/>
},
{
  path:"aboutus",
  element:<AboutUs/>
},
{
  path:"menu/:id",
  element:<><Navbar/><MenuItemDetails/></>
},
{
  path:"resturant/:id",
  element:<><Navbar/><ResturantItemDetails/></>
},
{
  path:"restaurant",
  element:<><Navbar/><Resturant/></>
},
{
  path:"/contact",
  element:<><Navbar/><Contact/></>

},
{
  path:"/restaurantItemForm",
  element:<><RestuarantItemForm/></>
}
])

function App() {
  return (
    <div className="App">

<RouterProvider router={routes}/>

      
    </div>
  );
}

export default App;
