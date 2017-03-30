class TextInput extends React.Component{

  constructor(props) {
    super(props);

    this._onChange = this._onChange.bind(this)
  }

  _onChange(value){
    let which_title = this.props.whichTitle == null ? null : this.props.whichTitle
    let which_form = this.props.whichForm == null ? null : this.props.whichForm
    let which_subform = this.props.whichSubform == null ? null : this.props.whichSubform
    let which_detail = this.props.whichDetail == null ? null : this.props.whichDetail

    this.props.changeParentData(value, which_title, which_form,
      which_subform, which_detail)
  }

  render(){
    let content = this.props.content || ""

    return(
      <ContentEditable
        html={content}
        onChange={this._onChange}
        placeholder={this.props.placeholder}
        fontSize={this.props.fontSize}
        className={this.props.className ? this.props.className : ""}
      />
    )
  }
}
