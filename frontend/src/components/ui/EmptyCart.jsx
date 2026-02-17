import React from 'react'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'

function EmptyCart() {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center">

            {/* Icon */}
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
                <MdOutlineShoppingCart size={50} className="text-gray-400" />
            </div>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Your cart is empty
            </h2>

            {/* Description */}
            <p className="mt-2 text-sm sm:text-base text-gray-500 max-w-md">
                Looks like you haven’t added anything to your cart yet.
                Start shopping to fill it with great products!
            </p>

            {/* CTA */}
            <Link
                to="/shop"
                className="mt-6 inline-flex items-center justify-center px-6 py-2.5
                   bg-blue-600 text-white text-sm font-medium rounded-md
                   hover:bg-blue-700 transition"
            >
                Start Shopping
            </Link>

        </div>
    )
}

export default EmptyCart
