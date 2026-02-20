import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineShoppingCart } from "react-icons/md";
import { useAddToCart } from '../../hooks/useAddToCart';
import { getWishlist, wishlistToggle } from '../../features/wishlistSlice';
import { FaHeart } from 'react-icons/fa6';

function ProductCard({ product }) {

  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const { cart } = useSelector((state) => state.cart);
  const cartItem = cart.products?.find((item) => item.productId === product._id);

  const wishlist = useSelector((state) => state.wishlist.wishlist?.products);
  const findWishlist = wishlist?.find((item) => item._id === product._id);

  const { handleAddToCart } = useAddToCart();

  function handleWishlist(productId) {
    dispatch(wishlistToggle({
      userId: user.id,
      productId,
    })).then(() => {
      // Re-fetch the wishlist after toggling
      dispatch(getWishlist(user.id));
    });
  }

  return (
    <div className='w-full rounded-md relative bg-white border'>

      <button onClick={() => { handleWishlist(product?._id) }} className='bg-white hover:text-amber-600 p-2 rounded-lg absolute top-5 right-5 text-lg'>
        <FaHeart className={`text-xl transition ${findWishlist ? 'text-red-500' : 'text-gray-500 hover:text-red-500'}`} />
      </button>

      <Link to={`/productDetails/${product?._id}`} >
        <div className=''>
          <img src={product?.image?.url} alt={product.title} className='w-full object-cover rounded-t-md' />
        </div>

        <div className='p-2 flex flex-grow flex-col gap-2'>
          <div className='leading-5 h-10 overflow-hidden'>
            <p className='font-semibold lg:text-sm'>{product?.description.substring(0, 62)} ...</p>
          </div>

          <div className="flex items-end gap-2">
            {product?.salePrice > 0 ? (
              <>
                <p className="text-base lg:text-xl font-medium text-muted-foreground">
                  ${product?.salePrice}
                </p>
                <p className='line-through text-sm text-gray-500'>
                  ${product?.price}
                </p>
              </>
            ) :
              <p className='font-medium text-base lg:text-xl'>
                ${product?.price}
              </p>
            }
          </div>

        </div>
      </Link>

      <div className='flex items-center justify-between p-2'>

        {
          product.totalStock < 1 ?
            <span className='text-gray-500 text-sm font-semibold'>Out of stock</span>
            :
            product.totalStock <= 5 ?
              <span className='text-yellow-600 text-sm font-semibold'>Low stock</span>
              :
              <span className='text-green-600 text-sm font-semibold'>In stock</span>
        }

        {
          product.totalStock === 0 ?
            <button className="bg-gray-400 rounded-full h-8 w-8 flex items-center justify-center cursor-not-allowed text-white text-sm relative">
              <MdOutlineShoppingCart size={22} />
            </button>
            :
            <button onClick={() => handleAddToCart(product?._id, product.totalStock)} className="bg-amber-600 rounded-full h-8 w-8 flex items-center justify-center text-white text-sm relative">
              {cartItem ? (
                <>
                  <MdOutlineShoppingCart size={22} />
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white font-semibold rounded-full h-4 w-4 flex items-center justify-center">
                    {cartItem.quantity}
                  </span>
                </>
              ) : (
                <MdOutlineShoppingCart size={22} />
              )}
            </button>
        }

      </div>

    </div>

  )
}

export default ProductCard
