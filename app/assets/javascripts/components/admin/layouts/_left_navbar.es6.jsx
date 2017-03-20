class LeftNavbar extends React.Component {
  render() {
    const { area } = this.props

    const nav_lists = (() => {
      const links = [
        { area: "index", href: "", fa: "dashboard", html: "Dashboard" },
        { area: "users", href: "users", fa: "users", html: "Users" }
      ]
      let result = []
      links.map((link) => {
        const active = area == link.area ? "active" : ""
        result.push(<li  key={link.area} className={active}>
          <a href={"/admin/" + link.href}>
            <i className={"fa fa-" + link.fa}></i>
            {link.html}
          </a>
        </li>)
      }) 
      return result
    })()
    return <div className="collapse navbar-collapse navbar-ex1-collapse">
      <ul className="nav navbar-nav side-nav">
        {nav_lists}
      </ul>
    </div>
  }
}
