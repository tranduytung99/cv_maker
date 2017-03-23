class ContactInfo extends React.Component{
  constructor(props){
    super(props)

    this._changeParentData = this._changeParentData.bind(this)
  }

  _changeParentData(content, which_title, which_form, which_subform, which_detail) {
    this.props.changeParentData(content, this.props.whichTitle, which_form)
  }

  render(){
    let contact_info = this.props.contactInfo

    let rows = contact_info.map((contact, index)=>{
      return(
        <div className="row" key={"row_" + index}>
          <div className="col-xs-3 contact-title" >
            <span>{contact.title}</span>
          </div>
          <div className="col-xs-9 contact-content">
            <TextInput
              changeParentData={this._changeParentData}
              content={contact.content}
              placeholder={contact.placeholder}
              whichForm={index}
              />
          </div>
        </div>
      )
    })

    return(
      <div className="contact-info">
        <div className="col-xs-9">
          <div className="col-xs-12 contact-name">
            <TextInput
              content={this.props.full_name}
              placeholder="Full name"
              changeParentData={this._changeParentData}
              whichForm={"full_name"}
              fontSize="24pt"/>
          </div>

          {rows}
        </div>

        <div className="col-xs-3">
          <img src="https://static.topcv.vn/avatars/yqgOsmib9MDfmd6saeg4_584f48c01c408_cvtpl.jpg?1489975998"
            value="yqgOsmib9MDfmd6saeg4_584f48c01c408_cvtpl.jpg"
            alt="avatar" type="image"
            height="70%" width="70%"
            />
        </div>
      </div>
    )
  }
}
