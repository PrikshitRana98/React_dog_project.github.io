import  Axios  from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import "./Home.css"
import { Navbar } from './Navbar/Navbar';

export default function Home() {
    const [randdog,setranddog]=useState([])
    const [Sdog,setSdog] =useState({pic:[]})
    const[name,setname]=useState("")
    const[showdog,setshowdog]=useState(true)

    useEffect(()=>{
      fetch('https://dog.ceo/api/breeds/image/random/20')
  
      .then((res)=>res.json())
      .then(data=>setranddog([...data.message]))
    },[])

    

    function extractBreedName(data){      
      
      let dd=data.ima.replace("https://images.dog.ceo/breeds/","")
      return dd.split("/")[0]
                 
    }
    function handleNav(Navdata){ 
      console.log(Navdata)     
        // setSdog({name:Navdata})  
         
        var url = "https://dog.ceo/api/breed/"+Navdata+"/images/random/10"
        console.log(url)
        Axios.get(url)
        .then(res => {
          const persons = res.data.message;
          // console.log(persons)
          setSdog({pic:persons} );          
        })       
        setshowdog((prev)=>prev!=prev)  
    }
  //   




  return <div className='home'> 
    <Navbar parentCallback={handleNav} />     
      
      {showdog===true?(randdog.map((ima,index)=>{
        return  (
        <div key={index+1} onClick={()=>console.log(`${ima}`)} >
            <img key={index} className='random-dog-image' src={ima} />
          {/* <h1>ima</h1> */}
            
            <h2>{extractBreedName({ima})}</h2>
         </div>
        )
         
      })):(Sdog.pic.map((ima,index)=>{
        return  (
        <div key={index+1} onClick={()=>console.log(`${ima}`)} >
            <img key={index} className='random-dog-image' src={ima} />
          {/* <h1>ima</h1> */}
            
            <h2>{extractBreedName({ima})}</h2>
         </div>
        )
         
      }))}     

  </div>;
}
{/* <div style={{display:"flex"}}></div> */}