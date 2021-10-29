

const Sidebar = (props) => {
  return (
    <div className="list-group dashboardSideBar sidemenu" id="list-tab" role="tablist">
      <div className="onhover">
        <a className="list-group-item list-group-item-action border-0 sidemenu" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">
          <p className="dashboardlist-content">
            <span >Myntra Hackeramp</span>
          </p>
        </a>
      </div>
      <div className="onhover">
        <a className="list-group-item list-group-item-action border-0 sidemenu" type="button" onClick={props.handleProfile} id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">
          <p className="dashboardlist-content">
            <span >Profile</span>
          </p>
        </a>
      </div>
      <div className="onhover">
        <a className="list-group-item list-group-item-action border-0 sidemenu" type="button" onClick={props.handleVideos} id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">
          <p className="dashboardlist-content">
            <span >My Videos</span>
          </p>
        </a>
      </div>
      <div className="onhover">
        <a className="list-group-item list-group-item-action border-0 sidemenu" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">
          <p className="dashboardlist-content">
            <span>Comparison</span>
          </p>
        </a>
      </div>
    </div>
  )
}

export default Sidebar;