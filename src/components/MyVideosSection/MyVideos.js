
import React from 'react'
import ReactPaginate from 'react-paginate';
import VideoCard from "./VideoCard";

class MyVideos extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      offset: 0,
      displayData: [],
      orgtableData: [],
      perPage: 12,
      currentPage: 1
    }
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
      currentPage: selectedPage,
      offset: offset
    }, () => {
      this.loadMoreData()
    });
    window.scrollTo(0, 0);

  };

  loadMoreData() {
    const data = this.state.orgtableData;

    const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      displayData: slice
    })

  }




  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        return (
          this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),
            orgtableData: data,
            displayData: data.slice(this.state.offset, this.state.offset + this.state.perPage)
          })
        )
      })
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.displayData.map((data) => <VideoCard key={data.id} videoData={data} />)}
        </div>
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"} />
      </div>
    )
  }
}

export default MyVideos;