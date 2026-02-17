import React from 'react'
import useDate from '../../hooks/useDate'

function PaymentCard({ orderDetails }) {

    const date = new Date(orderDetails?.orderDate)

    return (
        <div className="bg-white p-5 rounded-md border">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Order Summary</h2>

            <div className="space-y-4">

                <div>
                    <p className="text-xs text-gray-500 uppercase">Placed On</p>
                    <p className="text-sm font-medium text-gray-800">{useDate(date)}</p>
                </div>

                <div>
                    <p className="text-xs text-gray-500 uppercase">Payment Status</p>
                    <p className={`text-sm font-medium capitalize ${orderDetails?.orderStatus === 'confirmed' ? 'text-green-600' : 'text-yellow-600'}`}>
                        {orderDetails?.paymentStatus}
                    </p>
                </div>

                <div>
                    <p className="text-xs text-gray-500 uppercase">Payment Method</p>
                    <p className="text-sm font-medium text-gray-800">PayPal</p>
                </div>

                <div>
                    <p className="text-xs text-gray-500 uppercase">Order Status</p>
                    <p className={`text-sm font-medium capitalize ${orderDetails?.orderStatus === 'confirmed' ? 'text-green-600' : 'text-yellow-600'}`}>
                        {orderDetails?.orderStatus}
                    </p>
                </div>

                <div>
                    <p className="text-xs text-gray-500 uppercase">Total Price</p>
                    <p className="text-xl font-semibold">${orderDetails?.totalAmount.toFixed(2)}</p>
                </div>

            </div>
        </div>
    )
}

export default PaymentCard