import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../features/cart/cartSlice'
import CartItem from '../components/cart/CartItem';
import { useNavigate } from 'react-router-dom';
import useHandleQuantity from '../hooks/useHandleQuantity.JS';
import useHandleDeleteItem from '../hooks/useHandleDeleteItem.js';
import EmptyCart from '../components/ui/EmptyCart.jsx';
import useCheckToken from '../hooks/useCheckToken.js';
import CartLoading from '../components/loading/CartLoading.jsx';
import { PiGameControllerFill } from 'react-icons/pi';
import OrderSummary from '../components/cart/OrderSummary.jsx';
import PrimaryButton from '../components/common/buttons/PrimaryButton.jsx';
import Container from '../components/common/Container.jsx';

function Cart() {

    const dispatch = useDispatch()
    const [isCheckoutStart, setIsCheckoutStart] = useState(false);

    const { cart, isLoading, error } = useSelector((state) => state.cart)

    const navigate = useNavigate()

    const navigateToCheckout = () => {
        setIsCheckoutStart(true)
        navigate("/checkout");
    };

    const { handleQuantity } = useHandleQuantity(cart?.products);
    const { handleDeleteItem } = useHandleDeleteItem();

    useCheckToken(error)

    useEffect(() => {
        dispatch(fetchCart())
    }, [dispatch])

    return (

        <div>
            <Container>
                <h2 className="text-lg sm:text-2xl font-semibold py-3">
                    Shopping Cart <span className="text-sm sm:text-base font-normal">({cart?.products?.length} items)</span>
                </h2>

                {
                    isLoading ?
                        <CartLoading />
                        :
                        !cart?.products?.length ? (
                            <EmptyCart />
                        ) : (
                            <div>
                                <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-8">

                                    {/* cart items */}
                                    <div className="lg:col-span-3 py-3">
                                        <div className="grid grid-cols-1 gap-4">
                                            {cart?.products.map((cartProduct) => (
                                                <CartItem
                                                    key={cartProduct.productId}
                                                    cartProduct={cartProduct}
                                                    handleQuantity={handleQuantity}
                                                    handleDeleteItem={handleDeleteItem}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Order Summary */}
                                    <div className='space-y-4'>
                                        <OrderSummary isLoading={isLoading} cartProducts={cart?.products} />
                                        <PrimaryButton hideOn='mobile' disabled={isLoading} onclick={navigateToCheckout}>Checkout</PrimaryButton>
                                    </div>

                                </div>
                            </div>
                        )
                }

                <div
                    className={`fixed bottom-16 left-0 shadow-md z-30 lg:hidden bg-white w-full p-2 ${!cart?.products?.length && 'hidden'}`}>
                    <PrimaryButton hideOn='desktop' disabled={isLoading} onclick={navigateToCheckout}>Checkout</PrimaryButton>
                </div>

                {isCheckoutStart &&
                    <div className={`fixed inset-0 bg-black bg-opacity-80 transition-opacity z-50 flex items-center justify-center`}>
                        <div className="flex flex-col items-center justify-center h-screen gap-4">
                            <div className="animate-spin rounded-full h-12 w-12 border-4 border-amber-600 border-t-transparent"></div>
                            <div className='flex items-center gap-1 text-'>
                                <span className='font-semibold text-white text-lg lg:text-xl'>G A</span>
                                <PiGameControllerFill className='text-amber-600 text-2xl' />
                                <span className='font-semibold text-white text-lg lg:text-xl'>E R S</span>
                            </div>
                        </div>
                    </div>
                }
            </Container>
        </div>
    );
}

export default Cart
