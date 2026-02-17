import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWishlist } from '../features/wishlistSlice'
import ProductCard from '../components/products/ProductCard'
import Title from '../components/ui/Title'
import useCheckToken from '../hooks/useCheckToken'
import WishlostLoading from '../components/loading/WishlostLoading'
import Container from '../components/common/Container'

function Wishlist() {

    const dispatch = useDispatch()
    const { wishlist, isLoading, error } = useSelector((state) => state.wishlist)

    useCheckToken(error)

    useEffect(() => {
        dispatch(getWishlist())
    }, [])

    return (
            <Container>
                {wishlist?.products?.length > 0 && <Title>Wishlist</Title>}

                {
                    isLoading ?
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                            {Array.from({ length: 10 }).map((_, i) => (
                                <WishlostLoading key={i} />
                            ))}
                        </div>
                        :
                        wishlist?.products?.length > 0 ?
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                                {wishlist?.products?.map(wishlist =>
                                    <ProductCard key={wishlist?._id} product={wishlist} />
                                )}
                            </div>
                            :
                            <div className='mx-auto w-full lg:w-[800px] flex items-center justify-center'>
                                <img src="https://doukani.com/img/emptywishlist.jpg" alt="empty wishlist" />
                            </div>
                }
            </Container>
    )
}

export default Wishlist
