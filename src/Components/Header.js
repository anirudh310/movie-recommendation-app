// Header.js

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import New from "./New";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Common/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Common/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO, SUPPORTED_LANGUAGES } from "../Common/constants";
import { toggleGptSearchView } from "../Common/gptSlice";
import { changeLanguage } from "../Common/configSlice";


const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showOptions, setShowOptions] = useState(false);

    const user = useSelector((store) => store.user);
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch)



    const handleProfileClick = () => {
        setShowOptions(!showOptions);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                    })
                );
                navigate("/browse")
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe();
    }, []);

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
    };

    const handleLanguageChange = (e) => {
        //console.log(e.target.value);
        dispatch(changeLanguage(e.target.value));
    };


    return (
        <div className=" absolute w-screen px-8 py-4  bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">

            <img className="w-40 mx-auto md:mx-0"
                src={LOGO}
                alt="logo" />

            {user && (
                <div className="flex justify-between mx-auto pt-8  md:flex md:mx-0 md:p-2 ">
                    
                    {showGptSearch && <select
                        className="py-2 px-4 mx-4 mt-2 rounded-lg bg-gray-900 text-white"
                        onChange={handleLanguageChange}
                    >
                        {SUPPORTED_LANGUAGES.map((lang) => (
                            <option key={lang.identifier} value={lang.identifier}>{lang.name}
                            </option>
                        ))}

                    </select>}

                    <button className="py-2 px-4 mx-4 mt-2 rounded-lg bg-white"
                        onClick={handleGptSearchClick}
                    >{showGptSearch ? "Home Page" : "SEARCH"}</button>

                    <img onMouseEnter={handleProfileClick} className="w-12 h-12"
                        alt="usericon"
                        src={user?.photoURL}
                    />


                </div>
            )}

            {showOptions && (<New setShowOptions={setShowOptions} />)}
        </div>
    );
};
export default Header;