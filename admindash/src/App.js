import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/users' element={<UserList/>}></Route>
          <Route path='/user/:userId' element={<User/>}></Route>
          <Route path='/newUser' element={<NewUser/>}></Route>
          <Route path='/products' element={<ProductList/>}></Route>
          <Route path='/product/:productId' element={<Product/>}></Route>
          <Route path='/newproduct' element={<NewProduct/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  </div>
  );
}

export default App;
