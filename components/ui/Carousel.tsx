import React, { useEffect, useState } from 'react'
import { Testimonio2, Testimonio3, Testimonio, Testimonio4 } from './icons';

export const Carousel = () => {

    const images = [
        <Testimonio  />,
        <Testimonio2  />,
        <Testimonio3  />,
        <Testimonio4  />,
    ]

    
    
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    
    
    const selectedNewImage=(index:number, images:any[], next=true )=>{
        const condition = next ? selectedIndex < images.length-1 : selectedIndex > 0;
        const nextIndex = next ? (condition ? selectedIndex + 1 : 0)
        : condition ? selectedIndex - 1 : images.length-1
        
        setSelectedIndex(nextIndex);
        setSelectedImage(images[nextIndex]);
    }
    
    
    const previous=()=> selectedNewImage(selectedIndex, images, false);
    const next=()=>selectedNewImage(selectedIndex, images);
    
    
    const circularBtn=(index:number)=>{
        setSelectedIndex(index);
        setSelectedImage(images[index]);
    }

   
    return (
        <>
        
        <div style={{width:'100%', display:'flex', zIndex:0}} >
            {
                (selectedImage)
            }
        
        </div>
        <div className="side__controls">
            <button className='carousel__prev' onClick={previous}> {'<'} </button>
            <button className='carousel__next' onClick={next}> {'>'}</button>
        </div>
        <div className='bottom__controls'>
            <button className={`carousel__buttons ${ selectedIndex === 0 && 'active--btn'}`} onClick={()=>circularBtn(0)}></button>
            <button className={`carousel__buttons ${selectedIndex === 1 && 'active--btn'}`} onClick={()=>circularBtn(1)}></button>
            <button className={`carousel__buttons ${selectedIndex === 2 && 'active--btn'}`} onClick={()=>circularBtn(2)}></button>
            <button className={`carousel__buttons ${selectedIndex === 3 && 'active--btn'}`} onClick={()=>circularBtn(3)}></button>
        </div>
        </>
    )
}

