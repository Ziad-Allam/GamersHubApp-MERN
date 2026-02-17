import React from 'react'
import AccountSideNav from '../account/AccountSideNav'
import { Outlet } from 'react-router-dom'
import HeaderSecondary from '../auth/HeaderSecondary'
import MobileBottomNav from '../mobile/MobileBottomNav'

function AccountLayout() {
    return (
        <div className='bg-gray-100'>
            <HeaderSecondary />
            <div className="flex min-h-screen max-w-screen-2xl mx-auto px-2 py-6 lg:space-x-10">
                <div className='w-72 hidden lg:block'>
                    <AccountSideNav />
                </div>
                <main className="flex-1 pb-20 lg:pb-0 ">
                    <Outlet />
                </main>
                <MobileBottomNav />
            </div>
        </div>
    )
}

export default AccountLayout
