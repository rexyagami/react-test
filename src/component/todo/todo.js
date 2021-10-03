import "./todo.css";
import React, { useState, useEffect } from "react";
const fetchURL = "https://jsonplaceholder.typicode.com";

function ToDo() {
  const [data, setData] = useState(null);
  const getData = () => fetch(`${fetchURL}/todos`).then((res) => res.json());

  useEffect(() => {
    getData().then((data) => setData(data));
    console.log(data);
  }, []);
  return (
    <div className="mt-5 pt-3">
      <div className="row justify-content-center">
        <div className="col-12 text-center my-3">
          <h1 className="todo-text">
            To <span>Do</span> List
          </h1>
        </div>
        {data?.map((item) => (
          <div className="col-md-7 my-2">
            <div className="card toto-card">
              <div className="card-body">
                <div className="clearfix">
                  <div className="float-left">
                    <small>
                      {item.id}: {item.title}
                    </small>
                  </div>
                  <div className="float-right">
                    <small>
                      Status:
                      {item.completed ? "Completed" : "Not Completed"}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDo;
