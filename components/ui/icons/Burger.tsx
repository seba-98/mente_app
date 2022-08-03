import React, { FC } from 'react'

interface Props{
    color?:string,
    width?:number,
    height?:number,
}

export const Burger:FC<Props> = ({color='white', width='50', height='50'}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 25 16" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0H25V2.66667H0V0ZM0 6.66667H25V9.33333H0V6.66667ZM0 13.3333H25V16H0V13.3333Z" fill="#414141"/>
    </svg>

  )
}
