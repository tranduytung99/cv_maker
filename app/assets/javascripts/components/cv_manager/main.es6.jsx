class CvManagerMain extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      which_page: "choose-cv",
      which_cv: null
    }

    this._onClick = this._onClick.bind(this)
    this._setStateChooseCv = this._setStateChooseCv.bind(this)
  }

  _onClick(index) {
    this.setState({
      which_page: "edit-cv",
      which_cv: index
    })
  }

  _setStateChooseCv() {
    this.setState({
      which_page: "choose-cv"
    })
  }

  render(){
    let page = null
    if (this.state.which_page == "choose-cv"){
      let templates = this.props.templates
      let listTemplates = templates.map((template, index) => {
        return(
          <div
            key={index}
            className="btn btn-link col-md-4"
            onClick={this._onClick.bind(this, template.id)}>
            <div className="template-div text-center">
              <div className="row"><img src="template.png"/></div>
              <div className="row">{template.name}</div>
            </div>
          </div>
        )
      })
      page = <div className="row">
        <h1>Choose a CV Template</h1>
        {listTemplates}
      </div>
    } else if(this.state.which_page == "edit-cv") {
      page = <EditCV
        template={this.state.which_cv}
        userId={this.props.userId}
        backToChooseCv={this._setStateChooseCv}
        template={this.state.which_cv}
      />
    }

    return (
      <div>
        {page}
      </div>
    )
  }
}
