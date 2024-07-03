import React from 'react';
import { GridLoader } from 'react-spinners';

const MainSpinner = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
        <GridLoader color='#498FCD' size={40}/>
    </div>
  )
};

export default MainSpinner;