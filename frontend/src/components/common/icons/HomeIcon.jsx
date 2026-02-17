import React from 'react'
import { IoHomeOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function HomeIcon() {
  return (
    <Link to="/">
      <IoHomeOutline color='white' size={25} />
    </Link>
  )
}
export default HomeIcon