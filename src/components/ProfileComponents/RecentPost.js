import SampleImg from "../profile.png"

const RecentPost = () => {
  return (
    <div className="container">
      <div className="row">
        <p className="recentPosts">Recent Posts</p>
      </div>
      <div className="row">
        <div className="col-6 card-parent">
          <div className="card my-4">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={SampleImg} className="img-fluid rounded-start p-3 " alt="Sample" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 card-parent">
          <div className="card my-4">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={SampleImg} className="img-fluid rounded-start p-3 " alt="Sample" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentPost;