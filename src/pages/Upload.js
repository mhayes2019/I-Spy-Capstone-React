import React, { useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types"
import './Upload.css'
// import Header from "./Header"
import {useLocation, Link} from "react-router-dom"
import axios from 'axios';

export const Upload=({games})=>{
  // state stuff
  const[image,setImage] = useState("")
  const[post,setPost] = useState("")
  const[currentUserId, setCurrentUserId] = useState("")
  // const[gameId, setGameId] = useState("")
  // const[gameQuestion, setGameQuestion] = useState("")

  // constants and stuff to find current user
  const location = useLocation()
  console.log(location.state.gameId)
  let characteristic;
  let game_id;
  let responder;
  if(location !== undefined){
    game_id = location.state.gameId.game_id
    characteristic = location.state.gameId.characteristic
    responder = location.state.gameId.challenger_name

    console.log({game_id, characteristic, responder})
  }
 

  // before component loads
  useEffect(()=>{
  const baseurl="http://i-spy-be.herokuapp.com/games/2"
  axios.get(baseurl).then((response)=>{
    setPost(response.data)
  })
  const challengers = games[0]

  if(challengers !== undefined){
    const challengerArrays = challengers.challenger

    for(let i=0; i<challengerArrays.length; i++){
      const whatIsThis = challengerArrays[i];
      const challenger = whatIsThis.challenger_name
      const id = whatIsThis.challenger_id

      if (challenger === currentFirstName) {
        console.log("yes it worked")

        setCurrentUserId(id)
      }
      
    }
  }
  },[])
  
  // pull values from local storage
  const currentUserName = localStorage.getItem('currentUserName');
  const currentUserEmail = localStorage.getItem('currentUserEmail');
  const currentFirstName = localStorage.getItem('currentFirstName');

  console.log(currentUserId)

  const fileSelectedHandler = event => {
    console.log(event.target.files[0])
    setImage(event.target.files[0])
  }

  let tryingThis
  if (image.name) {
    tryingThis = URL.createObjectURL(image)
  }
  console.log({image})
 // send tryingThis as the response
 
  
  return(  
    <body className="upload-body">   
      <div className="header-wrapper">
        <div className= "challenger">{responder} has challenged you </div>
      </div>
      <div className="yellow"></div>
        <div className="upload-photo-wrapper">
          <div className="characteristic">I spy with my little eye something that is {characteristic}</div>
          <div className="yellow"></div>
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
