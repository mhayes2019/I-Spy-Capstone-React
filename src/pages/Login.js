
import {React, useState} from "react";
import { GoogleLogin } from 'react-google-login';
import {Link, useNavigate} from "react-router-dom"


//creating a component for navigation
export const LoginPage = () => {

    let navigate = useNavigate();
    const responseGoogle = (response) => {

    };

    const successLogin = (response) => {
        console.log("success", response.profileObj)
        localStorage.setItem('currentUserName', response.profileObj.name)
        localStorage.setItem('currentUserEmail', response.profileObj.email)
        localStorage.setItem('currentFirstName', response.profileObj.givenName)
        navigate('/');
    }

    return(
    <div>
        <GoogleLogin
            clientId="920359438731-fu6pqs2e5umadnp574h3kl5p95rhqd1d.apps.googleusercontent.com"
            buttonText="Login" 
            onSuccess={successLogin}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            redirectUrl={"https://i-spy-capstone.herokuapp.com"}
                    
        /> 
 </div>
  )
}

export default LoginPage


// import React from "react";
// import { GoogleLogin } from 'react-google-login';
// import {Link} from "react-router-dom"


// export class LoginPage extends React.Component{
//     state = {
//         success: "",
//     }
//     goHome = <Link to="/">Home</Link>
//     responseGoogle=(response)=>{
        
//         console.log(response);
//         console.log(response.profileObj);
//         this.setState({ success: "success" });
//     }

//     render() {
//         if (this.state.success === "success") {
//             console.log("condition hit")

//         }
//         console.log("in the render", this.state.success)

//         // using fragments (<>) to be able to hold more than one div
//         return(
//             <> <div> I Spy <x-search>{this.props.name}</x-search>!</div>
        
//             <div>
//                 <GoogleLogin
//                     clientId="920359438731-fu6pqs2e5umadnp574h3kl5p95rhqd1d.apps.googleusercontent.com"
//                     buttonText="Login" 
//                     onSuccess={this.responseGoogle}
//                     onFailure={this.responseGoogle}
//                     cookiePolicy={'single_host_origin'}
//                     // redirectUrl={'localhost:3000/'}
                    
//                     /> 
//                 </div></>
//         )
        
//     }
// } 
