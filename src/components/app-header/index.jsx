import React, { memo } from 'react'
import { NavLink } from "react-router-dom";
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'
import header_title from '@/assets/data/header_titles.json'

const AppHeader = memo(() => {

  function showItem(item) {
    if (item.type === 'path') {
      return (
        <NavLink
          to={item.link}
        >
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} rel="noreferrer" target="_blank">
          {item.title}
        </a>
      )
    }
  }
  return (
    <HeaderWrapper>
      <div className='content wrapper01'>
        <HeaderLeft>
          <h1 className='logo sprite_01'>
            <a href="/">网易云音乐</a>
          </h1>
          <ul className='list'>
            {
              header_title.map((item) => {
                return (
                  <li className='item' key={item.title}>
                    {showItem(item)}
                  </li>
                )
              })
            }
          </ul>
        </HeaderLeft>
        <HeaderRight>
        <Input className='search' placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
        <span className='author'>创作者中心</span>
        <span className='login'>登录</span>
        </HeaderRight>
      </div>
      <div className='divider'></div>
    </HeaderWrapper>
  )
})

export default AppHeader