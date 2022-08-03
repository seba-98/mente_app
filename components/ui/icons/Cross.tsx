import React, { FC } from 'react'

interface Props{
    color?:string,
    width?:number,
    height?:number,
}

export const Cross:FC<Props> = ({color='white', width='50', height='50'}) => {
  return (
  
    <svg width={width} height={height} viewBox="0 0 23 20" fill={color} xmlns="http://www.w3.org/2000/svg">
  <path d="M19.3855 0L11.0763 7.4235L2.76908 0L0 2.4745L8.30725 9.898L0 17.3215L2.76908 19.796L11.0763 12.3725L19.3855 19.796L22.1546 17.3215L13.8474 9.898L22.1546 2.4745L19.3855 0Z" fill="#414141"/>
  </svg>
  )
}
