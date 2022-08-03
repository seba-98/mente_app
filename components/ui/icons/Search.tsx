import React, { FC } from 'react'

interface Props{
    color?:string,
    width?:number,
    height?:number,
}

export const Search:FC<Props> = ({color='#414141', width='50', height='50'}) => {
  return (
    <svg width={width} height={width}  style={{paddingBottom:'5px'}} viewBox="0 0 25 16"  xmlns="http://www.w3.org/2000/svg">
    <path  d="M10 18C11.846 18 13.543 17.365 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.365 13.543 18 11.846 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z" fill={color}/>
    <path d="M11.4118 8.58596C11.7908 8.96596 11.9998 9.46796 11.9998 9.99996H13.9998C13.9998 8.93496 13.5838 7.93096 12.8258 7.17196C11.3118 5.65996 8.68683 5.65996 7.17383 7.17196L8.58583 8.58796C9.34583 7.82996 10.6558 7.83196 11.4118 8.58596Z" fill={color}/>
    </svg>

  )
}
