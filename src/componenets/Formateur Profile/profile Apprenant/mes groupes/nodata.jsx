import React from 'react'

function NoData() {
  return (
    <div className=' w-full h-full flex flex-col justify-center items-center '>
        <svg className="w-[100px] h-[100px] text-blue-950 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
</svg>

        <p className=' text-3xl'>No Data Available</p></div>
  )
}
export default NoData