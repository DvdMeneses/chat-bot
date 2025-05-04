import { useState } from 'react';
import Chat from './components/chat/Chat.js';
import Header from './components/header/Header.js';
import "./App.scss";
import Footer from './components/footer/Footer.js';
import AboutMe from './components/about/aboutMe.js';



function App() {
  const [showChat, setShowChat] = useState(false);

  const handleLogoClick = () => {
    setShowChat(true);
  };

  return (
    <div className="App">
      <Header />

      {!showChat ? (
        <div className='container-chat'>

          <div className="logo-container" onClick={handleLogoClick}>
            <div className="logo-image"
            >
              <img
                src={process.env.PUBLIC_URL + "/assets/logofuria.png"}
                alt="Logo FURIA"
              />
            </div>

          </div>
        </div>

      ) : (
        <Chat />
      )}
      <AboutMe />

      <Footer />
    </div>
  );
}

export default App;
