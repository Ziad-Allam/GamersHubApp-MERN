import React from 'react'

function PaymentSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md text-center">

        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center animate-bounce">
            <svg
              className="w-12 h-12 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800 mt-6">
          Payment Successful
        </h1>

        <p className="text-gray-500 mt-2">
          Thank you for your payment. Your order has been successfully received.
        </p>

        {/* Order Info */}
        <div className="mt-6 bg-gray-50 p-5 rounded-xl border border-gray-200 text-left">
          <p className="text-gray-700 font-medium">Transaction Details</p>

          <div className="mt-3 space-y-2 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Order ID</span>
              <span className="font-semibold">#A12345</span>
            </div>
            <div className="flex justify-between">
              <span>Date</span>
              <span className="font-semibold">05/11/2025</span>
            </div>
            <div className="flex justify-between">
              <span>Name</span>
              <span className="font-semibold">Hana samy</span>
            </div>

            <div className="flex justify-between">
              <span>Amount Paid</span>
              <span className="font-semibold">$149.00</span>
            </div>

            <div className="flex justify-between">
              <span>Payment Method</span>
              <span className="font-semibold">PayPal</span>
            </div>
          </div>
        </div>

        {/* Button */}
        <button
          className="mt-8 w-full py-3 bg-green-600 text-white rounded-xl text-sm font-medium hover:bg-green-700 transition-all"
          onClick={() => (window.location.href = "/orders")}
        >
          View Order Details
        </button>
      </div>
    </div>
  );
}

export default PaymentSuccess
