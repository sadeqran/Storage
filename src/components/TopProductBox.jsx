import React from 'react'

export default function TopProductBox({title,imgPath}) {
  return (
    <div className="top_products_bx mb-15">
                <img
                  alt="/"
                  className="img_icon"
                  src={`./assets/images/${imgPath}.png`}
                />

                <div className="title_top_bx">
                  <div>{title}</div>
                  <div className="mark_to">&rsaquo;</div>
                </div>
                
              </div>
  )
}
