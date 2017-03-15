class Header extends React.Component{
  render() {
    const { user_signed_in, edit_link, logout_link, signup_link, login_link } = this.props

    let links = []
    if (this.props.user_signed_in){
      links = [
        {id: 1, name: "Home", link: "/"},
        {id: 2, name: "Help", link: "/help"},
        {id: 3, name: "About", link: "/about"},
        {id: 4, name: "Edit profile", link: this.props.edit_link},
        {id: 5, name: "Log out", link: this.props.logout_link, sign_out: true}]
    } else {
      links = [
        {id: 1, name: "Home", link: "/"},
        {id: 2, name: "Help", link: "/help"},
        {id: 3, name: "About", link: "/about"},
        {id: 4, name: "Sign up", link: this.props.signup_link},
        {id: 5, name: "Login", link: this.props.login_link}]
    }

    let listLinks = links.map((link) => {
      if (link.sign_out) {
        return (
          <li key={"link_" + link.id} >
            <a href={link.link} data-method="delete" > {link.name} </a>
          </li>
        )
      } else {
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
