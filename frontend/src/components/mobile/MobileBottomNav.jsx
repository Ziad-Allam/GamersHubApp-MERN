import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MobileNavMenu from './MobileNavMenu';
import HamburgerIcon from '../common/icons/HamburgerIcon';
import HomeIcon from '../common/icons/HomeIcon';
import MobileProfileMenu from './MobileProfileMenu';
import CartIcon from '../common/icons/CartIcon';
import WishlistIcon from '../common/icons/WishlistIcon';
import UserIcon from '../common/icons/UserIcon';

function MobileBottomNav() {

  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [openNavItems, setOpenNavItems] = useState(false)
  const [isUserSidebarOpen, setIsUserSidebarOpen] = useState(false)

  return (
    <>
      <div className="fixed bottom-0 left-0 w-full bg-blue-600 shadow-md border-t border-gray-200 z-50 lg:hidden py-2">

        <div className="flex justify-around items-center py-2">
          <HamburgerIcon setOpenNavItems={setOpenNavItems} />
          <WishlistIcon />
          <HomeIcon />
          <CartIcon />
          {isAuthenticated ?
            <button
              onClick={() => setIsUserSidebarOpen(true)}>
              <div className="size-8 flex items-center justify-center bg-amber-600 border rounded-full font-bold text-white">
                {user?.firstname[0]?.toUpperCase()}
              </div>
            </button>
            :
            <UserIcon />
          }
        </div>

      </div>

        {/* Mobile only */}
        <MobileNavMenu openNavItems={openNavItems} setOpenNavItems={setOpenNavItems} />
        <MobileProfileMenu isUserSidebarOpen={isUserSidebarOpen} setIsUserSidebarOpen={setIsUserSidebarOpen} />
    </>
  );
}

export default MobileBottomNav;
