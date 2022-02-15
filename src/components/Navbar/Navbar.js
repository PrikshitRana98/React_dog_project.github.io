import React, { useState } from 'react';
import '../Navbar/Navbar.css'
import Popup from './Popup';

// import popup from './Popup';
// import { useState } from 'react/cjs/react.production.min';

export const Navbar = (props) => {
  const [Isopen,setisopen]=useState(false)  

  function handlesearch(evv){
    console.log(evv.target.searchvalue.value)
    props.parentCallback(evv.target.searchvalue.value);
    evv.preventDefault()
    
  }
 
  function handlepopup(e){
    e.preventDefault();        
    return setisopen((prev)=>prev=!prev)
  }

  return <div className='navbar'>
    <h1 className='navbar-heading'> <i><b>My Dog's</b></i></h1>

    <form className='search-form' onSubmit={handlesearch} >
      <input type="text" name='searchvalue'  placeholder='Search Dog' />     
    </form>

    <button className='random-button'onClick={handlepopup}>Custom Search</button>
    
    {Isopen? <Popup handlepopup={handlepopup} />:""}
    

  </div>;
};
