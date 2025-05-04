import { useState, useEffect } from 'react';
import Chat from './components/chat/Chat.js';
import Header from './components/header/Header.js';
import "./App.scss";
import Footer from './components/footer/Footer.js';
import AboutMe from './components/about/aboutMe.js';

function App() {
  const [showChat, setShowChat] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleLogoClick = () => {
    setShowChat(true);
    setShowPopup(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!showChat) {
        setShowPopup(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [showChat]);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      <Header />

      {!showChat ? (
        <div className='container-chat'>
          <div className="logo-container" onClick={handleLogoClick}>
            <div className="logo-image">
              <img
                src={process.env.PUBLIC_URL + "/assets/logofuria.svg"}
                alt="Logo FURIA"
              />
            </div>
          </div>

          {showPopup && (
            <div className="notification-popup">
              <div className="popup-content">
                <p>Clique no logo da FURIA para acessar o chat!</p>
                <button onClick={closePopup} className="close-popup">
                  ✕
                </button>
              </div>
            </div>
          )}
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