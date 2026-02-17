import React from 'react'

function PrimaryButton({ children, onclick, disabled = false, hideOn = '', hidden = false }) {

    const hide = {
        mobile: 'hidden lg:block',
        desktop: 'block lg:hidden',
    };

    return (
        <button
            onClick={onclick}
            tybe='button'
            disabled={disabled}
            hidden={hidden}
            className={`bg-amber-600 w-full text-white py-3 text-lg capitalize font-semibold rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed my- ${hide[hideOn] || ''}`}>
            {children}
        </button>
    )
}

export default PrimaryButton
