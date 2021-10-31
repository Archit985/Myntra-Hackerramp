//import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import MyVideos from './components/MyVideosSection/MyVideos';
import { useState } from 'react';
//import { Navbar } from 'reactstrap';
import Navbar from "./components/Navbar"

function App() {
  const [profile, setProfile] = useState(true);
  const [videos, setVideos] = useState(false);
  const handleProfile = () => {
    setProfile(true);
    setVideos(false);
  }
  const handleVideos = () => {
    setProfile(false);
    setVideos(true);
  }
  return (
    <BrowserRouter>
      <div className="conatiner" style={{ overflowY: "hidden", overflowX: "hidden" }}>
        <div className="row">
          <Navbar />
        </div>
        <div className="row">
          <div className="col-md-2 sidebarColumn">
            <Sidebar handleProfile={handleProfile} handleVideos={handleVideos} />
          </div>
          <div className="col-md-10  sidebarRightColumn">
            {videos && <MyVideos />}
            {profile && <Profile />}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;