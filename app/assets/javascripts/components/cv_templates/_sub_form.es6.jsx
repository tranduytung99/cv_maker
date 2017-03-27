class SubForm extends React.Component{
  constructor(props){
    super(props)

    this._addSubForm = this._addSubForm.bind(this)
    this._deleteSubForm = this._deleteSubForm.bind(this)
    this._changeParentDataTime = this._changeParentDataTime.bind(this)
    this._changeParentDataTitle = this._changeParentDataTitle.bind(this)
    this._changeParentData = this._changeParentData.bind(this)
    this._upClick = this._upClick.bind(this)
    this._downClick = this._downClick.bind(this)
  }

  _addSubForm() {
    this.props.addSubform(this.props.whichSubform)
  }

  _deleteSubForm() {
    this.props.deleteSubform(this.props.whichSubform)
  }

  _changeParentDataTime(content, which_title, which_form, which_subform, which_detail) {
    this.props.changeParentData(content, null, null, this.props.whichSubform, which_detail)
  }

  _changeParentDataTitle(content, which_title, which_form, which_subform, which_detail) {
    this.props.changeParentData(content, null, null, this.props.whichSubform, which_detail)
  }

  _changeParentData(content, which_title, which_form, which_subform, which_detail) {
    this.props.changeParentData(content, null, null, this.props.whichSubform, which_detail)
  }

  _upClick() {
    this.props.upClick(this.props.whichSubform)
  }

  _downClick() {
    this.props.downClick(this.props.whichSubform)
  }

  render(){
    let {time, title, content_placeholder, time_content, title_content, content,
      time_placeholder, title_placeholder} = this.props.subform

    let _subform = null

    let time_input = <TextInput
      content={time_content || ""}
      placeholder={time_placeholder}
      whichDetail={"time_content"}
      changeParentData={this._changeParentDataTime}
      />
    let title_input = <TextInput
      content={title_content || ""}
      placeholder={title_placeholder}
      whichDetail={"title_content"}
      changeParentData={this._changeParentDataTitle}
      />
    let content_input = <TextInput
      content={content || ""}
      whichDetail={"content"}
      placeholder={content_placeholder || "Content"}
      changeParentData={this._changeParentData}
      />
    let tool_box = <ToolBox
      key={"content_3"}
      className="tool-box btn-group"
      addClick={this._addSubForm}
      deleteClick={this._deleteSubForm}
      upClick={this._upClick}
      downClick={this._downClick}
      />

    if (time && title) {
      _subform = [
        <div className="col-xs-3" key={"content_1"}>
          {time_input}
        </div>,
        <div className="col-xs-9 title-content" key={"content_2"}>
          {title_input}
          {content_input}
        </div>,
        tool_box
      ]
    } else if (time) {
      _subform = [
        <div className="col-xs-3" key={"content_1"}>
          {time_input}
        </div>,
        <div className="col-xs-9 title-content" key={"content_2"}>
          {content_input}
        </div>,
        tool_box
      ]
    } else if (title) {
      _subform = [
        <div className="col-xs-3" key={"content_1"}>
          {title_input}
        </div>,
        <div className="col-xs-9" key={"content_2"}>
          {content_input}
        </div>,
        tool_box
      ]
    } else {
      _subform = [
        <div className="col-xs-12" key={"content_1"}>
          {content_input}
        </div>,
        tool_box
      ]
    }

    return(
      <div className="row subform" >
        {_subform}
      </div>
    )
  }
}
