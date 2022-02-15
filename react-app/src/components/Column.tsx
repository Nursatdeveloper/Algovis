import React, { FC, useState } from 'react'

interface ColumnProps {
    height:number;
    bgColor:string;
    colWidth?:number;
    onClick:(index:number)=>void;
    index:number;
    clickedItemIndex?:number;
}

const Column: FC<ColumnProps> = ({height, bgColor, colWidth, onClick, clickedItemIndex, index}) => {
  const [backColor, setBackColor] = useState<string>(bgColor);
  const [dataIndex, setDataIndex] = useState<number>(index)

  function toggleBgColor(){
    console.log(clickedItemIndex)
    if(clickedItemIndex == -1){
      setBackColor("#0099ff");
      onClick(dataIndex);
    }
  }

  return (
    <div className='column' onClick={toggleBgColor} style={{height:height, backgroundColor:bgColor, width:`${colWidth}%`}}>
            </div>
  )
}

export default Column