import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart, fetchCart } from "../features/cart/cartSlice";

export const useAddToCart = () => {
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth)
    const { cart } = useSelector((state) => state.cart)

    function handleAddToCart(productId, totalStock) {
        let getCartProducts = cart.products || []
        if (!user) {
            toast.error("Please login");
            return;
        }
        if (getCartProducts.length) {
            const indexOfCurrentProduct = getCartProducts.findIndex(product => product.productId === productId)
            if (indexOfCurrentProduct > -1) {
                const getQuantity = getCartProducts[indexOfCurrentProduct].quantity
                if (getQuantity + 1 > totalStock) {
                    toast.error(`Only ${getQuantity} quantity can be added for this product`)
                    return
                }
            }
        }
        dispatch(addToCart({
            userId: user.id,
            productId,
            quantity: 1
        })).then((data) => {
            if (data.payload.success) {
                dispatch(fetchCart(user.id))
                toast.success("Added to cart");

            }
        })
    };

    return { handleAddToCart };
};
