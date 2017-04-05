class AdminTemplateForm extends React.Component {
  constructor() {
    super();
    this.state = {
      content: ""
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.uploadFile = this.uploadFile.bind(this)
    this.changeContent = this.changeContent.bind(this)
  }

  onSubmit(e) {
    const template = Object.keys(this.refs).reduce((previous, current) => {
      previous[current] = this.refs[current].value
      return previous
    }, {})
    e.preventDefault()
    this.props.afterSubmit(template)
  }

  changeContent(e) {
    this.setState({
      content: e.target.value
    })
  }

  uploadFile(e) {
    var reader = new FileReader();  
    reader.onload = (e) => {
      this.setState({
        content: reader.result
      })
    }
    reader.readAsText(e.target.files[0])
  }

  render() {
    const {template, errors} = this.props
    const {content} = this.state
    const displayErrors = errors.map((error, index) => {
      return <li key={index}>{error}</li>
    })

    return <form className="form-horizontal" onSubmit={this.onSubmit}>
      <div className="form-group">
        <label className="control-label col-md-2">
          Name
        </label>
        <div className="col-md-4">
          <input ref="name" type="text" className="form-control"/>
        </div>
      </div>
      <div className="form-group">
        <label className="control-label col-md-2">
          Content
        </label>
        <div className="col-md-10">
          <textarea ref="content" onChange={this.changeContent} className="form-control" value={content} rows="10"></textarea>
          <input type="file" onChange={this.uploadFile} onClick={(e) => e.target.value=null}/>
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-offset-2 col-md-10 help-block with-errors">
          <ul className="list-unstyled">{displayErrors}</ul>
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-offset-2 col-md-10">
          <button type="submit" className="btn btn-default btn-inverse">Create</button>
        </div>
      </div>
    </form>
  }
}
