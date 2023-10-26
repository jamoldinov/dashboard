import React from "react";
import { useFetch } from "../hooks/usefetch";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
const api = "http://localhost:3000/tickets";
console.log(api);

const low = "bg-red";
function Ticket() {
  const { data, isPending, error } = useFetch(api);
  console.log(data);

  return (
    <div>
      <Navbar />
      <div className="my-10">
        <span className="flex justify-between items-center">
          {" "}
          <div>
            <h2 className="text-2xl">Tickets</h2>
            <p>Currently open tickets.</p>
          </div>
          <Link to="/form" className="btn btn-primary rounded-xl">
            New Ticket
          </Link>
        </span>
      </div>
      {data &&
        data.map((item) => {
          console.log(item.id)
          return (
            <Link to={`/tickets/${item.id}`} key={item.id}>
              <div className="gap-2 q p-2 bg-white rounded-xl m-2">
                <h1 className="mt-4 mb-4 font-bold text-black">
                  Title: {item.title}
                </h1>
                <h3 className="pb-4"> Body: {item.body.slice(0, 150)} </h3>
                <div className="flex justify-end w-full ml-auto">
                  <span className="bg-slate-500 p-1 rounded-lg text-white">
                    {item.priority}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default Ticket;
