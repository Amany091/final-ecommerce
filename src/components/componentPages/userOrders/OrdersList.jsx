import { useNavigate } from "react-router-dom";
import { useGetOrdersQuery } from "../../../features/RTK/adminDashboardApi";
import Order from "./Order";

const OrdersList = ({ status }) => {
    const { data, isLoading } = useGetOrdersQuery({ page: 1, limit: 100 }, {
        refetchOnFocus: true
    });
    const navigate = useNavigate()

    return (
        <>
            {data && data.length > 0 ?
                <div> It looks like you haven't placed any orders yet. <button onClick={() => navigate("/")} >  Start exploring our collection <MdArrowRight size={30} className='inline' /></button> </div> : (
                    isLoading ? <LoaderSpinner />
                        : (
                            <div className=' border border-slate-300/50 rounded p-2 my-10'>
                                <Order orders={data} status={status} />
                            </div>
                        )
                )}
        </>
    );
}

export default OrdersList;