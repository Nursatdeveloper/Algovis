import React, { useEffect, useRef, useState } from 'react'
import './Header.css'
import SubHeader from './SubHeader'

const Header = () => {
    const [subHeaderProps, setSubHeaderProps] = useState({
        show:false,
        marginTop:0
    });

    const [algorithmType, setAlgorithmType] = useState<string>('');
    const [range, setRange] = useState<number>(0);


    function toggleSortingSubheader(){
        if(subHeaderProps.show){
            setSubHeaderProps({
                show: false,
                marginTop:0
            })
        }else {
            setSubHeaderProps({
                show: true,
                marginTop:60
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
            {algorithmType !== '' ? <div>{algorithmType}</div> : null }
            {range != 0 ? <div>{range}</div> : null}
        </div>
        <SubHeader 
            setAlgorithmType={setAlgorithmType}
            setRange={setRange}
            marginTop={subHeaderProps.marginTop}
            show={subHeaderProps.show}
        />
    </div>
    
  )
}

export default Header