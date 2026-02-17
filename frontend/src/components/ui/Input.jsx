import React from 'react'

function Input({ type, name, placeholder, id, value, onChange }) {
    return (
        <>
            <input className='w-full p-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                type={type}
                name={name}
                placeholder={placeholder}
                id={id}
                value={value}
                onChange={onChange}
            />
        </>
    )
}

export default Input
