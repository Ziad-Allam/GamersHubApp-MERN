import React, { useEffect } from 'react'
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { fetchCart } from '../../../features/cart/cartSlice';

function CartIcon() {

    const dispatch = useDispatch()

    const { products } = useSelector((state) => state.cart.cart)
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if(user)
        dispatch(fetchCart(user?.id))
    }, [])

    return (
        <Link to='cart'>
            <div className='relative'>
                <MdOutlineShoppingCart color='white' size={25}/>
                {products?.length > 0 &&
                    <div className='w-5 h-5 absolute -top-2 -right-3 bg-amber-600 rounded-full flex items-center justify-center text-sm text-black font-semibold'>
                        {products?.length}
                    </div>
                }
            </div>
        </Link>
    )
}

export default CartIcon
