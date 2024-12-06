import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.init";
import { useState } from "react";


const SignUp = () => {


    const [success, setSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleSignUp = e =>{
        e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        setErrorMessage('')
        setSuccess(false)

        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result.user)
            setSuccess(true)
        })
        .catch(error => {
            console.log('ERROR', error.message)
            setErrorMessage(error.message)
            setSuccess(false)
        })
    }

  return (
    
        <div className="card bg-base-100 mx-auto my-5 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-3xl font-bold">Login now!</h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            {
                errorMessage && <p className="text-red-600">{errorMessage}</p>
            }
            {
                success && <p className="text-green-600">{"Sign Up Successfull"}</p>
            }
          </form>
        </div>
      
  );
};

export default SignUp;
