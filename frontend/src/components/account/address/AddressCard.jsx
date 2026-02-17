import React from 'react'
import { FaRegUser, FaMapPin } from 'react-icons/fa';
import { IoHomeOutline, IoLocationOutline } from 'react-icons/io5';
import { BsThreeDots } from "react-icons/bs";
import { useState } from 'react';

function AddressCard({ addressInfo, handleDeleteAddress, handleEdit, handleSetDefaultAddress }) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={`${addressInfo?.isDefault ? "border-orange-600 " : "border-gray-200"} bg-white border-2  rounded-md p-6 shadow-sm transition duration-200 space-y-3 text-sm text-gray-800`}>
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <div className='bg-gray-100 p-2 rounded-md'>
          <IoLocationOutline size={30} />
        </div>
        <h3 className="text-xl font-semibold">Home</h3>
      </div>

      <div className="text-gray-700 space-y-1">
        <div className='flex items-center gap-2'>
          <FaMapPin size={15} />
          <p className='truncate'>{`${addressInfo.fullAddress}, ${addressInfo.city} Governorate - Egypt / ${addressInfo.landmark}`}</p>
        </div>
        <div className='flex items-center gap-2'>
          <IoHomeOutline size={15} />
          <p>{`Bul ${addressInfo.buildingNo}, Flo ${addressInfo.floorNo}, Apt ${addressInfo.aptNo}`}</p>
        </div>
      </div>

      <div className='flex items-center justify-between border-t-2 pt-3'>
        <div className='flex items-center gap-2'>

          <FaRegUser size={15} />
          <div className='flex items-center gap-3 text-gray-600'>
            <p className="text-sm capitalize font-semibold">{addressInfo.name}</p>
            <p className='text-sm font-semibold'>+20-{addressInfo.phoneNo}</p>
          </div>
        </div>
        <div className='lg:flex lg:items-center lg:gap-5 hidden'>
          <button onClick={() => { handleEdit(addressInfo) }} className="text-sm hover:underline">Edit</button>
          <button onClick={() => handleDeleteAddress(addressInfo)} className="text-sm hover:underline">Delete</button>
          {!addressInfo?.isDefault &&
            <button onClick={() => {
              handleSetDefaultAddress({ addressId: addressInfo._id })
            }}>
              Set as Default
            </button>
          }

        </div>

        <div className="relative lg:hidden">
          <button
            onClick={() => setOpenMenu(prev => !prev)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <BsThreeDots size={18} />
          </button>

          {openMenu && (
            <div className="absolute bottom-full right-0 mb-2 w-40 bg-white border rounded-lg shadow-lg z-20 overflow-hidden">

              <button
                onClick={() => {
                  handleEdit(addressInfo);
                  setOpenMenu(false);
                }}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                Edit
              </button>

              <button
                onClick={() => {
                  handleDeleteAddress(addressInfo);
                  setOpenMenu(false);
                }}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                Delete
              </button>

              {!addressInfo?.isDefault && (
                <button
                  onClick={() => {
                    handleSetDefaultAddress({ addressId: addressInfo._id });
                    setOpenMenu(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Set as Default
                </button>
              )}
            </div>
          )}
        </div>


      </div>

    </div>
  )
}

export default AddressCard
