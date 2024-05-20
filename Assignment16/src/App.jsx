import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
    const [isDarkMode, setIsDarkMode] = useState(false);
  
  let  changeColour = () => {
      setIsDarkMode(!isDarkMode);
    };
    
    const bgStyle = {
     backgroundColor: isDarkMode ? 'white' : 'black',
      color: isDarkMode ? 'black' : 'white',
      height: '500px', width:"800px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
   
    };

    const buttonStyle = {
      backgroundColor: isDarkMode ? 'black' : 'white',
      color: isDarkMode ? 'white' : 'black',
    }
  
    return (
        <div style={bgStyle}>
        <button 
          onClick={changeColour} 
          style={{...buttonStyle, color: isDarkMode ? 'white' : 'black' }}
        >
          {isDarkMode ? 'light' : 'dark'}
        </button>
        </div>
    
    );
  };

  


export default App
