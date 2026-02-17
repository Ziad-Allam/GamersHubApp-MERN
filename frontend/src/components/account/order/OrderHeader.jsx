import React from 'react'
import useDate from '../../../hooks/useDate'

function OrderHeader({ orderData, date }) {
    return (
        <div className='border-b-2 mb-4 pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between'>
            <div className=''>
                <span className={`font-semibold capitalize text-sm ${orderData.orderStatus === 'confirmed' ? 'text-green-500' : 'text-yellow-500'}`}>{orderData.orderStatus}</span>
                <div className='font-light'>Placed on: <span className='text-sm font-semibold'>{useDate(date)}</span></div>
            </div>
            <div className='text-base font-light'>Order ID: <span className='text-sm font-semibold uppercase'>{orderData._id}</span></div>
        </div>
    )
}

export default OrderHeader
