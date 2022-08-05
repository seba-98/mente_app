import React, { FC } from 'react'

interface Props{
    color?:string,
    width?:number,
    height?:number,
}

export const Email:FC<Props> = ({color='white', width='50', height='50'}) => {
  return (
    <svg width={width} height={height} className='item--hover' viewBox="0 0 43 38" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M38.7 0H4.3C1.92855 0 0 2.18644 0 4.875V34.125C0 36.8136 1.92855 39 4.3 39H38.7C41.0715 39 43 36.8136 43 34.125V4.875C43 2.18644 41.0715 0 38.7 0ZM38.7 4.875V6.12056L21.5 21.2891L4.3 6.123V4.875H38.7ZM4.3 34.125V12.2947L20.1799 26.2982C20.5669 26.6419 21.0335 26.8125 21.5 26.8125C21.9666 26.8125 22.4331 26.6419 22.8201 26.2982L38.7 12.2947L38.7043 34.125H4.3Z" fill="black"/>
    </svg>

  )
}
