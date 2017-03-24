class AdminUserForm extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    const user = Object.keys(this.refs).reduce((previous, current) => {
      previous[current] = this.refs[current].value
      return previous
    }, {})
    e.preventDefault()
    this.props.afterSubmit(user)
  }

  render() {
    const {roles, children, errors, user} = this.props
    const roleOptions = Object.keys(roles).map(key => {
      return <option value={key} key={key}>{key}</option>
    })
    const displayErrors = errors.map((error, index) => {
      return <li key={index}>{error}</li>
    })

    return <form className="col-md-6 form-horizontal" onSubmit={this.handleSubmit}>
      <div className="form-group">
        <label className="control-label col-md-4">Name </label>
        <div className="col-md-4">
          <input type="text" ref="first_name" className="form-control" placeholder="First name" defaultValue={user.first_name}/>
        </div>
        <div className="col-md-4">
          <input type="text" ref="last_name" className="form-control" placeholder="Last name" defaultValue={user.last_name}/>
        </div>
      </div>
      <div  className="form-group">
        <label className="control-label col-md-4">Email </label>
        <div className="col-md-8">
          <input type="email" ref="email" className="form-control" defaultValue={user.email}/>
        </div>
      </div>
      <div className="form-group">
        <label className="control-label col-md-4">Password </label>
        <div className="col-md-8">
          <input type="password" ref="password" className="form-control" />
        </div>
      </div>
      <div className="form-group">
        <label className="control-label col-md-4">Confirm password </label>
        <div className="col-md-8">
          <input type="password" ref="password_confirmation" className="form-control" />
        </div>
      </div>
      <div className="form-group">
        <label className="control-label col-md-4">Phone number </label>
        <div className="col-md-8">
          <input type="text" ref="phone_number" className="form-control" defaultValue={user.phone_number}/>
        </div>
      </div>
      <div className="form-group">
        <label className="control-label col-md-4">Role </label>
        <div className="col-md-8">
          <select ref="role" className="form-control" defaultValue={user.role}>
            {roleOptions}
          </select>
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-8 col-md-offset-4 help-block with-errors">
          <ul className="list-unstyled">
            {displayErrors}
          </ul>
        </div>
      </div>
      {children}
    </form>
  }
}

AdminUserForm.defaultProps = {
  user: {}
}
