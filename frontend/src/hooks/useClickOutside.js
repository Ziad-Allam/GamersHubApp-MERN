import React, { useEffect, useRef } from 'react'

export let useClickOutside = (handler) => {

    let domNode = useRef()

    const handleClickOutside = (event) => {
        if (domNode.current && !domNode.current.contains(event.target)) {
            handler()
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
                return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    })
    return domNode

}

export default useClickOutside
