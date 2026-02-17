import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

function HamburgerIcon({ setOpenNavItems }) {
    return (
        <button onClick={() => { setOpenNavItems(true) }}>
            <RxHamburgerMenu color='white' size={25} />
        </button>
    )
}
export default HamburgerIcon
