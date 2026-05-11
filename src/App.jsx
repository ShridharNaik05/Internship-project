import './App.css'

export default function App() {
  return (
    <div className="page">

      {/* Top bar */}
      <div className="top">
        <div className="left">
          <span>About</span>
          <span>Store</span>
        </div>

        <div className="right">
          <span>Gmail</span>
          <span>Images</span>
          <button>Sign in</button>
        </div>
      </div>

      {/* Center */}
      <div className="center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="google"
        />

        <input type="text" placeholder="Search Google or type a URL" />

        <div className="buttons">
          <button>Google Search</button>
          <button>I'm Feeling Lucky</button>
        </div>

        <p className="lang">
          Google offered in: हिन्दी বাংলা తెలుగు मराठी
        </p>
      </div>

      {/* Footer */}
      <div className="footer">
        <div>India</div>
        <div className="footer-links">
          <span>Advertising</span>
          <span>Business</span>
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>

    </div>
  )
}