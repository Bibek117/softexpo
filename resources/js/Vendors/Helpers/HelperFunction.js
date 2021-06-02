import axios from '../../axios';
import React from 'react'

async function getCompanydetails() {

    const data = await axios.get("/oauth/clients").then((response) => {
        return response.data }).catch((err)=>{
            alert(err.message);
        })
    return data;

}
function getCurrentVendorId(){

    const token =  localStorage.getItem('access_token');
    return token;
}

function toggleProBanner() {
    return document.querySelector('.proBanner').classList.toggle("hide");
  }

export  {getCompanydetails,getCurrentVendorId,toggleProBanner}
