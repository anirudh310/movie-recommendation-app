import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../Common/firebase";
import { useNavigate } from "react-router-dom";
import { FaPencilAlt, FaUser, FaQuestionCircle } from "react-icons/fa";
import { IoMdSwap } from "react-icons/io";

const New = ({ setShowOptions }) => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        setShowOptions(false);
    };

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            navigate("/error");
        });
    };

    const handleMouseLeave = () => {
        setShowOptions(false);
    };

    return (
        <div onMouseLeave={handleMouseLeave} className='flex flex-col absolute bg-black w-52 h-54 p-4 mr-12 top-20 text-white ml-auto z-50 right-4'>
            <button 
                onClick={() => handleNavigation("/manage-profile")}
                className='flex items-center space-x-2 m-2 hover:underline'
            >
                <FaPencilAlt />
                <span className='p-1'>Manage Profiles</span>
            </button>

            <button 
                onClick={() => handleNavigation("/transfer-profile")}
                className="flex items-center space-x-2 m-2 hover:underline"
            >
                <IoMdSwap />
                <span className='p-1'>Transfer Profile</span>
            </button>

            <button 
                onClick={() => handleNavigation("/account")}
                className="flex items-center space-x-2 m-2 hover:underline"
            >
                <FaUser />
                <span className='p-1'>Account</span>
            </button>

            <button className="flex items-center space-x-2 m-2 hover:underline">
                <FaQuestionCircle />
                <span className='p-1'>Help Centre</span>
            </button>
            <button 
                onClick={handleSignOut}
                className="font-bold mt-2 pt-2 border-t border-gray-700"
            >
                Sign Out
            </button>
        </div>
    );
};

export default New;