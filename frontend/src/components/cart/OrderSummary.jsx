import React from 'react'
import { calculateOrderTotal } from '../../utils/calculateOrderTotal';
import OrderSummaryLoading from '../loading/OrderSummaryLoading';

function OrderSummary({ cartProducts, isLoading }) {

    const { subtotalAmount, totalDiscount, totalCartAmount } = calculateOrderTotal(cartProducts);

    return (
        <div className='py-3'>
            {
                isLoading ?
                    <OrderSummaryLoading />
                    :
                    <div className='w-full bg-white rounded-md shadow-md border lg:top- p-6'>
                        <h2 className="text-2xl pb-4 font-semibold border-b mt-">Order Summary</h2>

                        <div className="mt-4 flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">Subtotal</span>
                                <span className="font-medium">${subtotalAmount.toFixed(2)}</span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">Saving</span>
                                <span className="text-green-600 font-medium">
                                    -${totalDiscount.toFixed(2)}
                                </span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">Shipping Fee</span>
                                <span className="font-medium text-green-600">Free</span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">VAT (14%)</span>
                                <span className="font-medium text-gray-800">Included</span>
                            </div>

                            {/* Divider */}
                            <div className="border-t my-2"></div>

                            <div className="flex items-center justify-between">
                                <span className="text-xl font-bold">Total</span>
                                <span className="text-xl font-bold">
                                    ${totalCartAmount?.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>
            }
        </div>

    )
}

export default OrderSummary
