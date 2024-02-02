import React, { useState } from 'react'
import { Navbar, ProjectDashboard, Sidebar } from '../index'

const Home = ({ toggleTheme, theme }) => {
    


    return (
        <div className='bg-gradient-to-br from-dimWhite to-slate-200 dark:bg-gradient-to-br dark:to-primary dark:from-gray-800 h-screen overflow-y-scroll'>
            <Navbar toggleTheme={toggleTheme} theme={theme} />
            <div className='flex flex-row'>
                <Sidebar />
                <ProjectDashboard />
            </div>
        </div>
    )
}

export default Home