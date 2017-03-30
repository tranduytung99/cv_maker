class ContentEditable extends React.Component{

  constructor(props){
    super(props)

    this.emitChange = this.emitChange.bind(this)
    this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this)
  }

  emitChange(){
    let html = ReactDOM.findDOMNode(this).innerHTML
    if (this.props.onChange && html !== this.lastHtml) {
      this.props.onChange(html)
    }
    this.lastHtml = html
  }

  shouldComponentUpdate(nextProps){
    return nextProps.html !== ReactDOM.findDOMNode(this).innerHTML
  }

  render(){
    return(
      <div
        className={"input-text " + this.props.className}
        onInput={this.emitChange}
        onBlur={this.emitChange}
        contentEditable
        dangerouslySetInnerHTML={{__html: this.props.html}}
        placeholder={this.props.placeholder}
        fontSize={this.props.fontSize}
        >
      </div>
    )
  }
}
