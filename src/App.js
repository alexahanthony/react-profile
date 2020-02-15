import React from 'react';
import Contact from './components/Contact'
import Profile from './components/Profile'
// import Portfolio from './components/Portfolio'
import Navbar from './components/Navbar'
// import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      
        <h1>Alexa's React Portfolio</h1>
        <Navbar/>
        <Contact/>
        {/* <Portfolio/> */}
        <Profile/>
        {/* <Footer/> */}
    </div>
  );
}

export default App;
