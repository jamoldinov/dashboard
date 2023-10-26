import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useFetch } from "../hooks/usefetch";
function Item() {
  const { id } = useParams();
  console.log(id);
  // const url = useFetch("http://localhost:3005/tickets/" + id);
  // const { data, isPending, error } = useFetch(
  //   "http://localhost:3005/tickets/" + id
  // );
  const { data, isPending, error } = useFetch(
    `http://localhost:3000/tickets/${id}`
  );
  // const { data } = url;
  data ? console.log(data.title) : null;
  // const { title, body, user_email
  // } = data;

  // console.log(title, id);
  return (
    <div>
      <Navbar />
      {/* <h1>{title}</h1> */}
     

      {data && <div>{ <div className="flex flex-col gap-3 mt-8">
        <h1>
          <i>Title</i>: {`${data.title}`}
        </h1>
        <p>
          <i>Body</i>: {`${data.body}`}
        </p>
        <div className="flex justify-between items-center mt-5">
          <span>
            <i>Email</i>: {`${data.user_email}`}
          </span>
          <span>
            <i>Priority</i>: {`${data.priority}`}
          </span>
        </div>
      </div>}</div>}
    </div>
  );
}

export default Item;
