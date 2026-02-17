// hooks/useHandleAuthError.js
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import { resetCart } from "../features/cart/cartSlice";
import { resetAddress } from "../features/address/addressSlice";
import { resetOrder } from "../features/order/orderSlice";
import { resetWishlist } from "../features/wishlistSlice";
import { resetProfile } from "../features/userSlice";

export default function useCheckToken(error) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!error) return;

    if (error === "jwt expired" || "Unauthorised user!") {
      dispatch(logout());
      dispatch(resetCart());
      dispatch(resetAddress());
      dispatch(resetOrder());
      dispatch(resetWishlist());
      dispatch(resetProfile());
      toast.error('Please Login')
    }

  }, [error]);
}
