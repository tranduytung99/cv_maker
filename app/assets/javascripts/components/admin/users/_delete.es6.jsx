class DeleteConfirmModal extends React.Component {
  constructor() {
    super()
    this.clickDelete = this.clickDelete.bind(this)
  }

  clickDelete() {
    const {link, afterSubmit} = this.props

    $.ajax({
      url: link,
      type: 'DELETE',
      success: (response) => {
        afterSubmit(response)
      }
    })
  }

  render() {
    const {content, id} = this.props

    return <div className="modal fade" id={id} role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Confirm Delete</h4>
            </div>
            <div className="modal-body">
              <p>{content}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
              <a className="btn btn-default btn-inverse" onClick={this.clickDelete} data-dismiss="modal">Delete</a>
            </div>
          </div>
        </div>
    </div>
  }
}
