class AdminHeader extends React.Component {
  render() {
    const {area, current_user} = this.props

    return <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand admin-brand" href="/admin">Admin</a>
      </div>
      <ul className="nav navbar-right top-nav">
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
            <i className="fa fa-bell"></i> 
            <b className="caret"></b>
          </a>
          <ul className="dropdown-menu alert-dropdown">
            <li>
              <a href="#">Alert 1</a>
            </li>
            <li>
              <a href="#">Alert 2</a>
            </li>
            <li className="divider">
            </li>
            <li>
              <a href="#">View all</a>
            </li>
          </ul>
        </li>
        <AdminCurrentUser user={current_user}/>
      </ul>
      <LeftNavbar area={area}/>
    </nav>
  }
}
