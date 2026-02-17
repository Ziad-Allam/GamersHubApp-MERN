import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { capturePayment } from '../../features/order/orderSlice'
import { PiGameControllerFill } from 'react-icons/pi'

function PaypalReturn() {

    const dispatch = useDispatch()
    const location = useLocation()
    const params = new URLSearchParams(location.search);
    const paymentId = params.get('paymentId')
    const payerId = params.get('PayerID')

    useEffect(() => {
        if (paymentId && payerId) {
            const orderId = JSON.parse(sessionStorage.getItem('orderId'))
            dispatch(capturePayment({
                paymentId, payerId, orderId
            })).then(data => {
                if (data.payload.success) {
                    sessionStorage.removeItem('orderId')
                    window.location.href = '/payment-success'
                }
            })
        }
    }, [paymentId, payerId])

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-amber-600 border-t-transparent"></div>
            <div className='flex items-center gap-1 text-'>
                <span className='font-semibold text-lg lg:text-xl'>G A</span>
                <PiGameControllerFill className='text-amber-600 text-2xl' />
                <span className='font-semibold text-lg lg:text-xl'>E R S</span>
            </div>
        </div>
    )
}

export default PaypalReturn
