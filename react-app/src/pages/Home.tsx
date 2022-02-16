import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className='home__container'>
      <div className='home__welcome'>
        Welcome to algovis
      </div>
      <div className='home__body'>
        <div className='body__right'>
          <div className='gif_container'>
            <div className='gif__wrapper'>
              <Link to="/sort" className='link__text'>
                <div className='sort_gif__container '>
                  <span>Sorting Visualization</span>
                </div>
              </Link>
            </div>
            <div className='gif__wrapper'>
              <Link to="/search" className='link__text'>
                <div className='search_gif__container'>
                  <span>Searching Visualization</span>
                </div>
              </Link>
            </div>

          </div>
        </div>
        <div className='body__left'>

        </div>
      </div>
    </div>
  )
}

export default Home