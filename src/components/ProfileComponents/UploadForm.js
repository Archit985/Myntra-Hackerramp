import { useState } from "react";



const UploadForm = () => {

  const [handle, setHandle] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");


  const handleHandl = (e) => {
    e.preventDefault();
    setHandle(e.target.value);
  }
  const handleTag = (e) => {
    e.preventDefault();
    setTag(e.target.value)
  }
  const handleDescription = (e) => {
    e.preventDefault();
    setDescription(e.target.value)
  }

  const handleSubmitData = async (e) => {
    e.preventDefault();
    try {
      const items = { handle, tag, description };
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(items)
      };
      const response = await fetch('https://hell-yeah-myntra-api.herokuapp.com/posts/add', requestOptions);
      const data = await response.json();
      console.log(data)

    } catch (error) {
      console.log(error)
    }

  }



  return (
    <form className="form-section" onSubmit={handleSubmitData}>
      <div className="form-row">
        <div className="form-group">
          <label>Handle</label>
          <input type="text" className="form-control" value={handle} onChange={handleHandl} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <input type="file" className="form-control" />
        </div>
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea className="form-control address-section" value={description} onChange={handleDescription} ></textarea>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Tag</label>
          <input type="text" className="form-control w-75" value={tag} onChange={handleTag} />
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary form-button" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary form-button" data-bs-dismiss="modal" >Save changes</button>
      </div>
    </form>
  )
}

export default UploadForm;