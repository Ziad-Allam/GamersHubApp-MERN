import React from 'react'
import { useAddToCart } from '../../hooks/useAddToCart';
import PrimaryButton from '../common/buttons/PrimaryButton';
import OutOfStockButton from '../common/buttons/OutOfStockButton';

function ProductDetailsActionBtns({ productDetails }) {

  const { handleAddToCart } = useAddToCart();

  return (
    <>
      <div className='space-y-3'>

        <div className='flex items-center gap-2'>
          {/* disktop - out of stock or add to cart btn */}
          <div className='hidden lg:block w-full'>
            {productDetails?.totalStock === 0 ?
              <OutOfStockButton>Out of Stock</OutOfStockButton>
              :
              <PrimaryButton onclick={() => handleAddToCart(productDetails?._id, productDetails.totalStock)}>
                Add to Cart
              </PrimaryButton>
            }
          </div>
        </div>

      </div>

      {/* mobile - add to cart btn */}
      <div className='fixed bottom-14 left-0 shadow-inner z-30 lg:hidden bg-white w-full p-2'>
        {productDetails?.totalStock === 0 ?
          <OutOfStockButton>Out of Stock</OutOfStockButton>
          :
          <PrimaryButton onclick={() => handleAddToCart(productDetails?._id, productDetails.totalStock)}>
            Add to Cart
          </PrimaryButton>

        }
      </div>
    </>
  )
}

export default ProductDetailsActionBtns
