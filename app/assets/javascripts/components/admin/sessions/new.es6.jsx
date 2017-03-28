class AdminLoginForm extends React.Component {
  constructor() {
    super()
    this.state = {
      requesting: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    this.setState({
      requesting: true
    })
    e.preventDefault()
    $.ajax({
      url: '/admin/login',
      type: 'POST',
      data: {
        user: {
          email: this.refs.email.value,
          password: this.refs.password.value
        }
      },
      success: (response) => {
        this.setState({
          requesting: false,
          error: response.message
        })
      }
    })
  }

  render() {
    const {error, requesting} = this.state

    return <form className="container col-md-4 col-md-offset-4" onSubmit={this.handleSubmit}>
      <div className="panel panel-black">
        <div className="panel-heading">
          <h1>Admin</h1>
        </div>
        <div className="panel-body">
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon addon-inverse">
                <i className="fa fa-envelope"></i>
              </span>
              <input ref="email" type="email" className="form-control" placeholder="Email" />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon addon-inverse">
                <i className="fa fa-key"></i>
              </span>
              <input ref="password" type="password" className="form-control" placeholder="Password" />
            </div>
          </div>
          { error && <div className="form-group">
            <span className="help-block with-errors">
              {error}
            </span>
          </div>
          }
          <button type="submit" className="btn btn-default btn-inverse full-width" 
            disabled={requesting?"disabled": ""}>
            Login <i className="fa fa-sign-in"></i>
          </button>
        </div>
      </div>
    </form>
  }
}
