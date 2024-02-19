import React from 'react'

export default function WhiteBox({title,num}) {
  return (
    <div className="total_box bxshadow">
              <div className="title_bx">{title}</div>
              <div className="inventory">
                <div className="num">{num}</div>
                <div className="num_span">مورد</div>
              </div>
            </div>
  )
}
