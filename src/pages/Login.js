import React from "react";
import { GoogleLogin } from 'react-google-login';

export class LoginPage extends React.Component{

    responseGoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj);
    }
    render() {
        // using fragments (<>) to be able to hold more than one div
        return(
            <> <div> I Spy <x-search>{this.props.name}</x-search>!</div>
        
            <div>
                <GoogleLogin
                    clientId="920359438731-fu6pqs2e5umadnp574h3kl5p95rhqd1d.apps.googleusercontent.com"
                    buttonText="Login" 
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    
                    /> 
                </div></>
        )
        
    }
} 
