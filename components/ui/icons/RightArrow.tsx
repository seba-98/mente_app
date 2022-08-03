import React, { FC } from 'react'

interface Props{
    color?:string,
    width?:number,
    height?:number,
}

export const RightArrow:FC<Props> = ({color='white', width='50', height='50'}) => {
  return (
    
    <svg width={width} height={height} viewBox="0 0 24 25" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M11.293 17.497L12.707 18.911L19.414 12.204L12.707 5.49701L11.293 6.91101L15.586 11.204H6V13.204H15.586L11.293 17.497Z" fill="#555555"/>
    </svg>

  )
}
