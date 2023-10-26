import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useFetch } from "../hooks/usefetch";

const dd = {
  id: "1",
  title: "Fix the links please",
  body: "Lorem ipsum Triforce sit amet, Linkus Hyruleus tem…convallis mauris, in tempus enim tincidunt vitae.",
  priority: "low",
  user_email: "mario@netninja.dev",
};
const itemEl = () => {
  const { id } = useParams();
  console.log(id);

  const url = useFetch("http://localhost:3005/tickets/" + id);
  const { data } = url;
  // const { title } = data;
  console.log(data);
  // const { data, isPending, error } = useFetch(
  //     `http://localhost:3000/tickets/${id}`
  //       );

  return (
    <div>
      {/* <h1>{dd.id}</h1>
      <h2>{data.title}</h2> */}
    </div>
  );
};

export default itemEl;
