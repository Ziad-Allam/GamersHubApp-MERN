import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getWishlist, wishlistToggle } from '../features/wishlistSlice';

function useWishlistToggle() {
    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    function handleWishlist(productId) {
        dispatch(wishlistToggle({
            userId: user.id,
            productId,
        })).then(() => {
            dispatch(getWishlist(user.id));
        });
    }
    return {handleWishlist};
}

export default useWishlistToggle
