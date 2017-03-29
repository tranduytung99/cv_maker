class EditCV extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      contact_info: null,
      catalogue_forms: null
    }

    this._onBack = this._onBack.bind(this)
    this._getContactInfoFromApi = this._getContactInfoFromApi.bind(this)
    this._getFormCatalogueFromApi = this._getFormCatalogueFromApi.bind(this)
  }

  _onBack(){
    this.props.backToChooseCv()
  }

  _getContactInfoFromApi() {
    $.ajax({
      url: "/api/users/" + this.props.userId,
      success: (data) => {
        this.setState({ contact_info: data })
      },
      error: (xhr, status, error) => {
        alert('Cannot get data from API: ' + error)
      }
    })
  }

  _getFormCatalogueFromApi() {
    $.ajax({
      url: "/api/catalogue_forms",
      success: (data) => {
        this.setState({catalogue_forms: data})
      },
      error: (xhr, status, err) => {
        alert('Cannot get data from API: ' + error)
      }
    })
  }

  componentDidMount() {
    this._getContactInfoFromApi()
    this._getFormCatalogueFromApi()
  }

  render(){
    let cvTemplate = this.state.contact_info != null && this.state.catalogue_forms != null ? (
      <CVTemplate
        contactInfo={this.state.contact_info}
        catalogueForms={this.state.catalogue_forms}
        userId={this.props.userId}
        template={this.props.template}
        downloadPDFPath={this.props.downloadPDFPath}
      >
       <button
          className="btn btn-default"
          onClick={this._onBack}
          > Back </button>

      </CVTemplate>
    ) : null

    return(
      <div>
        {cvTemplate}
      </div>
    )
  }
}
