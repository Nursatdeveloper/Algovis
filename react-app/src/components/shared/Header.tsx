import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className="header__container">
        <div className='header__wrapper'>
            <div className='header__name_wrapper'>
                <Link className='header__name' to="/">Algovis</Link>  
            </div>
            <div className='header__item_wrapper hover__underline_animation'>
                <Link to="/sort" className='header__item'>Sort visualization</Link>  
                
            </div>
            <div className='header__item_wrapper hover__underline_animation'>
            <Link to="/search" className='header__item'>Search visualization</Link>  
            </div>
        </div>
    </div>
  )
}

export default Header