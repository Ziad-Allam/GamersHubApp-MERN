import React from 'react'

function Title(props) {
  return (
    <h1 className='capitalize text-xl md:text-2xl font-semibold py-4'>{props.children}</h1>)
}

export default Title
