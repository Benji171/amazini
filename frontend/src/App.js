import React from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen1'
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SignInScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import PaymentScreen from './screens/PaymentScreen';
import ShippingScreen from './screens/ShippingScreen';

function App() {

const userSignin = useSelector(state => state.userSignin);
const { userInfo } = userSignin;

  const openMenu = () => {
      document.querySelector(".sidebar").classList.add("open") 
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }


  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>
            &#9776;
      </button>
          <Link to="/" >amazona</Link>
        </div>
        <div className="header-links">
          <a href="/cart">Cart</a>
          {
            userInfo ? <Link className="header-link" to="/profile">{userInfo.name}</Link> :
              <Link className="header-link" to="/signin">Sign In</Link>
          }
          {userInfo && userInfo.isAdmin && (
            <div className="dropdown">
              <a href="#"  >Admin</a>
              <ul className="dropdown-content">
                <li>
                  <Link to="/orders">Orders</Link>
                  <Link to="/products">Products</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>

    <aside className="sidebar">
        <h3 className="text-center">Shopping Catigories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
            <li>
                <a href="/category/shoes">Shoes</a>
            </li>
            <li>
                <a href="/category/jewelry">Jewelry</a>
            </li>
        </ul>
    </aside>

    <main className="main">
    <div className="content">
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />


           
        </div>
    </main>

    <footer className="footer">
        All rights reserved.
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
