import React from 'react'
import { FaChevronRight } from 'react-icons/fa'


const DashboardSidebar = () => {
  return (
    <div className='mx-auto'>
        <div className=" w-[295px] h-auto  p-4 shadow border border-slate-300/50 rounded-xl mt-5">
            <h2 className='font-bold text-xl border-b pb-4 mb-4'> Dashboard</h2>
            <ul className="space-y-4 mt-2">
                <li className="flex justify-between items-center my-5">
                Orders <FaChevronRight />
                </li>
                <li className="flex justify-between items-center my-5">
                Address <FaChevronRight />
                </li>
                <li className="flex justify-between items-center my-5 border-b pb-4 mb-4">
                Account <FaChevronRight />
                </li>
                <li className="flex justify-between items-center my-5">
                Logout <FaChevronRight />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default DashboardSidebar
