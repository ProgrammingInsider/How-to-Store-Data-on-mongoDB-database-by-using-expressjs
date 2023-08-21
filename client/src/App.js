import React from 'react'
import './index.css';
import { useGlobalContext } from './context';

// Components
import SignupAndsignin from './components/Signup&signin';
import Header from './components/Header';

const App = () => {
  const {token} = useGlobalContext();
  
 
     return<>
     <Header/>
     <SignupAndsignin/>    
        
     </> 
}

export default App