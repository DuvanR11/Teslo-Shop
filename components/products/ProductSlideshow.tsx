import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { FC } from 'react';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '550px'
}

interface Props {
    images: string[]
}

export const ProductSlideshow: FC<Props> = ({ images }) => {
    return (
        <Slide
            easing='ease'
            duration={ 7000 }
            indicators
        >
            {images.map((image, index)=> {
                const url = `/products/${ image }`
                return (
                <div key={index}>
                <div style={{ ...divStyle, 'backgroundImage': `url(${ url })` }}>
                </div>
                </div>
                )
            })} 
        </Slide>
    )
}