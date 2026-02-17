import React from 'react'

function Container({ children, className = '' }) {
  return (
    <div
      className={`
        w-full
        mx-auto
        px-2        /* mobile */
        sm:px-6     /* tablets */
        lg:px-8     /* desktop */
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export default Container
