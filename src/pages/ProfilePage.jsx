import React, { useEffect } from 'react'
import { useGetUserQuery } from '../redux/RTK/loginApi'
import defaultImg from "../assets/images/defaultImgProfile.jpg"
import { CiMail } from 'react-icons/ci'

const ProfilePage = () => {
    const { data: user, isSuccess, refetch } = useGetUserQuery({}, { refetchOnFocus: true })
    console.log(user)
    const img = user?.profileImg ? user?.profileImg : defaultImg

    useEffect(() => {
        if(isSuccess) refetch()
    },[])

    return (
        <div className='dark:bg-dark bg-inputBackground p-10'>
            <div className="container">
                <div className="flex justify-center items-center flex-col gap-5 bg-inputBackground dark:text-black p-5 rounded-lg">
                    <div className='w-28 h-28 rounded-full  border-slate-300 shadow-lg border-[4px] flex items-center justify-center' >
                        <img src={img} alt="profileImg" className="rounded-full object-contain" height={80} width={80} loading='lazy' />
                    </div>
                    <p>{user?.name}</p>
                    <h5> role: {user?.role} </h5>
                    <div className="w-2/5 flex flex-col gap-y-2 justify-center">
                        <div className='flex gap-10 items-center'>
                            <h3>Email</h3>
                            <p className='p-3 rounded-lg flex-1 border-[2px] border-slate-300' ><CiMail className='inline' /> {user?.email}</p>
                        </div>
                        <div className='flex gap-10 items-center'>
                            <h3>Phone</h3>
                            <p className='p-3 rounded-lg flex-1 border-[2px] border-slate-300' >{user?.phone ?? "notexist" }</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
