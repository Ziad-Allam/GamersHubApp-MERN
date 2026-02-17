import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../features/order/orderSlice';
import OrderItemCard from '../components/orderDetails/OrderItemCard';
import { fetchDefaultAddress } from '../features/address/addressSlice';
import DefaultAddressCard from '../components/account/address/DefaultAddressCard';
import PaymentMethods from '../components/Checkout/PaymentMethods';
import Logo from '../components/common/Logo';
import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { fetchCheckout } from '../features/checkout/checkoutSlice';
import useCheckToken from '../hooks/useCheckToken';
import OrderSummary from '../components/cart/OrderSummary';
import OrderItemCardLoading from '../components/loading/OrderItemCardLoading';
import PrimaryButton from '../components/common/buttons/PrimaryButton';
import Container from '../components/common/Container';

function Chackout() {

    const { checkout, error, isLoading } = useSelector((state) => state.checkout)

    useCheckToken(error)

    const { user } = useSelector((state) => state.auth)
    const { defaultAddress } = useSelector((state) => state.address)
    const defaultAddressLoading = useSelector((state) => state.address.isLoading)

    const { approvalURL } = useSelector((state) => state.order)
    const [isPaymentStart, setIsPaymemntStart] = useState(false);
    const dispatch = useDispatch()

    function handleInitialPayment() {
        const orderDate = {
            userId: user.id,
            cartId: checkout.cartId,
            totalAmount: checkout.total,
            paymentStatus: 'pending',
            paymentMethod: 'paypal',
            orderStatus: 'pending',
            orderUpdateDate: new Date(),
            orderDate: new Date(),
            paymentId: '',
            payerId: '',
            cartProducts: checkout.orderItems.map(cartProduct => ({
                productId: cartProduct.productId,
                title: cartProduct.title,
                image: { url: cartProduct.image.url },
                quantity: cartProduct.quantity,
                price: cartProduct.salePrice > 0 ? cartProduct.salePrice : cartProduct.price,
            })),
            shippingInfo: {
                name: defaultAddress.name,
                phoneNo: defaultAddress.phone,
                fullAddress: defaultAddress.fullAddress,
                city: defaultAddress.city,
                landmark: defaultAddress.landmark,
                buildingNo: defaultAddress.buildingNo,
                floorNo: defaultAddress.floorNo,
                aptNo: defaultAddress.aptNo,
            }
        }
        dispatch(createOrder(orderDate)).then((data) => {
            if (data?.payload?.success) {
                setIsPaymemntStart(true);
            } else {
                setIsPaymemntStart(false);
            }
        })
    }

    if (approvalURL) {
        window.location.href = approvalURL
    }

    useEffect(() => {
        dispatch(fetchCheckout())
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchDefaultAddress())
    }, [dispatch])

    const [paymentMethod, setPaymentMethod] = useState("paypal");

    return (
        <>
            <div className="min-h-screen flex flex-col bg-gray-100">

                {/* Header */}
                <div className='bg-blue-600'>
                    <div className='py-5 flex items-center justify-between  max-w-screen-2xl mx-auto px-4'>
                        <Logo />
                        <Link to='/cart'>
                            <div className='relative'>
                                <MdOutlineShoppingCart color='white' size={25} />
                            </div>
                        </Link>

                    </div>
                </div>

                <div className="flex-grow max-w-screen-2xl mx-auto w-full">
                    <Container>


                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-8 pb-20">

                            {/* LEFT SIDE (Address + Cart Products) */}
                            <div className="lg:col-span-3">

                                {/* Default Address */}
                                <DefaultAddressCard defaultAddress={defaultAddress} isLoading={defaultAddressLoading} />

                                {/* Cart Products */}
                                <div className='p-2 lg:p-4 bg-white rounded-md shadow-lg border border-gray-200'>
                                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">Your Order</h2>
                                    <div className="grid gap-4 w-full">

                                        {
                                            isLoading ?
                                                <OrderItemCardLoading />
                                                :
                                                checkout.orderItems?.map((OrderItems, i) => (
                                                    <div key={i}>
                                                        <OrderItemCard OrderItems={OrderItems} />
                                                    </div>
                                                ))
                                        }

                                    </div>
                                </div>

                                <PaymentMethods
                                    selectedMethod={paymentMethod}
                                    onChange={setPaymentMethod}
                                />

                            </div>

                            {/* RIGHT SIDE (Summary + Pay) */}
                            <div >
                                <div className='lg:sticky lg:top-4 space-y-4'>
                                    <OrderSummary isLoading={isLoading} cartProducts={checkout.orderItems} />

                                    <PrimaryButton onclick={handleInitialPayment} hideOn='mobile' disabled={isLoading}>
                                        {isPaymentStart ? "Processing Payment..." : "Place Order"}
                                    </PrimaryButton>
                                </div>
                            </div>

                        </div>
                    </Container>
                </div>
                <div className='fixed bottom-0 left-0 shadow-inner z-40 lg:hidden bg-white w-full p-2'>
                    <PrimaryButton onclick={handleInitialPayment} hideOn='desktop'>
                        {isPaymentStart ? "Processing Payment..." : "Place Order"}
                    </PrimaryButton>
                </div>
            </div>

        </>
    )
}

export default Chackout
