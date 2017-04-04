class AdminShowUser extends React.Component {
  render() {
    const {user} = this.props

    return <div className="col-md-8">
      <div className="row">
        <div className="col-md-6 text-center">
          <img className="user-avatar" src="https://image.flaticon.com/icons/png/128/25/25634.png" />
          <br />
          <br />
          <a href={"/admin/users/" + user.id + "/edit"} className="btn btn-default">
            <i className="fa fa-pencil"></i> Edit
          </a>
          <button type="button" className="btn btn-default" data-toggle="modal" data-target="#confirm-delete-user">
            <i className="fa fa-trash"></i> Delete
          </button>
          <DeleteConfirmModal
            link={"/admin/users/" + user.id}
            content="Are you want to delete this user?"
            id="confirm-delete-user"
            afterSubmit={() => window.location = '/admin/users'}
          />
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-12">
              <h2 className="no-top-margin">{user.first_name} {user.last_name}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <span className="text-muted">Email: </span>
              {user.email}
              <br/>
              <span className="text-muted">Phone number: </span>
              {user.phone_number}
              <br/>
              <span className="text-muted role">Role: </span>
              <span className="label label-default">{user.role}</span>
              <br/>
              <br/>
              <small className="text-muted">Created: {user.created_at}</small>
              <br/>
              <small className="text-muted">Updated: {user.updated_at}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}
