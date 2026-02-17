import React from 'react'

function OrderItemCard({ OrderItems, setOpenModal, setSelectedProduct,orderStatus }) {

  return (
    <>
      <div className="bg-white p-4 rounded-md shadow-md border flex gap-4">

        <img
          src={OrderItems?.image.url}
          className="w-16 h-16 lg:w-28 lg:h-28 object-contain rounded-lg"
        />

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-semibold text-gray-900">
              {OrderItems.title}
            </h3>

            <div className="mt-1 space-y- text-sm text-gray-700">
              <p>
                <span className="font-medium text-gray-900">${OrderItems.price} X {OrderItems.quantity}</span>
              </p>
              <p>
                Total: <span className="font-semibold ">${OrderItems.quantity * OrderItems.price}</span>
              </p>
            </div>
            {
              orderStatus === 'confirmed' &&
              <button onClick={() => { setOpenModal(true); setSelectedProduct(OrderItems) }} className='text-sm text-orange-600 px-2 py-1 border rounded-2xl mt-2 border-orange-600'>Add Review</button>
            }
          </div>
        </div>

      </div>
    </>
  )
}

export default OrderItemCard
