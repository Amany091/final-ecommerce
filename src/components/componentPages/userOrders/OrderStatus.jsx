
const OrderStatus = ({ status, setStatus }) => {
    return (
        <div className="flex flex-row items-center">
            <h2 className='font-cairo font-bold flex-1'>Your Orders</h2>
            <span className={`inline-block mx-2 w-3 h-3 rounded-full ${status === "pending" ? 'bg-yellow-500' : 'bg-green-600'}`} />
            <select name="status" id="status" className='dark:text-black rounded-inputRadius' onChange={(e) => setStatus(e.currentTarget.value.toLowerCase().trim())}>
                <option value="Pending " className='dark:text-black'>Pending</option>
                <option value="Complete " className='dark:text-black'>Complete</option>
            </select>
        </div>
    );
}

export default OrderStatus;