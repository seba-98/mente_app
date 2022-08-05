import React, { FC } from 'react'

interface Props{
    color?:string,
    width?:number,
    height?:number,
}

export const ChatBox:FC<Props> = ({color='white', width='50', height='50'}) => {
  return (
    <svg width={width} height={height} className='item--hover' viewBox="0 0 42 38" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M21 0C9.4206 0 0 6.99855 0 15.6C0 21.2706 3.9858 26.3542 10.5 29.1213V39L21.714 31.1903C32.9637 30.9114 42 24.024 42 15.6C42 6.99855 32.5794 0 21 0ZM21 27.3H20.3007L14.7 31.2V26.4869L13.3539 26.0052C7.707 23.987 4.2 19.9992 4.2 15.6C4.2 9.14745 11.7369 3.9 21 3.9C30.2631 3.9 37.8 9.14745 37.8 15.6C37.8 22.0526 30.2631 27.3 21 27.3Z" fill="black"/>
        <path d="M10.5 9.75H31.5V13.65H10.5V9.75ZM10.5 17.55H25.2V21.45H10.5V17.55Z" fill="black"/>
    </svg>

  )
}