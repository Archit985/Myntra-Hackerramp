
const ProfileForm = () => {
  return (
    <form className="form-section">
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Email</label>
          <input type="email" className="form-control w-75" placeholder="Email" />
        </div>
        <div className="form-group col-md-6">
          <label>Password</label>
          <input type="password" className="form-control w-75" placeholder="Password" />
        </div>
      </div>
      <div className="form-group">
        <label>Address</label>
        <textarea className="form-control address-section" ></textarea>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>City</label>
          <input type="text" className="form-control w-75" />
        </div>
        <div class="form-group col-md-6">
          <label>State</label>
          <input type="text" className="form-control w-75" />
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  )
}

export default ProfileForm;