import React from 'react'
import { Outlet } from 'react-router'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'

export default function Layout() {
    return (
        <div>
            <Header />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}