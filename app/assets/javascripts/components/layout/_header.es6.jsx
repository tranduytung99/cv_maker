class Header extends React.Component{
  render() {
    return(
      <header className="navbar navbar-fixed-top navbar-inverse">
        <div className="container">
          <a href="/" className="logo">CVMAKER</a>
          <nav>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/">Home</a></li>
              <li><a href="/help">Help</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="#">Login</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
