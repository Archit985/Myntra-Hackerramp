//import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import MyVideos from './components/MyVideosSection/MyVideos';
import { useState } from 'react';

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
          <div className="col-md-2 ">
            <Sidebar handleProfile={handleProfile} handleVideos={handleVideos} />
          </div>
          <div className="col-md-10">
            {videos && <MyVideos />}
            {profile && <Profile />}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;