class AdminEditUser extends React.Component {
  constructor() {
    super()
    this.state = {
      errors: []
    }

    this.updateUser = this.updateUser.bind(this)
  }

  updateUser(user) {
    $.ajax({
      url: '/admin/users/' + this.props.user.id,
      type: 'PATCH',
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
    const {roles, user} = this.props
    const {errors} = this.state

    return <AdminUserForm roles={roles} afterSubmit={this.updateUser} errors={errors} user={user}>
      <div className="form-group">
        <div className="col-md-8 col-md-offset-4">
          <button type="submit" className="btn btn-default btn-inverse">Update</button>
        </div>
      </div>
    </AdminUserForm>
  }
}
