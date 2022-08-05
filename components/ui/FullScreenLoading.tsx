import React, { FC } from 'react'
import shimmer from '../../styles/components/shimer.module.scss'
import { MainLayout } from '../layouts/MainLayout';


interface Props{
    quantity?:number
}

export const FullScreenLoading:FC<Props> = ({quantity=10}) => {

    const items=[...Array(quantity)];

  return (
    <MainLayout title='Loading...' descripcion='Page loading'>
        <div  
        style={{display:'flex', flexDirection:'row', justifyContent: 'space-around' , alignItems:'center', flexWrap:'wrap'}}
        >
            {
                items.map((i, idx)=>(
                    <div className={shimmer.shimmer}  key={idx}>
                        <div className={shimmer.div1}></div>
                        <div className={shimmer.div2}></div>
                    </div>
                ))
            }
        </div>
    </MainLayout>
  )
}
