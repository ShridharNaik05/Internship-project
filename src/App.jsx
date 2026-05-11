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
        <h1 className="logo">Google</h1>

        <div className="search-box">
          <span className="icon">🔍</span>
          <input type="text" placeholder="Search Google or type a URL" />
          <span className="icon">🎤</span>
        </div>

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
        <div className="links">
          <span>Advertising</span>
          <span>Business</span>
          <span>How Search works</span>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Settings</span>
        </div>
      </div>

    </div>
  )
}