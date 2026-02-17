import React, { useState } from 'react'
import { FaMapPin, FaRegUser } from 'react-icons/fa';
import { IoHomeOutline } from 'react-icons/io5';
import { IoIosArrowForward } from "react-icons/io";
import Address from '../../../pages/Address';
import DefaultAddressLoading from '../../loading/DefaultAddressLoading';

function DefaultAddressCard({ defaultAddress, isLoading }) {

    const [openNavItems, setOpenNavItems] = useState(false)

    return (
        <div className='py-3'>

            <div className='p-2 lg:p-4 bg-white rounded-md shadow-lg border border-gray-200'>

                <div className='flex items-center justify-between'>
                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">Deliver to</h2>
                    <button onClick={() => { setOpenNavItems(true) }}>
                        <IoIosArrowForward color='gray' size={25} />
                    </button>
                </div>

                {
                    isLoading ?
                        <DefaultAddressLoading />
                        :
                        <div className="bg-white border border-gray-300 rounded-md p-4 transition duration-200 space-y-3 text-gray-800">
                            <div className="text-gray-700 space-y-1">
                                <div className='flex items-center gap-2'>
                                    <FaMapPin size={15} />
                                    <p className='truncate text-base font-semibold capitalize text-gray-600'>{`${defaultAddress?.fullAddress}, ${defaultAddress?.city} Governorate - Egypt / ${defaultAddress?.landmark}`}</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <IoHomeOutline size={15} />
                                    <p>{`Bul ${defaultAddress?.buildingNo}, Flo ${defaultAddress?.floorNo}, Apt ${defaultAddress?.aptNo}`}</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-2 border-t-2 pt-3'>
                                <FaRegUser size={15} />
                                <div className='flex items-center gap-3 text-gray-600 '>
                                    <p className="text-sm capitalize font-semibold">{defaultAddress?.name}</p>
                                    <p className='text-sm font-semibold'>+20-{defaultAddress?.phoneNo}</p>
                                </div>
                            </div>

                        </div>
                }

            </div>

            {
                openNavItems &&
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-2">
                    <div className="bg-white lg:w-1/2 rounded-md p-3 sm:p-6 space-y-4 max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold">Select Address</h3>
                            <button
                                onClick={() => { setOpenNavItems(false) }}
                                className="text-gray-500 hover:text-gray-700 text-xl"
                                aria-label="Close modal"
                            >
                                ✕
                            </button>
                        </div>

                        <Address />


                    </div>
                </div>
            }

        </div>

    )
}

export default DefaultAddressCard
