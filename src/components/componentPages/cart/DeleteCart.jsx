import { FaTrash } from "react-icons/fa6";
import { useCountOrdersQuery, useDeleteOrderMutation, useGetOrdersQuery } from "../../../features/RTK/adminDashboardApi";
import setModalStatus from "../../../utils/helper/setmoadalStatus";
import { useEffect } from "react";
import { ToastSuccess } from "../../ui/Toast";

const DeleteCart = ({ id }) => {
    const [deleteOrder, { isSuccess }] = useDeleteOrderMutation()
    const { refetch: refetchCount, data: total } = useCountOrdersQuery()
    const queryParams = { page: 1, limit: total?.orderCount }
    const { refetch: refetchOrders } = useGetOrdersQuery(queryParams, {
        refetchOnFocus: true
    })

    const handleDeleteOrder = async (id) => {
        try {
            const res = await deleteOrder(id).unwrap()
            console.log(res);
            setModalStatus(false, dispatch)
            ToastSuccess("Order deleted successfully")
            return orders.filter((order) => order.id !== id)
        } catch (error) {
            console.log("Error occurred", error)
        }
    }

    // update the count of orders and orders after deleting an order
    useEffect(() => {
        refetchCount()
        refetchOrders()
    }, [isSuccess])

    return (
        <button className="text-red-500 border-none">
            <FaTrash className='absolute right-0' onClick={() => handleDeleteOrder(id)} />
        </button>
    );
}

export default DeleteCart;