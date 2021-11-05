import Profile from './ProfileComponents/Profile';
import MyVideos from './MyVideosSection/MyVideos';
import Comparison from './Comparison';
import Sidebar from './Sidebar';
import { useState } from 'react';
import Navbar from "./Navbar"

const ProfileComp = () => {
  const [profile, setProfile] = useState(true);
  const [videos, setVideos] = useState(false);
  const [comparison, setComparison] = useState(false);
  const handleProfile = () => {
    setProfile(true);
    setVideos(false);
    setComparison(false);
  }
  const handleVideos = () => {
    setProfile(false);
    setVideos(true);
    setComparison(false);
  }
  const handleComparison = () => {
    setProfile(false);
    setVideos(false);
    setComparison(true);
  }
  return (
    <div>
      <div className="container" style={{ overflowY: "hidden", overflowX: "hidden" }}>
        <div className="row">
          <Navbar />
        </div>
        <div className="row">
          <div className="col-md-3 sidebarColumn">
            <Sidebar handleProfile={handleProfile} handleVideos={handleVideos} handleComparison={handleComparison} />
          </div>
          <div className="col-md-9 sidebarRightColumn">
            {videos && <MyVideos />}
            {profile && <Profile />}
            {comparison && <Comparison />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileComp;