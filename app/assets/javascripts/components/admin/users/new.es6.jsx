class AdminNewUser extends React.Component {
  constructor() {
    super()
    this.state = {
      errors: []
    }
    this.createUser = this.createUser.bind(this)
  }

  createUser(user) {
    $.ajax({
      url: '/admin/users',
      type: 'POST',
      data: {
        user: user
      },
      success: (response) => {
      },
      error: (xhr) => {
        const errorsObject = $.parseJSON(xhr.responseText)
        var errors = $.map(errorsObject, function(value, index) {
          return 'The ' + index + ' ' + value
        })
        this.setState({errors: errors})
      }
    })
  }

  render() {
    const {roles} = this.props
    const {errors} = this.state

    return <AdminUserForm roles={roles} afterSubmit={this.createUser} errors={errors}>
      <div className="form-group">
        <div className="col-md-8 col-md-offset-4">
          <button type="submit" className="btn btn-default btn-inverse">Create</button>
        </div>
      </div>
    </AdminUserForm>
  }
}
