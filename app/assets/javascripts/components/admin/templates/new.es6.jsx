class AdminNewTemplate extends React.Component {
  constructor() {
    super()
    this.state = {
      errors: []
    }
    this.createTemplate = this.createTemplate.bind(this)
  }

  createTemplate(template) {
    $.ajax({
      url: '/admin/templates',
      type: 'POST',
      data: {
        template: template
      },
      success: (response) => {
        console.log(response)
      },
      error: (xhr) => {
        const errorsObject = $.parseJSON(xhr.responseText)
        var errors = $.map(errorsObject, function(value, index) {
          return 'The ' + index + ' ' + value
        })
        this.setState({errors: errors})
      }
    })
  }

  render() {
    const {errors} = this.state

    return <AdminTemplateForm afterSubmit={this.createTemplate} errors={errors}/>
  }
}
