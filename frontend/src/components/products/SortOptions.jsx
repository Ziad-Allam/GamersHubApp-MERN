import React from 'react'
import { useSearchParams } from 'react-router-dom'

function SortOptions() {

    const [searchParams,setSearchParams]=useSearchParams()

    const handleSortChange=(e)=>{
        const sortBy=e.target.value
        searchParams.set("sortBy",sortBy)
        setSearchParams(searchParams)
    }

  return (
    <div>
      <select name="" id="sort" onChange={handleSortChange} value={searchParams.get("sortBy")||""} className='border p-2 rounded-md focus:outline-none'>
        <option value="">Default</option>
        <option value="A">Price: Low to High</option>
        <option value="B">Price: High to Low</option>
        <option value="C">Title: A to Z</option>
        <option value="D">Title: Z to A</option>
      </select>
    </div>
  )
}

export default SortOptions
