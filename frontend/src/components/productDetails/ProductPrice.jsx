import React from 'react'

function ProductPrice({ price, salePrice }) {
    return (
        <div className='flex flex-col gap-2'>
            {
                salePrice ?
                    <>
                        <div className='flex items-center gap-2'>

                            <div className='flex items-center gap-4'>
                                Price:
                                <span className='text-3xl font-semibold'>${salePrice}</span>
                            </div>
                            <span className='line-through text-gray-500 text-lg'>{price}</span>
                        </div>
                        <div className='flex items-center gap-4'>
                            Save:
                            <div className='font-medium'>
                                ${price - salePrice}
                            </div>
                            <span className='text-xs text-amber-600 font-medium rounded-md'>{Math.floor(((price - salePrice) / price) * 100)}% off</span>
                        </div>
                    </>
                    :
                    <div className='flex items-center gap-4'>
                        Price:
                        <span className='text-3xl font-semibold'>${price}</span>
                    </div>
            }
        </div>
    )
}

export default ProductPrice
