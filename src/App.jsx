import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faGrip, faMagnifyingGlass, faMicrophone, faCamera } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const fileInputRef = useRef(null);

  const handleVoiceSearch = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Sorry, your browser doesn't support voice search.");
      return;
    }
    const recognition = new SpeechRecognition();
    console.log("Listening...");

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
    };
    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
    };
    recognition.start();
  };

  const handleLensClick = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      alert(`Image "${file.name}" selected! Ready to process.`);
    }
  };

  return (
    <>
      <header className="header">
        <div className="header-left">
          <a href="#">About</a>
          <a href="#">Store</a>
        </div>
        <div className="header-right">
          <a href="#">Gmail</a>
          <a href="#">Images</a>
          
          <button className="icon-btn" title="Labs">
            <FontAwesomeIcon icon={faFlask} />
          </button>

          <button className="icon-btn" title="Google apps">
            <FontAwesomeIcon icon={faGrip} />
          </button>

          <button className="sign-in-btn">Sign in</button>
        </div>
      </header>

      <main className="main-content">
        <div className="logo-container">
          <img 
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png" 
            alt="Google" 
            className="google-logo" 
          />
        </div>

        <div className="search-container">
          <div className="search-icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          
          <input 
            type="text" 
            className="search-input" 
            autoFocus 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          
          <div className="utility-icons">
            <FontAwesomeIcon 
              icon={faMicrophone} 
              className="action-icon"
              onClick={handleVoiceSearch}
              title="Search by voice"
            />
            
            <FontAwesomeIcon 
              icon={faCamera} 
              className="action-icon"
              onClick={handleLensClick}
              title="Search by image"
            />

            <input 
              type="file" 
              accept="image/*" 
              ref={fileInputRef} 
              style={{ display: 'none' }} 
              onChange={handleImageUpload}
            />
          </div>
        </div>

        <div className="buttons-container">
          <button className="google-btn">Google Search</button>
          <button className="google-btn">I'm Feeling Lucky</button>
        </div>

        <div className="languages">
          Google offered in: 
          <a href="#">हिन्दी</a>
          <a href="#">বাংলা</a>
          <a href="#">తెలుగు</a>
          <a href="#">मराठी</a>
          <a href="#">தமிழ்</a>
          <a href="#">ગુજરાતી</a>
          <a href="#">ಕನ್ನಡ</a>
          <a href="#">മലയാളം</a>
          <a href="#">ਪੰਜਾਬੀ</a>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-top">
          India
        </div>
        <div className="footer-bottom">
          <div className="footer-links">
            <a href="#">Advertising</a>
            <a href="#">Business</a>
            <a href="#">How Search works</a>
          </div>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Settings</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;