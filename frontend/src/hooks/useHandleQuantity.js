import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCartItemQuantity } from '../features/cart/cartSlice'
import { toast } from 'react-toastify'

function useHandleQuantity(products) {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    function handleQuantity(cartProduct, actionType) {
        if (actionType === 'plus') {
            let getCartProducts = products || []
            if (getCartProducts.length) {
                const indexOfCurrentCartProduct = getCartProducts.findIndex(product => product.productId === cartProduct.productId)
                if (indexOfCurrentCartProduct > -1) {
                    const getQuantity = getCartProducts[indexOfCurrentCartProduct].quantity
                    if (getQuantity + 1 > cartProduct.totalStock) {
                        toast.error(`Only ${getQuantity} quantity can be added for this product`)
                        return
                    }
                }
            }
        }
        
        dispatch(updateCartItemQuantity({
            userId: user.id,
            productId: cartProduct.productId,
            quantity:
                actionType === 'minus' ?
                    cartProduct.quantity - 1
                    :
                    cartProduct.quantity + 1
        })).then(data => {
            if (data.payload.success) {
                toast.success('Success: You have modified your shopping cart!')
            }
        })
    }

    return { handleQuantity }
}

export default useHandleQuantity
