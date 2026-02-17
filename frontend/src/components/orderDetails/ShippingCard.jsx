import React from 'react'

function OrderShippingInfoCard({ orderDetails }) {
  
  return (
    <div className="bg-white p-5 rounded-md border">

      <h2 className="text-lg font-semibold text-gray-800 mb-3">Shipping Info</h2>

      <div className="space-y-3">

        <div>
          <p className="text-xs text-gray-500 uppercase">Full Name</p>
          <p className="text-sm font-medium text-gray-800 capitalize">{orderDetails?.shippingInfo.name}</p>
        </div>

        <div>
          <p className="text-xs text-gray-500 uppercase">Phone</p>
          <p className="text-sm font-medium text-gray-800">+20 111 222 3333</p>
        </div>

        <div>
          <p className="text-xs text-gray-500 uppercase">Address</p>
          <p className="text-sm font-medium text-gray-800 capitalize">{orderDetails?.shippingInfo.fullAddress}</p>
        </div>

        <div>
          <p className="text-xs text-gray-500 uppercase">City</p>
          <p className="text-sm font-medium text-gray-800 capitalize">{orderDetails?.shippingInfo.city}</p>
        </div>

        <div>
          <p className="text-xs text-gray-500 uppercase">Building No</p>
          <p className="text-sm font-medium text-gray-800 capitalize">{orderDetails?.shippingInfo.buildingNo}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase">Floor No</p>
          <p className="text-sm font-medium text-gray-800 capitalize">{orderDetails?.shippingInfo.floorNo}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase">Apt No</p>
          <p className="text-sm font-medium text-gray-800 capitalize">{orderDetails?.shippingInfo.aptNo}</p>
        </div>

        <div>
          <p className="text-xs text-gray-500 uppercase">Landmark</p>
          <p className="text-sm font-medium text-gray-800 capitalize">{orderDetails?.shippingInfo.landmark}</p>
        </div>

      </div>

    </div>
  )
}

export default OrderShippingInfoCard
