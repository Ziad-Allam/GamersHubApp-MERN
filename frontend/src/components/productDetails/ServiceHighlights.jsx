import React from 'react'
import { BiSupport } from 'react-icons/bi';
import { BsCreditCard } from 'react-icons/bs';
import { GiReturnArrow } from 'react-icons/gi';
import { GrSecure } from 'react-icons/gr';
import { LiaShippingFastSolid } from 'react-icons/lia';

function ServiceHighlights() {

    const services = [
        { icon: <LiaShippingFastSolid />, text: "Free shipping" },
        { icon: <BiSupport />, text: "Support 24/7" },
        { icon: <GrSecure />, text: "Secure Payment" },
        { icon: <GiReturnArrow />, text: "14 Days Returnable" },
        { icon: <BsCreditCard />, text: "All Payment Cards" },
    ];

    return (
        <div className="py-3">
            <div className='border border-gray-300 rounded-md p-4 lg:col-span-1 flex flex-col gap-3'>

            {services.map((service, i) => (
                <div
                key={i}
                className="bg-gray-100 p-2 rounded-md text-sm flex items-center gap-3"
                >
                    {service.icon}
                    <p>{service.text}</p>
                </div>
            ))}
            <p className='text-sm'>Delivered by <span className='font-semibold'>Gamers</span></p>
            <p className='text-sm text-blue-500 hover:underline cursor-pointer'>Terms & Conditions</p>
            <p className='text-sm text-blue-500 hover:underline cursor-pointer'>Return Policy</p>
            <p className='text-sm text-blue-500 hover:underline cursor-pointer'>Report an issue with this product</p>
            </div>
        </div>
    )
}

export default ServiceHighlights
