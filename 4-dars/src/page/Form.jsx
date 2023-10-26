import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import React from "react";
import Navbar from "../components/Navbar";
import { useFetch } from "../hooks/usefetch";

function Form() {
  const { data, isPending, error,  } = useFetch("http://localhost:3000/tickets");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState(null);

  const resetInputs = () => {
    setTitle("");
    setBody("");
    setPriority(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    newData({
      title: title,
      body: body,
      id: uuidv4(),
    });
    resetInputs();
  };
  return (
    <div className="flex flex-col ">
      <div className="pb-20">
        <Navbar />
      </div>
      <div className="flex max-w-sm mx-auto w-full justify-between pb-6">
        <h1 className="text-primary text-2xl">New Ticket</h1>
        <Link to="/" className="">
          go Back
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <form
          className="flex flex-col max-w-sm mx-auto w-full gap-5"
          onSubmit={handleSubmit}
        >
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            placeholder="Type here"
            className="input input-bordered input-accent w-full max-w-sm"
          />
          <textarea
            onChange={(e) => setBody(e.target.value)}
            value={body}
            className="textarea textarea-accent input-accent w-full max-w-sm"
            placeholder="Bio"
          ></textarea>
          <select
            onChange={(e) => setPriority(e.target.value)}
            value={priority}
            className="select select-bordered w-full max-w-sm"
          >
            <option disabled selected>
              low priority
            </option>
            <option>medium priority</option>
            <option>hight priority</option>
          </select>
          <button className="btn btn-primary rounded-xl ">Click</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
