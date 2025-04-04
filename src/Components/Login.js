import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Common/validate";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { auth } from "../Common/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Common/userSlice";
import { BG_URL, USERAVATAR } from "../Common/constants";


const Login = () => {
    
    const dispatch=useDispatch();

    const [isSignIn, setisSignIn] = useState(true);

    const [errorMessage, seterrorMessage] = useState(null);
    const name=useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {

        const message = checkValidData(email.current.value, password.current.value);
        seterrorMessage(message);

        if (message) return;

        //sign in sign up logic
        if (!isSignIn) {
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, 
                        photoURL: USERAVATAR,
                      }).then(() => {
                        const {uid,email,displayName,photoURL} = auth.currentUser;
                        dispatch(
                            addUser({
                                uid:uid,
                                email:email,
                                displayName:displayName,
                                photoURL:photoURL,
                            }));
                        
                      }).catch((error) => {
                        seterrorMessage(error.message);
                      });
                    //console.log(user);
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    seterrorMessage(errorCode + "-" + errorMessage);

                });
        }
        else {
            signInWithEmailAndPassword
            (
                auth, 
                email.current.value, 
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMessage(errorCode + "-" + errorMessage);
                });

        }

    };

    const toggleSignIn = () => {

        setisSignIn(!isSignIn);
    };

    return (
        <div >
            <Header />

            <div className="absolute">

                <img className="h-screen object-cover w-screen"
                    src={BG_URL }
                    alt="background">

                </img>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className=" flex flex-col w-full md:w-[30%] absolute bg-black  bg-opacity-80 my-[98px] mx-auto left-0 right-0">
                <h1
                    className="font-bold text-3xl py-4 text-white p-2 mx-16 mb-2 mt-4">
                    {isSignIn ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignIn && (<input type="text" id="name"
                    ref={name}
                    placeholder="Full Name"
                    className=" h-12 p-3 mx-16 my-2 rounded-md border border-white border-1 bg-black bg-opacity-20 text-white">

                </input>)}
                <input type="text" id="email"
                    ref={email}
                    placeholder="Email Address"
                    className=" h-12 p-3 mx-16 my-2 rounded-md border border-white border-1 bg-black bg-opacity-20 text-white">

                </input>
                <input type="password" id="password"
                    ref={password}
                    placeholder="Password"
                    className=" h-12 p-3 mx-16 my-2 rounded-md border border-white border-1 bg-black bg-opacity-20 text-white">

                </input>
                <button
                    className="p-2 mx-16 my-2 bg-red-700 rounded-lg text-white font-semibold"
                    onClick={handleButtonClick}>
                    {isSignIn ? "Sign In" : "Sign Up"}
                </button>

                <p className="text-red-600 text-sm mx-16 p-2">  {errorMessage}</p>


                <h3
                    className="w-1/12 p-1 m-auto text-white">
                    OR
                </h3>
                <button
                    className="p-2 mx-16 my-2 bg-gray-200 font-bold rounded-lg">
                    Use a sign-in code
                </button>
                <button
                    className="w-4/12 p-1 m-auto text-white hover:underline">
                    Forget password?
                </button>
                <div className=" text-white py-2 mx-16 my-2">
                    <input type="checkbox" id="remember_me" className=" h-5 w-5 mr-3 "></input>
                    <label htmlFor="remember_me" className="text-md text-white font-semibold">Remember me</label>
                </div>
                <p className=" text-gray-200 py-2 mx-16 my-2">
                    {isSignIn ? "New to Netflix?" : "Already a User."}
                    <button onClick={toggleSignIn}
                        className="font-bold text-white hover:underline">
                        {isSignIn ? "Sign up now." : "Sign in now."}
                    </button>
                </p>
                <p className="text-sm text-gray-400 mx-16 mt-4 mb-8">This page is protected by Google reCAPTCHA to ensure you're not a bot.<button className="text-blue-600 hover:underline">Learn more.</button> </p>
            </form >
        </div >
    )
}
export default Login;