import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './Component/User/Navbar';
import UserRegister from './Component/User/UserRegister';
import RestaurantRegister from './Component/Restaurant/RestaurantRegister';
import MenuItemsRegister from './Component/MenuItems/MenuItemsRegister';


const routes=createBrowserRouter([
{
  path:"/navbar",
  element:<Navbar/>
},
{
  path:"/userregister",
  element:<UserRegister/>
},
{
  path:"/restaurantregister",
  element:<RestaurantRegister/>
},
{
  path:"/menuItemsRegister",
  element:<MenuItemsRegister/>
}])

function App() {
  return (
    <div className="App">

<RouterProvider router={routes}/>

      
    </div>
  );
}

export default App;
