import { useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { resetCart } from '../features/cart/cartSlice';
import { resetAddress } from '../features/address/addressSlice';
import { resetOrder } from '../features/order/orderSlice';
import { resetWishlist } from '../features/wishlistSlice';
import { resetProfile } from '../features/userSlice';

function useLogout() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(resetCart());
    dispatch(resetAddress());
    dispatch(resetOrder());
    dispatch(resetWishlist());
    dispatch(resetProfile());
  };

  return handleLogout;
}

export default useLogout;
