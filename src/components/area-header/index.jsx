import React, { memo } from 'react'
import { AreaHeaderWrapper } from './style'

const AreaHeader = memo((props) => {
  const { title, keywords, moreName = '更多', link} = props
  
  return (
    <AreaHeaderWrapper className='sprite_02'>
      <div className="left">
        <h4 className="title">{title}</h4>
        <div className='keywords'>
            {
              keywords?.map((item) => {
                return (
                  <div className="item" key={item}>
                    <span className='link'>{item}</span>
                    <span className='divider'>|</span>
                  </div>
                )
              })
            }
        </div>
      </div>
      <div className="right">
        <a href={link} className="more">{moreName}</a>
        <span className='icon sprite_02'></span>
      </div>
    </AreaHeaderWrapper>
  )
})

export default AreaHeader