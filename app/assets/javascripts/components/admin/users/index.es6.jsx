class AdminUsersIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      choosing: 0,
      users: props.users
    }
    this.choose = this.choose.bind(this)
    this.updateUsers = this.updateUsers.bind(this)
  }

  updateUsers(users) {
    this.setState({users: users})
  }

  choose(id) {
    this.setState({
      choosing: id
    })
  }

  render() {
    const {choosing, users} = this.state
    const rows = users.map((user) => {
      return <UserRow onMouseEnter={this.choose} key={user.id} user={user} />
    })

    return <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Phone number</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
      <DeleteConfirmModal 
        link={"/admin/users/"+choosing} 
        content="Are you want to delete this user?"
        id="confirm-delete-user"
        afterSubmit={this.updateUsers}
      />
    </div>
  }
}
