import React, { useState } from "react";
import { useHistory } from 'react-router-dom'

const userLogin = {
  username : '',
  password : ''
}

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [input, setInput] = useState(userLogin)

  const changeHandler = (e) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <>
       <div>
            <form onSubmit={submitHandler}>
                <h2>Log-in</h2>
                <label> <div>username</div>
                    <input 
                      name= 'username'
                      type = 'text'
                      value = {input.username}
                      onChange = {changeHandler}
                      />
                </label>
                <label> <div>password</div>
                    <input 
                      name= 'password'
                      type = 'text'
                      value = {input.password}
                      onChange = {changeHandler}
                      />
                </label>
                <button>Submit</button>
            </form>
        </div>
    </>
  );
};

export default Login;
