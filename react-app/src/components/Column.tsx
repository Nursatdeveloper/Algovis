import React, { FC } from 'react'

interface ColumnProps {
    height:number;
    bgColor:string;
}

const Column: FC<ColumnProps> = ({height, bgColor}) => {
  return (
    <div className='column' style={{height:height, backgroundColor:bgColor}}>
            </div>
  )
}

export default Column