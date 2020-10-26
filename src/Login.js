import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import {auth,provider} from "./firebase"
import { useStateValue } from './StateProvider'
import {actionTypes} from "./reducer"


function Login() {

  const [state,dispatch]=useStateValue();

  const signIn= ()=>{
      auth.signInWithPopup(provider).then(result=>{

        console.log(result)

        dispatch({
          type:actionTypes.SET_USER,
          user:result.user,
        })
        console.log(state)
      }).catch(error=>alert(error.message))
  }
  return (
    <div className="login"> 
      <Button type="submit"  onClick={signIn}>Sign in</Button>
    </div>
  )
}

export default Login
