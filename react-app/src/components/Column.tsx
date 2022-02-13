import React, { FC } from 'react'

interface ColumnProps {
    height:number;
    bgColor:string;
    colWidth?:number;
}

const Column: FC<ColumnProps> = ({height, bgColor, colWidth}) => {
  return (
    <div className='column' style={{height:height, backgroundColor:bgColor, width:colWidth}}>
            </div>
  )
}

export default Column