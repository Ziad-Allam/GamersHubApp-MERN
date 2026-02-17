import React from 'react'
import { RiUser3Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

function UserIcon() {
    return (
        <Link to="/login" className="flex items-center gap-1">
            <RiUser3Line color='white' size={24}/>
        </Link>
    )
}

export default UserIcon
