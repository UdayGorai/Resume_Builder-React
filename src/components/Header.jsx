import React from 'react';
import useUser from '../hooks/useUser';
import { Link } from 'react-router-dom';
import { Logo } from '../assets';
import { AnimatePresence, motion } from "framer-motion";
import { GridLoader, SquareLoader } from 'react-spinners';

const Header = () => {
    const {data , isLoading , isError } = useUser();
    return (
        <header className=' w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0'>
            {/* logo */}
            <Link to={"/"}>
                <div className="flex items-center justify-center gap-3 py-3">
                    <img src={Logo} className="w-16 h-auto object-contain whitespace-norap" alt="" />
                    <p>Resumo</p>
                </div>
            </Link>

            {/* input */}
            <div className=' flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-300'>
                <input type="text" placeholder='Search Here...' className=' flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none'/>
            </div>

            {/* profile section */}
            <AnimatePresence>
                {isLoading ? (
                    <SquareLoader color='#498FCD' size={40}/> 
                ): (
                    <React.Fragment>
                        {data ? (
                            <motion.div >
                                {data ?.photoURL ? (
                                    <div className=' w-12 h-12 rounded-md relative flex items-center justify-between'>
                                        <img src={data ?.photoURL} className='w-full h-full object-cover rounded-md' referrerPolicy='no-referrer' alt="" />
                                    </div>
                                ) : (
                                    <div className=' w-12 h-12 rounded-md relative flex items-center justify-between bg-blue-500 shadow-md'>
                                    </div>
                                )}
                            </motion.div>
                        ) : (
                            <Link to={"/auth"}>
                                <motion.button>
                                    Login
                                </motion.button>
                            </Link>
                        )}
                    </React.Fragment>

                )}
            </AnimatePresence>

        </header>
    );
};

export default Header;