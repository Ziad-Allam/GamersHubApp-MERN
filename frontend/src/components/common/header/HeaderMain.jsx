import React, { useState } from 'react'
import Logo from '../Logo';
import ProfileDropdown from './ProfileDropdown';
import CartIcon from '../icons/CartIcon';
import WishlistIcon from '../icons/WishlistIcon';
import { useSelector } from 'react-redux';
import UserIcon from '../icons/UserIcon';

function HeaderMain() {

  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <header className='bg-blue-600'>

      <div className='py-5 flex items-center lg:justify-between justify-center max-w-screen-2xl mx-auto px-4'>
        <Logo />

        <div className='hidden lg:block'>
          <div className='flex items-center gap-8 text-2xl'>
            {
              isAuthenticated ?
                <ProfileDropdown />
                :
                <UserIcon />
            }
            <CartIcon />
            <WishlistIcon />
          </div>
        </div>

      </div>

    </header>
  )
}

export default HeaderMain
