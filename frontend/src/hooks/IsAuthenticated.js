import React from 'react'

function IsAuthenticated() {
    if (localStorage.getItem('producerAuthToken')){
        return true;
    }
    else{
        return false;
    }
}

export default IsAuthenticated
