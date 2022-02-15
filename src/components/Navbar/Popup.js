import React,{useEffect, useState} from 'react';
import { Navbar } from './Navbar';
import Axios from 'axios'
import "./Navbar.css"


function Popup(props) {
    const[isopen,setisopen] =useState(props.Isopen)
    const [number,setnumber]=useState("")
    const [dogy,setdogy]=useState('')    
    const [bread,setbred]= useState([])   
    
  useEffect(()=>{
    var url= "https://dog.ceo/api/breeds/list"
    fetch(url)
    .then((res)=>res.json())
    .then(data=>{setbred([...data.message])})

  }) 
  
  const [bimage,setbimages]=useState({pic:[]})

  
  //   useEffect(({dogy}, {number})=>{
  //     // const imageByBreed =()=>{
    //  const url="https://dog.ceo/api/breed/"+dogy+"/images/random/"+number;
    // console.log(url)

    // fetch(url)
    // .then((res)=>res.json())
    // .then(data=>{setbimages({pic :data.message})})
    // .then(data=>console.log("data is" + data.message))
    // // })
  // }
  // })

  const handlebtn=()=>{
    // props.handlepopup()
    // imageByBreed(dogy,number)
    const url="https://dog.ceo/api/breed/"+dogy+"/images/random/"+number;
    console.log(url)    
    Axios.get(url)
    .then(res => {
      const persons = res.data.message;
      // console.log(persons)
      setbimages({pic:persons} );          
    })  

  }

    


  const num =[1,2,3,4,5,6,7,8,9,10]
  return(isopen?"":<>
  <div className='popuptop'> 
    <div className='popup'> 
    <form onChange={handlebtn}>   
      <select onChange={(event)=>{setdogy(event.target.value)}} className='option'>          
          {/* {console.log(bread[0])} */}
           {bread.map((b,index)=>{
             return  <option value={b} className='popup-option' key={index}>{b} </option>})}  
                  
      </select> 

      <select className='option' onChange={(event)=>{setnumber(event.target.value)}}>
          {num.map((i,index)=>{
             return  <option value={i}  key={index}>{i} </option>})} 
      </select>   
      </form>       
      <button onClick={handlebtn}  className="option">Get Images</button>
      <button className='closebtn' onClick={props.handlepopup}><h1>X</h1></button>
      {/* <img src={bimage}/> */}
      </div> 

      <div className='prikshit'>
      {bimage.pic.map((ima,index)=>{
        return  (
        <div key={index+1} className='prikshit' onClick={()=>console.log(`${ima}`)} >
            <img key={index}  src={ima} />
          {/* <h1>ima</h1> */}
            
            {/* <h2>{extractBreedName({ima})}</h2> */}
         </div>
        )
         
      })}

      </div>
      
      
      
  </div>
 
  
  </>);
  
}

export default Popup;
