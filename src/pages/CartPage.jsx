import React from 'react';
import CartItems from '../components/componentPages/cart/CartItems';
import OrderSummary from '../components/componentPages/cart/OrderSummary';
import { Link } from 'react-router-dom';
import { AiFillCaretRight } from "react-icons/ai";
import { useCountOrdersQuery } from '../features/RTK/adminDashboardApi';
import BreadCrumb from '../components/ui/BreadCrumb';

const CartPage = () => {
  const { data: total, } = useCountOrdersQuery();
  const queryParams = { page: 1, limit: total?.orderCount }

  return (
    <div className="container pb-20">
      <BreadCrumb />
      <nav className="mb-5 flex mt-4 space-x-4 items-center">
        <Link to="/" className="text-gray-500 ">Home</Link>
        <AiFillCaretRight className='flex' />
        <span className='text-black'>Cart</span>
      </nav>
      <div>
        <h2 className="text-3xl font-bold mb-4">Your cart</h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5">
          <CartItems
            queryParams={queryParams}
          />
          <OrderSummary
            queryParams={queryParams}
          />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
