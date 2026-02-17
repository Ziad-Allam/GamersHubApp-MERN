import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createAddress, deleteAddress, updateAddress, fetchAddresses, setDefaultAddress, fetchDefaultAddress } from '../features/address/addressSlice';
import { toast } from 'react-toastify';
import AddressCard from '../components/account/address/AddressCard';
import Title from '../components/ui/Title'
import useCheckToken from '../hooks/useCheckToken';
import { addressFormControls } from '../components/common/config';
import Form from '../components/common/Form';
import AddressLoading from '../components/loading/AddressLoading';

function Address() {

    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)

    const initialState = {
        name: user.firstname || '',
        phoneNo: user.mobile || '',
        fullAddress: '',
        city: '',
        landmark: '',
        buildingNo: '',
        floorNo: '',
        aptNo: '',
    }

    const { addresses, isLoading, error } = useSelector((state) => state.address)

    const [formData, setFormData] = useState(initialState)
    const [editedAddressId, setEditedAddressId] = useState(null)

    useCheckToken(error)

    function handleCreateAddress(event) {
        event.preventDefault()

        if (addresses.length >= 3 && editedAddressId === null) {
            toast.error('You can add max 3 addresses')
            return
        }

        editedAddressId !== null ?
            dispatch(updateAddress({
                userId: user?.id, addressId: editedAddressId, formData
            })).then((data) => {
                if (data?.payload?.success) {
                    toast.success("Address changed successfully")
                    dispatch(fetchAddresses(user?.id))
                    setEditedAddressId(null)
                    setFormData(initialState)
                }
            })
            :
            dispatch(createAddress({ ...formData, userId: user?.id })).then(data => {
                if (data?.payload?.success) {
                    toast.success("Address created successfully")
                    dispatch(fetchAddresses())
                    setFormData(initialState)
                }
                else {
                    toast.error('somthing wrong')
                }
            })
    }

    function handleEdit(currentAddress) {
        console.log(currentAddress);

        setEditedAddressId(currentAddress?._id)
        setFormData({
            ...formData,
            name: currentAddress.name,
            phoneNo: currentAddress.phoneNo,
            fullAddress: currentAddress.fullAddress,
            city: currentAddress.city,
            landmark: currentAddress.landmark,
            buildingNo: currentAddress.buildingNo,
            floorNo: currentAddress.floorNo,
            aptNo: currentAddress.aptNo,

        })
    }

    function handleDeleteAddress(currentAddress) {
        dispatch(deleteAddress({ userId: user?.id, addressId: currentAddress._id })).then(data => {
            if (data?.payload?.success) {
                toast.success("Address deleted successfully")
                dispatch(fetchAddresses(user?.id))
            }
            else {
                toast.error('somthing wrong')
            }
        })
    }

    function handleSetDefaultAddress(addressId) {
        dispatch(setDefaultAddress(addressId)).then(data => {
            if (data?.payload?.success) {
                toast.success(" successfully")
                dispatch(fetchAddresses(user?.id))
                dispatch(fetchDefaultAddress())
            }
            else {
                toast.error('somthing wrong')
            }
        })

    }

    useEffect(() => {
        dispatch(fetchAddresses())
    }, [])

    return (
        <>
            <Title>Addresses</Title>

            <div className='space-y-5'>

                {isLoading ?
                    <div className='space-y-3'>
                        {Array.from({ length: 3 }).map((_, i) =>
                            <AddressLoading />
                        )}
                    </div>
                    :
                    addresses && addresses.length > 0 ? (
                        <div className='grid grid-cols-1 gap-3'>
                            {addresses.map((singleAddressItem) => (
                                <AddressCard
                                    key={singleAddressItem._id}
                                    addressInfo={singleAddressItem}
                                    handleDeleteAddress={handleDeleteAddress}
                                    handleEdit={handleEdit}
                                    handleSetDefaultAddress={handleSetDefaultAddress}
                                />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center col-span-full text-gray-600">
                            No addresses found. Add a new address below.
                        </p>
                    )
                }

                <div>
                    <Title>Add New Address</Title>
                    <div className="bg-white p-2 lg:p-8 rounded-md border mx-auto shadow-lg">
                        <Form
                            formControls={addressFormControls}
                            buttonText={'save address'}
                            formData={formData}
                            setFormData={setFormData}
                            onSubmit={handleCreateAddress}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Address
