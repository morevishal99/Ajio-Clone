import React from 'react'
import Home from '../component/Home/Home'
import SingleCardPage from '../component/Womens/SingleCardPage'
import Womens from '../component/Womens/Womens';
import Mens from '../component/Mens/Mens';
import Kids from '../component/Kids/Kids';
import {Routes,Route} from 'react-router-dom';
import Signup from '../component/login_signup/Signup';
import Login from '../component/login_signup/Login';
import Cart from '../component/Womens/Cart';
import PaymentsPage from '../component/Womens/PaymentsPage';
import Wishlist from '../component/Wishlist/Wishlist';
import Homeandkitchen from '../component/Womens/Homeandkitchen';
import Dashboard from '../component/Admin/AdminPages/Dashboard';
import Store from '../component/Admin/AdminPages/Store';
import AddProducts from '../component/Admin/AdminPages/AddProducts';

const AllRoutes = () => {
    return (
        <Routes>
          <Route path="/" element={<Home/>} />
            <Route path="/women" element={<Womens/>} />
            <Route path="/men" element={<Mens/>} />
            <Route path="/kid" element={<Kids/>} />
            <Route path="/:category/:_id" element={<SingleCardPage/>}></Route>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/store' element={<Store />}></Route>
            <Route path='/addProduct' element={<AddProducts />}></Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/payment" element={<PaymentsPage />} />
        </Routes>
    )
}

export default AllRoutes