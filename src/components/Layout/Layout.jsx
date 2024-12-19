import React from 'react'
import { Header, Footer } from '../index'
import { Outlet, useNavigate } from 'react-router'

function Layout() {

    const navigate = useNavigate();

    return (
        <div className='container py-3'>
            <Header />
            <main className='text-center'>
                <Outlet/>
                <button 
                    type='button' 
                    className='btn btn-info btn-xs mt-5'
                    onClick={() => navigate("/")}
                >
                    Go to HomePage
                </button>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout