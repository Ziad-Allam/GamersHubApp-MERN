import React from 'react'

function OutOfStockButton({ children }) {
    return (
        <button
            disabled={true}
            className="border bg-gray-500 w-full text-white py-3 text-lg font-semibold rounded-md cursor-not-allowed opacity-60">
            {children}
        </button>
    )
}

export default OutOfStockButton
