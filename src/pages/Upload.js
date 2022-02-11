import React, { useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types"
import './Upload.css'
// import Header from "./Header"
import {useNavigate} from "react-router-dom"
import axios from 'axios';

export const Upload=({games})=>{
  const[image,setImage]=useState("")
  const[post,setPost]=useState("")
  
  useEffect(()=>{

  const baseurl="http://i-spy-be.herokuapp.com/players/game"
  axios.get(baseurl).then((response)=>{
    setPost(response.data)
  })
},[])
  console.log(post)

  const fileSelectedHandler = event => {
    console.log(event.target.files[0])
    setImage(event.target.files[0])
  }
  console.log(image.name)
  let tryingThis
if (image.name) {
  tryingThis = URL.createObjectURL(image)
}

const friendName = "Melinda"
const characteristic = "Red"
  return(  
         
    <body className="upload-body">   
      <div className="header-wrapper">
        <div className= "challenger">{friendName} has challenged you </div>
      </div>
      <div className="yellow"></div>
        <div className="upload-photo-wrapper">
          <div className="characteristic">I spy with my little eye something that is {characteristic}</div>
          <div className="image-stuff">
          <label>Upload your picture</label>
          <img className='image' src={tryingThis}></img>
          <input type="file" onChange={fileSelectedHandler}></input>
          <button>Send</button>
          </div>
        </div>
    </body> 
   
    ) 
}

export default Upload;
