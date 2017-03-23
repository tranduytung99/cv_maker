class CVTemplate extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      cv_template: {
        full_name: "",
        contact_info: [
          {title: "Date of birth", placeholder: "Date of birth (not required)"},
          {title: "Gender", placeholder: "Gender (not required)"},
          {title: "Phone", placeholder: "Phone"},
          {title: "Email", placeholder: "Email address"},
          {title: "Address", placeholder: "Current address"},
          {title: "Website", placeholder: "Website, facebook, blog ..."}
        ],
        form_infos: [
          {form_title: "Objective", img: "",
            subforms: [
              {time: false, title: false,
                content_placeholder: "Your objective",
                time_content: "20/3/2017 - 30/4/2017",
                title_content: "Objectvice 1",
                content: "Some things ..."
              }
            ],
            templace: {time: false, title: false,
              content_placeholder: "Your objective",
              time_content: "20/3/2017 - 30/4/2017",
              title_content: "Objectvice n",
              content: "Some things ..."
            }
          },
          {form_title: "Education", img: "",
            subforms: [
              {time: true, title: true,
                content_placeholder: "- Degree and Field of study - gpa",
                time_content: "20/3/2017 - 30/4/2017",
                title_content: "Education 1",
                content: "Some things ..."
              }
            ],
            templace: {time: true, title: true,
              content_placeholder: "- Degree and Field of study - gpa",
              time_content: "20/3/2017 - 30/4/2017",
                title_content: "Education n",
                content: "Some things ..."
            }
          },
          {form_title: "Work experience", img: "",
            subforms: [
              {time: true, title: true,
                content_placeholder: "- Title / Position " + "&#x0a;" +
                  "- Description about your responsibilities and the results of your work",
                  time_content: "20/3/2017 - 30/4/2017",
                title_content: "Work experience 1",
                content: "Some things ..."
              }
            ],
            templace: {time: true, title: true,
              content_placeholder: "- Title / Position " + "&#x0a;" +
                "- Description about your responsibilities and the results of your work",
                time_content: "20/3/2017 - 30/4/2017",
                title_content: "Work experience n",
                content: "Some things ..."
              }
          },
          {form_title: "Activities", img: "",
            subforms: [
              {time: true, title: true,
                content_placeholder: "- Title \
                  - Description",
                  time_content: "20/3/2017 - 30/4/2017",
                title_content: "Activities 1",
                content: "Some things ..."
              }
            ],
            templace: {time: true, title: true,
              content_placeholder: "- Title \
                - Description",
                time_content: "20/3/2017 - 30/4/2017",
                title_content: "Activities n",
                content: "Some things ..."
            }
          },
          {form_title: "Skill", img: "",
            subforms: [
              {time: false, title: true,
                content_placeholder: "- Skill description",
                time_content: "20/3/2017 - 30/4/2017",
                title_content: "Skill 1",
                content: "Some things ..."
              }
            ],
            templace: {time: false, title: true,
              content_placeholder: "- Skill description",
              time_content: "20/3/2017 - 30/4/2017",
                title_content: "Skill n",
                content: "Some things ..."
            }
          },
          {form_title: "Interests", img: "",
            subforms: [
              {time: false, title: false,
                content_placeholder: "- I like soccer, music, etc..",
                time_content: "20/3/2017 - 30/4/2017",
                title_content: "Interests 1",
                content: "Some things ..."
              }
            ],
            templace: {time: false, title: false,
              content_placeholder: "- I like soccer, music, etc..",
              time_content: "20/3/2017 - 30/4/2017",
                title_content: "Interests n",
                content: "Some things ..."
            }
          },
          {form_title: "Certifications", img: "",
            subforms: [
              {time: true, title: true,
                content_placeholder: "- Description",
                time_content: "20/3/2017 - 30/4/2017",
                title_content: "Certifications 1",
                content: "Some things ..."
              }
            ],
            templace: {time: true, title: true,
              content_placeholder: "- Description",
              time_content: "20/3/2017 - 30/4/2017",
                title_content: "Certifications n",
                content: "Some things ..."
            }
          },
          {form_title: "Honors & Awards", img: "",
            subforms: [
              {time: true, title: true,
                content_placeholder: "- Description",
                time_content: "20/3/2017 - 30/4/2017",
                title_content: "Honors, Awards 1",
                content: "Some things ..."
              }
            ],
            templace: {time: true, title: true,
              content_placeholder: "- Description",
              time_content: "20/3/2017 - 30/4/2017",
                title_content: "Honors n",
                content: "Some things ..."
            }
          },
          {form_title: "Projects", img: "",
            subforms: [
              {time: true, title: true,
                content_placeholder: "- Work description \
                  - Team work\
                  - Your position in team",
                  time_content: "20/3/2017 - 30/4/2017",
                title_content: "Projects 1",
                content: "Some things ..."
              }
            ],
            templace: {time: true, title: true,
              content_placeholder: "- Work description \
                - Team work\
                - Your position in team",
                time_content: "20/3/2017 - 30/4/2017",
                title_content: "Projects n",
                content: "Some things ..."
            }
          },
          {form_title: "References", img: "",
            subforms: [
              {time: false, title: false,
                content_placeholder: ".......",
                time_content: "20/3/2017 - 30/4/2017",
                title_content: "References 1",
                content: "Some things ..."
              }
            ],
            templace: {time: false, title: false,
              content_placeholder: ".......",
              time_content: "20/3/2017 - 30/4/2017",
                title_content: "References n",
                content: "Some things ..."
            }
          }
        ]
      }
    }


    this._changeParentData = this._changeParentData.bind(this)
    this._onSubmitClick = this._onSubmitClick.bind(this)

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
    if (which_title == "contact_info"){
      if (which_form == "full_name"){
        this.state.cv_template.full_name = content
        this.forceUpdate()
      } else {
        this.state.cv_template.contact_info[which_form].content = content
        this.forceUpdate()
      }
    } else if (which_title == "form_infos") {
      if (which_subform == "form_title") {
        this.state.cv_template.form_infos[which_form].form_title = content
        this.forceUpdate()
      } else {
        if (which_detail == "time_content") {
          this.state.cv_template.form_infos[which_form].subforms[which_subform].time_content = content
          this.forceUpdate()

        } else if (which_detail == "title_content") {
          this.state.cv_template.form_infos[which_form].subforms[which_subform].title_content = content
          this.forceUpdate()
        } else {
          this.state.cv_template.form_infos[which_form].subforms[which_subform].content = content
          this.forceUpdate()
        }
      }
    }
  }

  _addSubForm(which_form, which_subform) {
    let forms = this.state.cv_template.form_infos[which_form]
    let subforms = forms.subforms.slice()
    let temp = Object.assign({}, forms.templace)
    // subforms.splice(index, 0, temp)
    subforms.push(temp)
    this.state.cv_template.form_infos[which_form].subforms = subforms
    this.forceUpdate()


  }

  _deleteSubForm(which_form, which_subform) {
    let subforms = this.state.cv_template.form_infos[which_form].subforms

    if (subforms.length < 2){
      this._deleteForm(which_form)
      return
    }

    subforms.splice(which_subform, 1)

    this.state.cv_template.form_infos[which_form].subforms = subforms
    this.forceUpdate()
  }

  _upClickSubform(which_form, which_subform) {
    if (which_subform <= 0) {
      return
    }

    let index1 = which_subform
    let index2 = which_subform - 1
    let subforms = this.state.cv_template.form_infos[which_form].subforms


    let temp = subforms[index1]
    subforms[index1] = subforms[index2]
    subforms[index2] = temp

    this.state.cv_template.form_infos[which_form].subforms = subforms
    this.forceUpdate()
  }

  _downClickSubform(which_form, which_subform) {
    let subforms = this.state.cv_template.form_infos[which_form].subforms.slice()
    if (which_subform >= subforms.length - 1) {
      return
    }
    let index1 = which_subform
    let index2 = which_subform + 1

    let temp = subforms[index1]
    subforms[index1] = subforms[index2]
    subforms[index2] = temp

    this.state.cv_template.form_infos[which_form].subforms = subforms
    this.forceUpdate()
  }

  _deleteForm(which_form) {
    let forms = this.state.cv_template.form_infos
    if (forms.length < 2){
      this.state.cv_template.form_infos = []
      this.forceUpdate()
      return
    }

    forms.splice(which_form, 1)

    this.state.cv_template.form_infos = forms
    this.forceUpdate()
  }

  _addForm() {
    console.log("add")
  }

  _upClickForm(which_form) {
    let forms = this.state.cv_template.form_infos.slice()
    if (which_form <= 0) {
      return
    }
    let index1 = which_form
    let index2 = which_form - 1


    let temp = forms[index1]
    forms[index1] = forms[index2]
    forms[index2] = temp

    this.state.cv_template.form_infos = forms
    this.forceUpdate()
  }

  _downClickForm(which_form) {
    let forms = this.state.cv_template.form_infos.slice()
    if (which_form >= forms.length - 1) {
      return
    }
    let index1 = which_form
    let index2 = which_form + 1

    let temp = forms[index1]
    forms[index1] = forms[index2]
    forms[index2] = temp

    this.state.cv_template.form_infos = forms
    this.forceUpdate()
  }

  _onSubmitClick() {
    console.log(this.state.cv_template)
  }

  render(){
    let form_infos = this.state.cv_template.form_infos.map((form_info, index) => {
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
      )
    })

    return(
      <div className="row cv-main">
        <ContactInfo
          changeParentData={this._changeParentData}
          contactInfo={this.state.cv_template.contact_info}
          fullName={this.state.full_name}
          whichTitle={"contact_info"}
          />
        {form_infos}
      </div>
    )
  }
}
