import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrdersByUser } from '../../features/order/orderSlice'
import OrderCard from '../../components/account/order/OrderCard'
import Title from '../../components/ui/Title'
import useCheckToken from '../../hooks/useCheckToken'
import OrdersLoading from '../../components/loading/OrdersLoading'

function Orders() {

  const dispatch = useDispatch()
  const { orders, isLoading, error } = useSelector((state) => state.order)

  useCheckToken(error)

  useEffect(() => {
    dispatch(fetchOrdersByUser())
  }, [dispatch])

  return (
    <>
      <Title>Orders</Title>

      <div className='grid gap-6'>

        {isLoading ? (
          <OrdersLoading />
        ) :
          orders && orders.length > 0 ?
            orders.map((orderData) => {
              return (
                <OrderCard key={orderData?._id} orderData={orderData} />
              )
            })
            :
            <div>
              <h2 className='text-lg font-medium rounded-lg shadow-md px-6 py-6 bg-white my-8'>It looks like you haven't placed any order before.</h2>
            </div>
        }
      </div>
    </>
  )
}

export default Orders
