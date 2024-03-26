import React, { memo } from 'react'
import { HeaderV2Wrapper } from './style'

const AreaHeaderV2 = memo((props) => {
  const { title, moreName, moreLink} = props
  return (
    <HeaderV2Wrapper>
      <h4 className='title'>{title}</h4>
      {moreName && moreLink && <a href={moreLink}>{moreName}</a>}
    </HeaderV2Wrapper>
  )
})

export default AreaHeaderV2