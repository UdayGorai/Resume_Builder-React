import React , { Suspense } from 'react';
import { Route,Routes} from "react-router-dom";
import { HomeScreen , Authentication } from "../pages";


// home route,auth route
const App = () => {
  return <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path='/*' element={<HomeScreen />}/>
      <Route path='/auth' element={<Authentication />}/>
    </Routes>
  </Suspense>;
};

export default App;