import React, { FC, useEffect, useRef, useState } from 'react'
import SortingParam from '../types/SortingParam';
import './Header.css'
import SubHeader from './SubHeader'

interface HeaderProps{
    sortParam:(item:SortingParam) => void;
    startSorting:(start:boolean) => void;
}

const Header: FC<HeaderProps> = ({sortParam, startSorting, children}) => {
    const [subHeaderProps, setSubHeaderProps] = useState({
        show:false,
        marginTop:0
    });

    const [algorithmType, setAlgorithmType] = useState<string>('');
    const [range, setRange] = useState<number>(0);

    useEffect(()=> {
        if(algorithmType != '' && range != 0){
            let param:SortingParam = {algorithm:algorithmType, range:range}
            sortParam(param)
        }
        else if (algorithmType == '' && range != 0){
            let param:SortingParam = {algorithm:'', range:range}
            sortParam(param)
        }
    }, [algorithmType, range])




    function toggleSortingSubheader(){
        if(subHeaderProps.show){
            setSubHeaderProps({
                show: false,
                marginTop:0
            })
        }else {
            setSubHeaderProps({
                show: true,
                marginTop:53
            })
        }

    }

  return (
    <div className="header__container">
        <div className='header__wrapper'>
            <div className='header__name_wrapper'>
                <span className='header__name'>
                    Algovis
                </span>
            </div>
            <div className='header__item_wrapper hover__underline_animation'>
                <span onClick={()=>toggleSortingSubheader()}>Sorting visualization</span>
            </div>
        </div>
        <SubHeader 
            setStartSorting={startSorting}
            setAlgorithmType={setAlgorithmType}
            setRange={setRange}
            marginTop={subHeaderProps.marginTop}
        />
    </div>
    
  )
}

export default Header