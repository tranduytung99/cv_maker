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
        <button className="btn-default"
          onClick={this._upClick}> &#8607; </button>
        <button className="btn-default"
          onClick={this._downClick}> &#8609; </button>
        <button className="btn-success"
          onClick={this._addClick}> + </button>
        <button className="btn-danger"
          onClick={this._deleteClick}> &times; </button>
      </div>
    )
  }
}
