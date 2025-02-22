import React, { useState } from 'react'
import CurrentPath from '../components/ui/CurrentPath'
import OrderSummary from '../components/componentPages/cart/OrderSummary'
import DashboardSidebar from "../components/componentPages/dashboard/DashboardSidebar"
import { useGetOrdersQuery } from '../features/RTK/adminDashboardApi'
import OrderStatus from '../components/componentPages/userOrders/OrderStatus'
import OrdersList from '../components/componentPages/userOrders/OrdersList'

const UserOrders = () => {
    const [status, setStatus] = useState("pending")

    const { data: orders } = useGetOrdersQuery({ page: 1, limit: 100 }, {
        refetchOnFocus: true
    })

    return (
        <div className="container font-inter mb-32">
            <nav>
                <CurrentPath currentPath={["orders"]} />
            </nav>
            <div className="grid lg:grid-cols-[295px,.9fr] md:grid-cols-[295px,.9fr] sm:grid-cols-1 gap-5 ">
                <DashboardSidebar />
                <div>
                    {/* filter orders via Pending or Completed */}
                    <OrderStatus status={status} setStatus={setStatus} />

                    {/* list all user orders */}
                    <OrdersList status={status} />

                    <div className='flex gap-5 flex-wrap lg:flex-nowrap md:flex-wrap justify-center'>
                        <OrderSummary showButton={false} updatedOrder={orders} />
                        <div className='border border-slate-300/50 rounded p-2 w-full  ' >
                            <h2>Order Address</h2>
                            <textarea name="address" id="orderAddress" className=' w-full  border-none rounded placeholder:text-center placeholder:text-xs mt-3 text-black' placeholder='Address Details...' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UserOrders
