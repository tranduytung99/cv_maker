class Home extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      templates: []
    }

    this._getTemplateFromApi = this._getTemplateFromApi.bind(this)
  }

  _getTemplateFromApi() {
    $.ajax({
      url: "/api/templates",
      success: (data) => {
        this.setState({ templates: data })
      },
      error: (xhr, status, error) => {
        alert('Cannot get data from API: ' + error)
      }
    })
  }

  componentDidMount() {
    this._getTemplateFromApi()
  }

  render() {
    return (
      <CvManagerMain
        templates={this.state.templates}
        userId={this.props.userId}
        downloadPDFPath={this.props.downloadPDFPath}
      />
    )
  }
}
