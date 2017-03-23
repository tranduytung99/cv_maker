class FormInfo extends React.Component{
  constructor(props) {
    super(props)

    this._changeParentData = this._changeParentData.bind(this)

    this._addSubForm = this._addSubForm.bind(this)
    this._deleteSubForm = this._deleteSubForm.bind(this)
    this._upClickSubform = this._upClickSubform.bind(this)
    this._downClickSubform = this._downClickSubform.bind(this)

    this._addForm = this._addForm.bind(this)
    this._deleteForm = this._deleteForm.bind(this)
    this._upClickForm = this._upClickForm.bind(this)
    this._downClickForm = this._downClickForm.bind(this)
  }

  _changeParentData(content, which_title, which_form, which_subform, which_detail) {
    this.props.changeParentData(content, this.props.whichTitle, this.props.whichForm,
      which_subform, which_detail)
  }

  _addSubForm(which_subform) {
    this.props.addSubform(this.props.whichForm, which_subform)
  }

  _deleteSubForm(subform_index) {

    this.props.deleteSubform(this.props.whichForm, subform_index)
  }

  _upClickSubform(which_subform) {
    this.props.upClickSubform(this.props.whichForm, which_subform)
  }

  _downClickSubform(which_subform) {
    this.props.downClickSubform(this.props.whichForm, which_subform)
  }

  _addForm() {
    this.props.addForm()
  }

  _deleteForm() {
    this.props.deleteForm(this.props.whichForm)
  }

  _upClickForm() {
    this.props.upClickForm(this.props.whichForm)
  }

  _downClickForm() {
    this.props.downClickForm(this.props.whichForm)
  }

  render(){
    let {subforms, form_title, img} = this.props.formInfo

    let listSubforms = subforms.map((subform, index) => {
      return(
        <div className="col-xs-12" key={"subform_" + index} >
          <SubForm
            subform={subform}
            whichSubform={index}
            changeParentData={this._changeParentData}
            upClick={this._upClickSubform}
            downClick={this._downClickSubform}
            addSubform={this._addSubForm}
            deleteSubform={this._deleteSubForm}
            />
        </div>
      )
    })

    return(
      <div className="form-info col-xs-12" >
        <ToolBox
          className="tool-box"
          upClick={this._upClickForm}
          downClick={this._downClickForm}
          addClick={this._addForm}
          deleteClick={this._deleteForm}
          />
        <div className="col-xs-12 form-title">
          <TextInput
            placeholder="Form title"
            content={form_title}
            fontSize="24pt"
            whichDetail={"form_title"}
            whichSubform={"form_title"}
            changeParentData={this._changeParentData}
            />
          <hr />
          {listSubforms}
        </div>
      </div>
    )
  }
}
