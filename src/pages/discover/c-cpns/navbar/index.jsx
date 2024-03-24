import React, { memo } from 'react'
import { NavLink } from 'react-router-dom';
import { Navwrapper } from './style'
import { discoverMenu } from '@/assets/data/local_data';

const Navbar = memo(() => {
  return (
    <Navwrapper className='wrapper01'>
      {
        discoverMenu.map((item) => {
          return (
            <div className='item' key={item.link}>
              <NavLink to={item.link} >{item.title}</NavLink>
            </div>
          )
        })
      }
    </Navwrapper>
  )
})

export default Navbar