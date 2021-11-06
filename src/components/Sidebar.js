
import user from "./user.png"
import Video from "./video.png"
import Comparison from "./comparison.png"
const Sidebar = (props) => {
  return (
    <div className="list-group dashboardSideBar sidemenu" id="list-tab" role="tablist">
      <div className="onhover">
        <a className="list-group-item list-group-item-action border-0 sidemenu" type="button" onClick={props.handleProfile} id="list-home-list" data-toggle="list" role="tab" href="bjbejr" aria-controls="home">
          <div className="dashboardlist-content">
            <div className="row">
              <div className="col-3">
                <img src={user} className="img-fluid user" alt="profile" />
              </div>
              <div className="col-9">
                <span className="sideitems">Profile</span>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="onhover">
        <a className="list-group-item list-group-item-action border-0 sidemenu" type="button" onClick={props.handleVideos} id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">
          <div className="dashboardlist-content">
            <div className="row">
              <div className="col-3">
                <img src={Video} className="img-fluid user" alt="profile" />
              </div>
              <div className="col-9">
                <span className="sideitems">My Videos</span>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="onhover">
        <a className="list-group-item list-group-item-action border-0 sidemenu" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">
          <div className="dashboardlist-content">
            <div className="row">
              <div className="col-3">
                <img src={Comparison} className="img-fluid user comparison" alt="profile" />
              </div>
              <div className="col-9">
                <span className="sideitems comparisonSection">Comparison</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Sidebar;