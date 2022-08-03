import React, { FC } from 'react'

interface Props{
    color?:string,
    width?:number,
    height?:number,
}

export const Check:FC<Props> = ({color='white', width='50', height='50'}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 43 38" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M14.3332 27.9045L4.89331 17.2022L0.839844 21.7977L14.3332 37.0955L42.16 5.54774L38.1065 0.95224L14.3332 27.9045Z" fill="black"/>
    </svg>

  )
}
