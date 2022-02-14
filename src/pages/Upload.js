import React, { useState, useEffect, useCallback } from "react";
import './Upload.css'
import {useLocation, useNavigate} from "react-router-dom"
import axios from 'axios';

export const Upload=({games})=>{
  // state stuff
  const[image, setImage] = useState("")
  const[post, setPost] = useState("")
  const[currentUserId, setCurrentUserId] = useState("")

  const location = useLocation()
  console.log(location.state.gameId)
  let characteristic;
  let game_id;
  let responder;
  const userId = localStorage.getItem('currentUserChallengeId');
  if(location !== undefined){
    game_id = location.state.gameId.game_id
    characteristic = location.state.gameId.characteristic
    responder = location.state.gameId.challenger_name

    console.log({game_id, characteristic, responder})
  }
  
  // before component loads
  useEffect(()=>{

  
  const baseurl=`https://i-spy-be.herokuapp.com/games/${userId}`

  // prob needs async/await to make sure call happens then render page
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

  let imageUrl
  if (image.name) {
    imageUrl = URL.createObjectURL(image)
  }
  console.log({image})
 // send tryingThis as the response
 
 const navigate= useNavigate();
 const goHome = useCallback(() => navigate('/', {replace: true}), [navigate])
  const onSendButtonClick = () => {
    
  console.log("clicked for sending bear")
  const sendImageUrl = `http://i-spy-be.herokuapp.com/games/3/2/image`
  
  const response = {"image": image}
  const uploadImage = async () => {axios.put(response).then((ev )=>{
    console.log(ev)
  })}
  uploadImage()
  // then reroute
  goHome();





  }
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
          <img className='image' alt="uploaded submission"src={imageUrl}></img>
          <input type="file" onChange={fileSelectedHandler}></input>
          <div className="yellow"></div>
          <button className="send-button" onClick={onSendButtonClick}>Send</button>
          </div>
        </div>
    </body> 
   
    ) 
}

export default Upload;
