import React, { Suspense, memo } from 'react'
import { DiscoverWrapper } from './style'
import { Outlet } from 'react-router-dom'
import Navbar from './c-cpns/navbar'

const Discover = memo(() => {
  return (
    <DiscoverWrapper>
      <div className='top'>
        <Navbar/>
      </div>
      <Suspense fallback=''>
        <Outlet/>
      </Suspense>
    </DiscoverWrapper>
  )
})

export default Discover