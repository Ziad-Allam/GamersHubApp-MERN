import React from 'react'
import Logo from '../common/Logo'
import HomeIcon from '../common/icons/HomeIcon';

function HeaderSecondary() {

    return (
        <div className='bg-blue-600'>
            <div className='py-5 flex items-center justify-between  max-w-screen-2xl mx-auto px-4'>
                <Logo />
                <HomeIcon />
            </div>
        </div>
    )
}

export default HeaderSecondary
