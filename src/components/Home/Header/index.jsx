import React from 'react';
import './styles.css';
import { useTheme } from '../../Common/Theme';
const Header = () => {
    const theme= useTheme();
   return(
    <header className='home-header'>
        <h2>Release your Mind</h2>
        <h1>
            <span>"</span>Mindscape<span>"</span>
        </h1>
        <p>
            an awesome place to express oneself <br /> and learn to communicate your thoughts<br/> by writing creatve blogs.
        </p>
    </header>
  )
}

export default Header
