import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../common/footer/Footer'
import MobileBottomNav from '../mobile/MobileBottomNav'
import HeaderMain from '../common/header/HeaderMain'
import Navbar from '../common/header/Navbar'
import ScrollToTop from '../../utils/scrollToTop'

function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <ScrollToTop />
            <HeaderMain />
            <Navbar />
            <main className="flex-grow max-w-screen-2xl mx-auto w-full">
                <Outlet />
            </main>
            <MobileBottomNav />
            <Footer />
        </div>
    )
}

export default MainLayout
