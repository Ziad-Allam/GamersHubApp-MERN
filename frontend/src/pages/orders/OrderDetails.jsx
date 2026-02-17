import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrderDetails } from '../../features/order/orderSlice'
import { Link, useParams } from 'react-router-dom'
import { HiArrowSmLeft } from "react-icons/hi";
import OrderItemCard from '../../components/orderDetails/OrderItemCard';
import ShippingCard from '../../components/orderDetails/ShippingCard';
import PaymentCard from '../../components/orderDetails/PaymentCard';
import Title from '../../components/ui/Title';
import useCheckToken from '../../hooks/useCheckToken';
import OrderDetailsLoading from '../../components/loading/OrderDetailsLoading';
import AddReview from '../../components/reviews/AddReview';
import { useState } from 'react';

function OrderDetails() {

    const dispatch = useDispatch()
    const { id } = useParams()
    const { orderDetails, isLoading, error } = useSelector((state) => state?.order)

    const [openModal, setOpenModal] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null);

    useCheckToken(error)

    useEffect(() => {
        dispatch(fetchOrderDetails(id))
    }, [])

    return (
        <>
            <Link to='/orders'>
                <div className=' flex items-center gap-1 pt-4'>
                    <HiArrowSmLeft />
                    <span className='text-xs'>Back to orders</span>
                </div>
            </Link>

            <Title>Order Details</Title>

            {
                isLoading ?
                    <OrderDetailsLoading />
                    :
                    <div className='grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-4'>

                        <div>
                            <div className='grid grid-cols-1 gap-4'>
                                {orderDetails?.cartProducts.map((OrderItems) => {
                                    return (
                                        <div key={OrderItems._id}>
                                            <OrderItemCard setSelectedProduct={setSelectedProduct} setOpenModal={setOpenModal} OrderItems={OrderItems} orderStatus={orderDetails.orderStatus} />
                                        </div>
                                    )
                                })}
                            </div>

                            {openModal && selectedProduct && (
                                <AddReview setOpenModal={setOpenModal} productData={selectedProduct} />
                            )}

                        </div>

                        <div className='flex flex-col gap-4 order-first lg:order-last'>
                            <div className='border px-4 py-2 rounded-md font-light bg-white'>
                                Order ID: <span className='font-medium uppercase'>{orderDetails?._id}</span>
                            </div>
                            <PaymentCard orderDetails={orderDetails} />
                            <ShippingCard orderDetails={orderDetails} />
                        </div>

                    </div>
            }

        </>
    )
}

export default OrderDetails
