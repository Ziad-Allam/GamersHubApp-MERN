import React from 'react'
import { IoMdCheckmark, IoMdClose } from 'react-icons/io'

function ProductAvailability({ totalStock }) {

  return (
    <>
      {totalStock < 1 ?
        <div className='flex items-center gap-2 text-red-600'>
          <IoMdClose />
          <span className='font-semibold'>OUT OF STOCK</span>
        </div>
        :
        totalStock <= 5 ?
          <div className='flex items-center gap-2 text-orange-600'>
            <IoMdCheckmark />
            <span className='font-semibold'>{`Low Stock (${totalStock} left)`}</span>
          </div>
          :
          <div className='flex items-center gap-2 text-green-600'>
            <IoMdCheckmark />
            <span className='font-semibold'>IN STOCK</span>
          </div>
      }
    </>
  )
}

export default ProductAvailability
