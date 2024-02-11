import React from 'react';
import flag from '../assets/Flag_of_Bricktobicoke.png';
import '../styles/logo.css';
import '../styles/menubar.css';

function MenuBar() {
  return (
    <div className='menuBar'>
        <img src={flag} alt='flag' className='flag'/>
    </div>
  );
}

export default MenuBar;