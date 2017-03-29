class CVTemplate extends React.Component{

  constructor(props) {
    super(props);

    let contactInfo = this.props.contactInfo
    this.state = {
      full_name: contactInfo.first_name + " " + contactInfo.conlast_name,
      contact_info: [
        {title: "Date of birth", placeholder: "Date of birth (not required)", content: contactInfo.date_of_birth},
        {title: "Gender", placeholder: "Gender (not required)", content: contactInfo.sex},
        {title: "Phone", placeholder: "Phone", content: contactInfo.phone_number},
        {title: "Email", placeholder: "Email address", content: contactInfo.email},
        {title: "Address", placeholder: "Current address", content: contactInfo.address},
        {title: "Website", placeholder: "Facebook, Google, ...", content: contactInfo.website}
      ],
      form_infos: []
    }


    this._changeParentData = this._changeParentData.bind(this)

    this._addSubForm = this._addSubForm.bind(this)
    this._deleteSubForm = this._deleteSubForm.bind(this)
    this._upClickSubform = this._upClickSubform.bind(this)
    this._downClickSubform = this._downClickSubform.bind(this)

    this._addForm = this._addForm.bind(this)
    this._deleteForm = this._deleteForm.bind(this)
    this._upClickForm = this._upClickForm.bind(this)
    this._downClickForm = this._downClickForm.bind(this)

    this._changeCatalogueIntoForm = this._changeCatalogueIntoForm.bind(this)
    this._changeFormInfoIntoJsonData = this._changeFormInfoIntoJsonData.bind(this)
    this._saveCV = this._saveCV.bind(this)
  }

  _changeCatalogueIntoForm() {
    let formInfos = [].slice()

    this.props.catalogueForms.map((catalogue, index) => {
      let obj = {
        form_title: catalogue.name, img: catalogue.icon,
        catalogue_form_id: catalogue.id,
        subforms: [
          {
            time: catalogue.hint_time != null && catalogue.hint_time != "",
            title: catalogue.hint_title != null && catalogue.hint_title != "",
            content_placeholder: catalogue.hint_content,
            time_content: "20/3/2017 - 30/4/2017",
            title_content: catalogue.hint_title,
            title_placeholder: catalogue.hint_title,
            time_placeholder: catalogue.hint_time,
            content: "Some things ..."
          }
        ],
        template: {
          time: catalogue.hint_time != null && catalogue.hint_time != "",
          title: catalogue.hint_title != null && catalogue.hint_title != "",
          content_placeholder: catalogue.hint_content,
          time_content: "20/3/2017 - 30/4/2017",
          title_content: catalogue.hint_title,
          title_placeholder: catalogue.hint_title,
          time_placeholder: catalogue.hint_time,
          content: "Some things ..."
        }
      }
      formInfos.push(obj)
    })

    this.setState({form_infos: formInfos})
  }


  _changeParentData(content, which_title, which_form, which_subform, which_detail) {
    if (which_title == "contact_info"){
      if (which_form == "full_name"){
        this.setState({full_name: content})
      } else {
        this.state.contact_info[which_form].content = content
        this.forceUpdate()
      }
    } else if (which_title == "form_infos") {
      if (which_subform == "form_title") {
        this.state.form_infos[which_form].form_title = content
        this.forceUpdate()
      } else {
        if (which_detail == "time_content") {
          this.state.form_infos[which_form].subforms[which_subform].time_content = content
          this.forceUpdate()

        } else if (which_detail == "title_content") {
          this.state.form_infos[which_form].subforms[which_subform].title_content = content
          this.forceUpdate()
        } else {
          this.state.form_infos[which_form].subforms[which_subform].content = content
          this.forceUpdate()
        }
      }
    }
  }

  _addSubForm(which_form, which_subform) {
    let form = this.state.form_infos[which_form]
    let subforms = form.subforms.slice()
    let temp = Object.assign({}, form.template)
    subforms.push(temp)

    this.state.form_infos[which_form].subforms = subforms
    this.forceUpdate()


  }

  _deleteSubForm(which_form, which_subform) {
    let subforms = this.state.form_infos[which_form].subforms

    if (subforms.length < 2){
      this._deleteForm(which_form)
      return
    }

    subforms.splice(which_subform, 1)

    this.state.form_infos[which_form].subforms = subforms
    this.forceUpdate()
  }

  _upClickSubform(which_form, which_subform) {
    if (which_subform <= 0) {
      return
    }

    let index1 = which_subform
    let index2 = which_subform - 1
    let subforms = this.state.form_infos[which_form].subforms


    let temp = subforms[index1]
    subforms[index1] = subforms[index2]
    subforms[index2] = temp

    this.state.form_infos[which_form].subforms = subforms
    this.forceUpdate()
  }

  _downClickSubform(which_form, which_subform) {
    let subforms = this.state.form_infos[which_form].subforms.slice()
    if (which_subform >= subforms.length - 1) {
      return
    }
    let index1 = which_subform
    let index2 = which_subform + 1

    let temp = subforms[index1]
    subforms[index1] = subforms[index2]
    subforms[index2] = temp

    this.state.form_infos[which_form].subforms = subforms
    this.forceUpdate()
  }

  _deleteForm(which_form) {
    let forms = this.state.form_infos
    if (forms.length < 2){
      this.state.form_infos = []
      this.forceUpdate()
      return
    }

    forms.splice(which_form, 1)

    this.setState({form_infos: forms})
  }

  _addForm() {
    console.log("add")
  }

  _upClickForm(which_form) {
    let forms = this.state.form_infos.slice()
    if (which_form <= 0) {
      return
    }
    let index1 = which_form
    let index2 = which_form - 1


    let temp = forms[index1]
    forms[index1] = forms[index2]
    forms[index2] = temp

    this.setState({form_infos: forms})
  }

  _downClickForm(which_form) {
    let forms = this.state.form_infos.slice()
    if (which_form >= forms.length - 1) {
      return
    }
    let index1 = which_form
    let index2 = which_form + 1

    let temp = forms[index1]
    forms[index1] = forms[index2]
    forms[index2] = temp

    this.setState({form_infos: forms})
  }

  componentDidMount() {
    this._changeCatalogueIntoForm()
  }

  _changeFormInfoIntoJsonData(){
    let dataJson = [].slice()
    this.state.form_infos.map((form_info, index) => {
      let form = {
        position: index,
        form_title: form_info.form_title,
        img: form_info.img,
        catalogue_form_id: form_info.catalogue_form_id
      }
      let subforms = [].slice()
      form_info.subforms.map((subform) => {
        let sub_temp = {
          title: subform.title ? subform.title_content : null,
          time: subform.time ? subform.time_content : null,
          content: subform.content
        }
        subforms.push(sub_temp)
      })
      form.subforms = subforms

      dataJson.push(form)
    })
    return dataJson
  }

  _saveCV(){
    let cv_template = this.props.template
    let form_infos = JSON.stringify(this._changeFormInfoIntoJsonData())

    $.ajax({
      url: "/api/users/" + this.props.userId + "/curriculum_vitaes",
      method: "POST",
      dataType: "json",
      data: {
        cv_template: cv_template,
        form_infos: form_infos
      },
      success: (data) => {
      },
      error: (xhr, status, err) => {
        alert("Error: " + err)
      }
    })
  }

  render(){
    let form_infos = null
    if (this.state.form_infos == null){
      form_infos = null
    } else{
      form_infos = this.state.form_infos.map((form_info, index) => {
        return(
          <FormInfo
            formInfo={form_info}

            key={index}
            whichForm={index}
            whichTitle={"form_infos"}
            changeParentData={this._changeParentData}
            addSubform={this._addSubForm}
            deleteSubform={this._deleteSubForm}
            upClickSubform={this._upClickSubform}
            downClickSubform={this._downClickSubform}

            addForm={this._addForm}
            deleteForm={this._deleteForm}
            upClickForm={this._upClickForm}
            downClickForm={this._downClickForm}
          />
        )})
    }

    return(
      <div className="row cv-main">
        <ContactInfo
          changeParentData={this._changeParentData}
          contactInfo={this.state.contact_info}
          fullName={this.state.full_name}
          whichTitle={"contact_info"}
          />
        <div>{form_infos}</div>
        <div><button className="btn btn-success" onClick={this._saveCV}> Save CV </button></div>

      </div>
    )
  }
}
