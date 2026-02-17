import React from 'react'
import OrderHeader from './OrderHeader'
import { Link } from 'react-router-dom'

function OrderCard({ orderData }) {

    const date = new Date(orderData.orderDate)

    return (
        <Link to={`/order-details/${orderData._id}`}>
            <div className='border p-4 rounded-md bg-white shadow-md'>

                <OrderHeader orderData={orderData} date={date} />

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                    {orderData.cartProducts.map((product) => {
                        return (
                            <div key={product._id} className='flex items-center gap-4'>
                                <div className="size-20 flex-shrink-0">
                                    <img src={product.image.url} className='w-full object-cover' alt={product.title} />
                                </div>
                                <p className="flex-grow text-sm sm:text-base overflow-hidden text-ellipsis break-words">
                                    {product.title}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Link>
    )
}

export default OrderCard
