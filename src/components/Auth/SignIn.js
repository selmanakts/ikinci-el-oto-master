import React from 'react'
import firebase from 'firebase/compat/app'
import {auth} from '../../firebase'
import { Button } from 'reactstrap';

function SignIn() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }  
  return (
    <div>
        <Button style={{width:'170px',height:'50px'}} onClick={signInWithGoogle}>Google ile giriş yap</Button>
    </div>
  )
}

export default SignIn