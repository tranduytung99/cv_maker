class AdminCurrentUser extends React.Component {
  constructor() {
    super()
    this.logoutUser = this.logoutUser.bind(this)
  }

  logoutUser() {
    $.ajax({
      url: '/admin/logout',
      type: 'DELETE'
    })
  }

  render() {
    const {user} = this.props

    return (
      <li className="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
          <i className="fa fa-user"></i> {user.email}
          <b className="caret"></b>
        </a>
        <ul className="dropdown-menu">
          <li>
            <a href="#">
              <i className="fa fa-fw fa-user"></i> Profile
            </a>
          </li>
          <li>
            <a href="#">         
              <i className="fa fa-fw fa-gear"></i> Settings
            </a>
          </li>
          <li className="divider"></li>
          <li>
            <a href="#" onClick={this.logoutUser}>
              <i className="fa fa-fw fa-power-off"></i> Log Out
            </a>
          </li>
        </ul>
      </li>
    )
  }
}
