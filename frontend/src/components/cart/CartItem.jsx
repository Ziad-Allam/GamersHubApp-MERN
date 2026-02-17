import React from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { MdOutlineDelete } from "react-icons/md";

function CartItem({ cartProduct, handleQuantity, handleDeleteItem }) {
    return (
        <div className='p-4 rounded-md bg-white shadow-md border'>

            <div className='flex gap-4'>

                <div className='w-36'>
                    <img src={cartProduct.image.url} alt={cartProduct.description} className='w-full object-cover' />
                </div>

                <div className='w-full space-y-3'>

                    <div className='flex flex-col sm:flex-row justify-between gap-1 sm:gap-6 '>

                        <p className="text-sm block sm:hidden">
                            {cartProduct.description.substring(0, 30)}...
                        </p>

                        <p className="text-lg hidden sm:block">
                            {cartProduct.description}
                        </p>

                        {cartProduct?.salePrice ?
                            (<div className='flex sm:flex-col items-center gap-4 sm:gap-0'>
                                <div className='text-sm sm:text-base text-red-500 flex items-center gap-4'><span className='line-through'>{cartProduct.price}</span></div>
                                <div className='flex items-center gap-4'>
                                    <span className='text-lg sm:text-xl font-semibold'>${cartProduct.salePrice}</span>
                                </div>
                            </div>)
                            :
                            (<div className='flex items-center gap-4'>
                                <span className='text-xl font-semibold'>${cartProduct.price}</span>
                            </div>)
                        }

                    </div>

                    <div className="flex items-center gap-3">

                        <div className="flex items-center border rounded-lg ">
                            {
                                cartProduct.quantity > 1 ?
                                    <button className="px-3 py-1 text-sm hover:bg-gray-100" onClick={() => handleQuantity(cartProduct, 'minus')}><FiMinus className='m-auto' /></button>
                                    :
                                    <button className="px-3 py-1 text-sm hover:bg-gray-100" onClick={() => handleDeleteItem(cartProduct)} ><MdOutlineDelete className='m-auto' /></button>

                            }
                            <div className="px-4 py-1 text-sm font-medium bg-gray-100">{cartProduct.quantity}</div>
                            <button className="px-3 py-1 text-sm hover:bg-gray-100" onClick={() => handleQuantity(cartProduct, 'plus')}><FiPlus className='m-auto' /></button>
                        </div>
                    </div>

                    <button className='flex items-center font-semibold mt-4 text-sm gap-3'>
                        {/* <FaRegHeart /> */}
                        <span>Wishlist</span>
                        <span onClick={() => handleDeleteItem(cartProduct)} >Delete</span>
                    </button>

                </div>

            </div>

        </div>
    )
}

export default CartItem
