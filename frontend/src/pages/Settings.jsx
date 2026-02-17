import React from 'react'
import Title from '../components/ui/Title'

function Settings() {
  return (
    <>
      <Title>settings</Title>

      <div className='space-y-6'>

        <div className='bg-white p-8 space-y-4 rounded-xl'>
          <h3 className='font-semibold'>Change Password</h3>
          <div className='flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-center'>
            <input
              className="border px-3 py-2 rounded-md bg-gray-50 pointer-events-none select-none cursor-default"
              type="password"
              name="password"
              placeholder="**********"
              readOnly
            />
            <button className='bg-blue-600 px-8 py-2 text-white font-medium rounded-md'>Change Password</button>
          </div>
        </div>

        <div className='bg-white p-8 space-y-4 rounded-xl'>
          <h3 className='font-semibold'>Account Deletion</h3>
          <button className='text-red-500 hover:underline hover:underline-offset-8'>Delete your account</button>
        </div>
      </div>
    </>
  )
}

export default Settings
