import React from 'react'
import Sidebar from './dashboard/Sidebar'
import WhiteBox from '../components/WhiteBox'

export default function Product() {
  return (
    <div className='dashboard faj'>
        <div className='moraba_vasat'>
            <Sidebar/>
            <div className=' faj'>
                <WhiteBox title={"ورودی"}/>
                <WhiteBox title={"برگشتی"}/>
                <WhiteBox title={"جابجایی"}/>
            </div>
        </div>
    </div>
  )
}
