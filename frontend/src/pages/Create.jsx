import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();

 const [form, setForm] = useState({
  title: "",
  link: "",
  description: "",
  });

  const handleChange = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  }

  const handleSubmit = async(e) =>  {
    e.preventDefault();
    let response;
    try{
      response = await axios.post(`${import.meta.env.VITE_API_URL}/api/setAnime`,form);
      console.log(response.data);
    }catch(e){
      console.log("error in request");
      return;
    }
    

    setForm({
      title: "",
      link: "",
      description: "",
    });

    navigate("/");
  };

  return (
    <main className="container">
      <div className="form_area">
      <h1 className="title">Share Anime</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="form_group">
            <label htmlFor="title" className="sub_title">
              Anime Name
            </label>
            <input
              type="text"
              className="form_style"
              id="title"
              placeholder="Enter anime name"
              value={form.title}
              onChange={handleChange}
            />
          </div>
          <div className="form_group">
            <label htmlFor="link" className="sub_title">
              Link
            </label>
            <input
              type="url"
              className="form_style"
              id="link"
              placeholder="Enter anime link"
              value={form.link}
              onChange={handleChange}
            />
          </div>
          <div className="form_group">
            <label htmlFor="description" className="sub_title">
              Description
            </label>
            <input
              type="text"
              className="form_style"
              id="description"
              placeholder="Enter your description"
              value={form.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <button className="btn">Submit</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Create;
