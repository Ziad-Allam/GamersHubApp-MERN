import React from 'react'

function SecondaryButton({ children, onclick, disabled = false, hideOn = '', hidden = false }) {
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
            className={`border border-amber-600 w-full text-amber-600 py-3 text-lg font-semibold rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed ${hide[hideOn] || ''}`}>
            {children}
        </button>
    )
}

export default SecondaryButton
