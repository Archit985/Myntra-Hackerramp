import profileImg from "./profile.png"
import ProfileForm from "./ProfileComponents/ProfileForm";

const Profile = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <img src={profileImg} className="profile-img" alt="profile" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ProfileForm />
        </div>
      </div>
    </div>
  )
}

export default Profile;