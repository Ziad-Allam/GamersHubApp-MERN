import React from 'react'
import { FaHeart } from 'react-icons/fa6';
import useWishlistToggle from '../../hooks/useWishlistToggle';
import { useSelector } from 'react-redux';

function ProductImages({ image, description, productId }) {

    const wishlist = useSelector((state) => state.wishlist.wishlist?.products);
    const findWishlist = wishlist?.find((item) => item._id === productId);

    const { handleWishlist } = useWishlistToggle();

    return (
        <div className="lg:col-span-2 w-full relative py-3">

            <button
                onClick={() => { handleWishlist(productId) }}
                className="absolute top-8 right-4 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition"
                aria-label="Add to wishlist"
            >
                <FaHeart
                    className={`text-xl transition ${findWishlist ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                        }`}
                />
            </button>

            <img
                src={image}
                alt={description || 'Product Image'}
                className="w-full object-cover rounded-lg shadow-lg"
            />
        </div>
    )
}

export default ProductImages
