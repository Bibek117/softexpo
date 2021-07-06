import axios from 'axios';
import React from 'react'
import { useHistory, useLocation } from 'react-router';
import { RegisterUser } from '../Controllers/RegisterController';
import { auth, provider } from '../Firebase';

function GuestLogin() {
    const history = useHistory()
    let url = (new URLSearchParams(window.location.search)).get("ref")

    const signin = (e) =>{
        e.preventDefault();
        auth.signInWithPopup(provider)
            .then(result => {
                let userDataInit = {
                    uid:result.user.uid,
                    name:result.user.displayName,
                    profile_pic:result.user.photoURL,
                    email:result.user.email,
                    phone:result.user.phoneNumber,
                    token:result.credential.idToken,
                    provider:result.credential.providerId,
                }

                axios.post('/api/authenticate', userDataInit).then((result)=>{
                    if (result.status==200) {
                        console.log("redirecting....");
                        if(RegisterUser(result)){
                        console.log(url);

                            // history.push(url)
                        }
                    }
                 })

            }).finally(()=>{

            })
            .catch(err=>alert(err))

    }

    return (
        <section id="guestLogin">
            <div className="container">
                <div className="col-md-6 m-auto">
                <div className="d-grid my-5">
                    <h3>Login to write reviews and explore more features</h3>
                    <button className="btn btn-block px-3 my-5 btn-google" onClick={e=>signin(e)}>Login with Google</button>
            </div>
                </div>
            </div>
        </section>
    )
}

export default GuestLogin
