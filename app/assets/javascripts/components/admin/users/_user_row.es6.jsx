class UserRow extends React.Component {
  render() {
    const {id, email, phone_number, role} = this.props.user

    return <tr onMouseEnter={() => this.props.onMouseEnter(id)}>
      <td>{id}</td>
      <td>{email}</td>
      <td>{phone_number}</td>
      <td>{role}</td> 
      <td>
        <a href={'/admin/users/' + id}>Show</a>
        <span> | </span>
        <a href={'/admin/users/'+ id + '/edit'}>Edit</a>
        <span> | </span>
        <a href="#" type="button" data-toggle="modal" data-target="#confirm-delete-user">Delete</a>
      </td>
    </tr>
  }
}
