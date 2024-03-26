import React, { memo } from 'react'
import { AnchorWrapper } from './style'
import AreaHeaderV2 from '@/components/area-header-v2'
import { hotRadios } from "@/assets/data/local_data";

const Anchor = memo(() => {
  return (
    <AnchorWrapper>
      <AreaHeaderV2 title="热门主播" />
      <div className="anchorList">
        {
          hotRadios.map((item) => {
            return (
              <div className="item" key={item.picUrl}>
                <img src={item.picUrl} alt="" />
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="desc textNowrap">{item.position}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </AnchorWrapper>
  )
})

export default Anchor