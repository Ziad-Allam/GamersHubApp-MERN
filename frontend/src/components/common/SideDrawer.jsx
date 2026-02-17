import React from 'react'
import useClickOutside from '../../hooks/useClickOutside'

function SideDrawer({ isOpen, setIsOpen, children }) {

    let domNode = useClickOutside(() => {
        setIsOpen(false)
    })

    return (
        <div className={`fixed z-40 inset-0 lg:hidden bg-black bg-opacity-80 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div ref={domNode} className={`fixed top-0 left-0 w-full max-w-80 h-full bg-gray-100 overflow-y-auto transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {children}
            </div>
        </div>
    )
}

export default SideDrawer
