import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import { productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer } from './reducers/productReducers';
import thunk from 'redux-thunk';
import {cartReducer} from './reducers/cartReducers';
import Cookie from 'js-cookie';
import { userSigninReducer, userRegisterReducer, userUpdateReducer } from './reducers/userReducers';
import { orderCreateReducer, orderDetailsReducer, orderPayReducer, myOrderListReducer, orderListReducer, orderDeleteReducer } from './reducers/orderReducers';

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = { cart: { cartItems }, userSignin: { userInfo }};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    userUpdate: userUpdateReducer,
    myOrderList: myOrderListReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer
})

const composeEnhancer = window.__REDDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;