class Header extends React.Component{
  render() {
    const { user_signed_in, edit_link, logout_link, signup_link, login_link } = this.props

    let links = []
    if (this.props.user_signed_in){
      links = [
        {id: 1, name: "Home", link: "/"},
        {id: 2, name: "Help", link: "/help"},
        {id: 3, name: "About", link: "/about"},
        {id: 4, name: "Account", account: true}
        ]
    } else {
      links = [
        {id: 1, name: "Home", link: "/"},
        {id: 2, name: "Help", link: "/help"},
        {id: 3, name: "About", link: "/about"},
        {id: 4, name: "Sign up", link: this.props.signup_link},
        {id: 5, name: "Login", link: this.props.login_link}]
    }

    let listLinks = links.map((link) => {
      if (link.account){
        return (
          <li className= "dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-user"></i> {link.name}
              <b className="caret"></b>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href={this.props.change_password_link}><i className="fa fa-key"></i> Change Password</a>
              </li>
              <li>
                <a href={this.props.edit_profile_link}><i className="fa fa-user"></i> Profile</a>
              </li>
              <li className="divider"></li>
              <li>
                <a href={this.props.logout_link} data-method="delete"><i className="fa fa-fw fa-power-off"></i> Sign out</a>
              </li>
            </ul>
          </li>
        )
      }
      else {
        return (
          <li key={"link_" + link.id} >
            <a href={link.link}> {link.name} </a>
          </li>
        )
      }
    })

    return(
      <header className="navbar navbar-fixed-top navbar-inverse">
        <div className="container">
          <a href="/" className="logo">CVMAKER</a>
          <nav>
            <ul className="nav navbar-nav navbar-right">
              {listLinks}
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
