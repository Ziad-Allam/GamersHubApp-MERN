import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchProductDetails, fetchRelatedProducts, fetchRelatedProductsByBrand, resetState } from '../../features/products/productsSlice'
import { useDispatch, useSelector } from 'react-redux'
import ProductPrice from '../../components/productDetails/ProductPrice'
import ProductAvailability from '../../components/productDetails/ProductAvailability'
import AverageRating from '../../components/rating/AverageRating'
import DeliveryOptions from '../../components/productDetails/DeliveryOptions'
import Reviews from '../../components/reviews/Reviews'
import ProductDetailsActionBtns from '../../components/productDetails/ProductDetailsActionBtns'
import ProductImages from '../../components/productDetails/ProductImages'
import ProductDerailsLoading from '../../components/loading/ProductDerailsLoading'
import RelatedProducts from '../../components/productDetails/RelatedProducts'
import ServiceHighlights from '../../components/productDetails/ServiceHighlights'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { fetchReviews } from '../../features/reviews/reviewsSlice'
import Container from '../../components/common/Container'

function ProductDetails() {
    const { id } = useParams()
    console.log(id);
    
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const { productDetails, relatedProductsByCategory, relatedProductsByBrand, isLoading } = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(fetchProductDetails(id))
        return () => {
            dispatch(resetState())
        }
    }, [id, dispatch])

    useEffect(() => {
        if (productDetails) {
            dispatch(fetchRelatedProducts({ productId: productDetails?._id }));
        }
    }, [productDetails]);

    useEffect(() => {
        if (productDetails) {
            dispatch(fetchRelatedProductsByBrand({ productId: productDetails?._id }));
        }
    }, [productDetails]);

    useEffect(() => {
        dispatch(fetchReviews(productDetails?._id))
    }, [productDetails?._id])

    const { cart } = useSelector((state) => state.cart);
    const cartItem = cart.products?.find((item) => item.productId === productDetails?._id);

    return (
        <div>
            <Container>

                {isLoading ?
                    <ProductDerailsLoading />
                    :
                    <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-10">

                        {/* Section 1: Product Image */}
                        <ProductImages image={productDetails?.image?.url} description={productDetails?.description} productId={productDetails?._id} />

                        <div className="lg:col-span-2 flex flex-col gap-6 py-3">

                            {
                                cartItem &&
                                <span className="flex w-fit items-center gap-1 text-sm font-medium text-white bg-green-600 px-2 py-1 rounded-md">
                                    <MdOutlineShoppingCart size={16} />
                                    In Your Cart
                                </span>
                            }
                            {/* Product description */}
                            <p className="text-xl lg:text-2xl font-medium">{productDetails?.description}</p>

                            {/* Brand */}
                            <div onClick={() => navigate(`/shop/${productDetails?.brand?._id}`)} className="text-blue-600 font-semibold uppercase hover:underline cursor-pointer">
                                {productDetails?.brand?.title}
                            </div>

                            <AverageRating />

                            <ProductAvailability totalStock={productDetails?.totalStock} />

                            <ProductPrice price={productDetails?.price} salePrice={productDetails?.salePrice} />

                            <DeliveryOptions />

                            <ProductDetailsActionBtns productDetails={productDetails} />

                        </div>

                        <ServiceHighlights />

                    </div>
                }

            </Container>
            
            <RelatedProducts isLoading={isLoading} relatedProducts={relatedProductsByCategory} title='Products related to this item' />
            <RelatedProducts isLoading={isLoading} relatedProducts={relatedProductsByBrand} title={`${(productDetails?.brand?.title)} products`} />

            <Reviews isLoading={isLoading} />
        </div >
    )
}

export default ProductDetails
