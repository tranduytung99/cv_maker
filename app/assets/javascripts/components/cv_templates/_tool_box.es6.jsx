class ToolBox extends React.Component{
  constructor(props){
    super(props)

    this._upClick = this._upClick.bind(this)
    this._downClick = this._downClick.bind(this)
    this._deleteClick = this._deleteClick.bind(this)
    this._addClick = this._addClick.bind(this)
  }

  _upClick() {
    this.props.upClick ? this.props.upClick() : null
  }
  _downClick() {
    this.props.downClick ? this.props.downClick() : null
  }
  _deleteClick() {
    this.props.deleteClick ? this.props.deleteClick() : null
  }
  _addClick() {
    this.props.addClick ? this.props.addClick() : null
  }

  render() {


    return(
      <div className={this.props.className ? this.props.className : ""}>
        <button className="btn btn-sm btn-default"
          onClick={this._upClick}>
          <i className="fa fa-angle-double-up"></i>
        </button>
        <button className="btn btn-sm btn-default"
          onClick={this._downClick}>
          <i className="fa fa-angle-double-down"></i>
        </button>
        <button className="btn btn-sm btn-success"
          onClick={this._addClick}>
          <i className="fa fa-plus"></i>
        </button>
        <button className="btn btn-sm btn-danger"
          onClick={this._deleteClick}>
          <i className="fa fa-times"></i>
        </button>
      </div>
    )
  }
}
