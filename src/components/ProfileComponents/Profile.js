import MyVideos from "../MyVideosSection/MyVideos"
import UploadForm from "./UploadForm";
import profileImg from "../profile.png"
import ProfileForm from "./ProfileForm";
import RecentPost from "./RecentPost";

function Profile() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img src={profileImg} className="profile-img" alt="profile" />
        </div>
        <div className="col-md-8 pt-md-5">
          <h3>Username</h3>
          <button type="button" className="btn btn-secondary mr-3 mb-2 editProfile" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit Profile</button>
          <button type="button" className="btn btn-secondary mb-2 uploadVideo" data-bs-toggle="modal" data-bs-target="#exampleModal1">Upload Video</button>
          <ul className="list-inline">
            <li className="list-inline-item mr-5"><strong>164</strong> posts</li>
            <li className="list-inline-item mr-5"><strong>188</strong> followers</li>
            <li className="list-inline-item mr-5"><strong>206</strong> following</li>
          </ul>
          <p className="mt-2"><em>Name of User</em> - Description 📷✈️🏕️</p>
        </div>
      </div>
      <hr className="hrSeparation"></hr>
      <div className="row recent Post">
        <h4>Recent Posts</h4>
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
  );
}

export default Profile;