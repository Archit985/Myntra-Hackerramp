import SampleImg from "../profile.png"
const VideoCard = (props) => {
  return (
    <div className="col-6 card-parent">
      <div className="card my-4">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={SampleImg} className="img-fluid rounded-start p-3 " alt="Sample" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.videoData.title}</h5>
              <p className="card-text">{props.videoData.body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default VideoCard;