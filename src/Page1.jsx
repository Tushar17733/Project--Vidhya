import React from 'react'
import SignUp from './SignUp'
import ImageSlider from './ImageSlider'
import './style.css'


export default function Page1() {
    return (
        <div className='page1'>
            <ImageSlider />
            <SignUp />
        </div>
    )
}
