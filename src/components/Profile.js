import profileImg from "./profile.png"
import ProfileForm from "./ProfileComponents/ProfileForm";
//import RecentPost from "./ProfileComponents/RecentPost";
import MyVideos from "./MyVideosSection/MyVideos"
import UploadForm from "./ProfileComponents/UploadForm";

const Profile = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <img src={profileImg} className="profile-img" alt="profile" />
        </div>
        <div className="col-md-3">
          <button type="button" className="btn btn-secondary editProfile" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit Profile</button>
          <p className="followers">20k Followers</p>
        </div>
        <div className="col-md-3">
          <button type="button" className="btn btn-secondary uploadVideo" data-bs-toggle="modal" data-bs-target="#exampleModal1">Upload Video</button>
          <p className="videoPost">100 Video</p>
        </div>
      </div>
      <hr className="hrSeparation"></hr>
      <div className="row recent Post">
        <MyVideos />
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <ProfileForm />
          </div>
        </div>
      </div>
      <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <UploadForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;