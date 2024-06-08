import React from 'react';
import{Logo} from '../assets';
import { Footer } from '../containers';
import { AuthButtonWithProvider } from '../components';

// importing GoogleAuth,GithubAuth from fa6 of react icons
import { FaGoogle , FaGithub } from "react-icons/fa6";

const Authentication = () => {
  return (
    <div className='auth-section'>
        {/* top sectiom */}
        <img src={Logo} className="w-20 h-auto object-contain" alt="" />
        {/* Main Secion */}
        <div className='w-full flex flex-1 flex-col items-center justify-center gap-6'>
            <h1 className="text-3xl lg:text-4xl text-blue-500">Welcome to Resume Builder</h1>
            <p className="text-base text-gray-600">The fastest way to create resume</p>
            <h2 className="text-2xl text-gray-600">Authenticate</h2>

            <div className="w-full lg:w-96 rounded-md p-2 flex flex-col items-center justify-start gap-6">
                <AuthButtonWithProvider Icon={FaGoogle} label={"Signin with Google"} provider={"GoogleAuthProvider"} />
                <AuthButtonWithProvider Icon={FaGithub} label={"Signin with GitHub"} provider={"GitHubAuthProvider"} />
            </div>
        </div>
        
        {/* footer Section */}
        <Footer/>
    
    </div>

  );
  
};

export default Authentication;