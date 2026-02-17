import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCartItem } from '../features/cart/cartSlice'

function useHandleDeleteItem() {

    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    function handleDeleteItem(cartProduct) {
        dispatch(deleteCartItem({ userId: user.id, productId: cartProduct.productId }))
    }

    return { handleDeleteItem }
}

export default useHandleDeleteItem
