import logo from './logo.svg';
import './App.css';
import './assets/fonts/font.css';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Login from './components/login.jsx';
import Signup from './components/signup.jsx';
import { useState } from 'react';

function App() {
  const [isSignup, setSignup] = useState(false);

  const showSignup = () => {
    setSignup(true);
  }
  return (
    <div>
      <div className='header'>
        <Header/>
      </div>
      <div className='content'>
      { isSignup ? <Signup /> : <Login onSignupClick={showSignup} />}
      </div>
      <div className='footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
