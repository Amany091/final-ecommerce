import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeOrderStatus, fetchOrders, ordersStatus, setSearchOrder, setPage, deleteOrder, countOrders } from '../redux/features/adminDashboardSlice'
import DashboardSidebar from '../components/componentPages/dashboard/DashboardSidebar'
import OrderTable from '../components/componentPages/dashboard/OrderTable'
import OrderStatusSummary from '../components/componentPages/dashboard/OrderStatusSummary'
import { AiFillCaretRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Pagination from '../components/componentPages/dashboard/Pagination'

const AdminDashboard = () => {
    const dispatch = useDispatch()
    const { orders, completed, searchResult, canceled, processing, currentPage, total , limit, totalPages} = useSelector((store) => store.admin)
    const [isDirty, setIsDirty] = useState(false)

    useEffect(() => {
        dispatch(countOrders())
        dispatch(fetchOrders({ currentPage }))
        dispatch(ordersStatus(orders))
    }, [])

    console.log(total)

    // const totalPages = useMemo(() => {
    //     return Math.ceil(total / limit )
    // },[total])

    const handleChangeOrderStatus = (id, status) => {
        let newStatus = { status: status }
        dispatch(changeOrderStatus({ id, status: newStatus })).then(() => {
            dispatch(fetchOrders())
            dispatch(ordersStatus(orders))
        })
    }

    const handleSearchOrder = useCallback((e) => {
        let orderTirm = e.target.value.trim()
        setIsDirty(true)
        dispatch(setSearchOrder(orderTirm == '' ? '' : orderTirm))
    }, [dispatch])

    const handleChangePage = (newPage) => {
        dispatch(setPage(newPage))
    }

    const handleDeleteOrder = (id) => {
        dispatch(deleteOrder(id))
    }
    return (
        <div className="container mx-auto mt-10">
            <nav className="mb-5 flex mt-4 space-x-4 items-center">
                <Link to="/" className="text-gray-500">Dashboard</Link>
                <AiFillCaretRight className='flex' />
                <span className='text-black'>Orders</span>
            </nav>
            <div className='flex flex-col md:flex-row'>
                <DashboardSidebar />
                <div className="flex-1 p-4">
                    {/* handle life cycle when mounting */}
                    <OrderStatusSummary
                        completed={completed}
                        canceled={canceled}
                        processing={processing}
                    />
                    <OrderTable
                        orders={orders}
                        completed={completed}
                        searchResult={searchResult}
                        onChangeOrderStatus={handleChangeOrderStatus}
                        onSearchOrder={handleSearchOrder}
                        onDeleteOrder={handleDeleteOrder}
                        isDirty={isDirty}
                    />
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handleChangePage}
                    />
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard