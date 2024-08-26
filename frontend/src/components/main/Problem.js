import React, { useState, useContext, useEffect } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Problem() {
  const [problem, setProblem] = useState({});
  const [problems, setProblems] = useState([]);
  const navigate=useNavigate();
  const [render, setRender] = useState(false);
  const currUser = JSON.parse(localStorage.getItem("user"));
  const {setFlashMessage}=useContext(UserContext);




  const handleChange = (e) => {
    let { name, value } = e.target;
    setProblem((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e, problem) => {
    problem.status = e.target.value;
    console.log(problem);
    try {
      await axios
        .put(
          `http://localhost:8080/users/${currUser._id}/problems/${e.target.id}`,
          { problem }
        )
        .then((res) => {
          console.log(res.data);
          setRender(true);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    if(!currUser){
      setFlashMessage('please login ')
      navigate('/');
    }
    e.preventDefault();
    problem.name = currUser.name;
    problem.contact = currUser.contact;
    setProblem(problem);
    try {
      await axios
        .post(`http://localhost:8080/users/${currUser._id}/problems`, {
          problem,
        })
        .then((res) => {
          console.log(res.data);
          setRender(true);
          setProblem('')
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (e) => {
    if(currUser._id==e.target.id){
    try {
      console.log("user id and pid =>", currUser._id, e.target.id);
      await axios
        .delete(
          `http://localhost:8080/users/${currUser._id}/problems/${e.target.id}`
        )
        .then((res) => {
          console.log(res.data);
          setRender(true);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }
  };
  useEffect(() => {
    async function call() {
      if (currUser?.category === "sarpunch") {
        await axios
          .get("http://localhost:8080/problems")
          .then((res) => {
            setProblems(res.data)
            console.log('problemss=>',res.data);
          })
          .catch((err) => console.log(err));
        }
      else{
      try {
        await axios
          .get(`http://localhost:8080/users/${currUser._id}/problems`)
          .then((res) => {
            localStorage.setItem("user", JSON.stringify(res.data));
            console.log("data come");
            setRender(false);
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    }
  }
    call();
  }, [render]);

  return (
    <div className=" pt-4 pb-3 px-2 min-h-screen mt-1 flex flex-col ">
      <h1 className="text-5xl pt-4  text-center inline-block  mx-auto   font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
        {" "}
        Villagers problems{" "}
      </h1>
      
      {currUser?.category === "user" ? (
        <>  
      <div className="w-full max-w-md  mx-auto mt-10 py-12 px-4 sm:px-6 lg:px-8 bg-none rounded-lg shadow-lg">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="problem-type"
              className="block text-sm text-white font-medium text-primary-foreground"
            >
              Problem Type
            </label>
            <input
              id="problem-type"
              className="block w-full rounded-md mt-1 text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm text-primary-foreground bg-transparent border-1 border-white px-4 py-2"
              type="text"
              name="problemType"
              placeholder="Enter problem type"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-white text-sm font-medium text-primary-foreground"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="3"
              className="block w-full rounded-m mt-1 shadow-sm text-white focus:border-primary focus:ring-primary sm:text-sm text-primary-foreground bg-transparent border-1 border-white px-4 py-2"
              placeholder="Describe the problem"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-white text-sm font-medium text-primary-foreground"
            >
              Address
            </label>
            <input
              id="address"
              type="text"
              name="address"
              className="block w-full rounded-md  mt-1 shadow-sm text-white focus:border-primary focus:ring-primary sm:text-sm text-primary-foreground bg-transparent border-1 border-white px-4 py-2"
              placeholder="Enter address"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-wrap gap-1">
            <label
              htmlFor="address"
              className="block  text-center pt-1  text-white text-sm font-medium text-primary-foreground"
            >
              Status :
            </label>
            <select
              name="status"
              className="bg-transparent px-2 py-1  border  text-sm rounded-md text-white"
              value={problem.status}
              onChange={handleChange}
            >
              <option value="pending">Pending</option>
              <option value="solved">Solved</option>
            </select>
          </div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm text-white font-medium rounded-md text-primary-foreground bg-blue-800  hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Submit
          </button>
        </form>
      </div>
      <hr className="mt-10 text-white"></hr>

     
          <div className="flex flex-wrap gap-3 justify-center mx-5">
            {currUser.problems.map((problem) => (
              <div>
                <div className="rounded-lg mx-10  border bg-transparent text-card-foreground shadow-sm w-full max-w-md mt-10">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="whitespace-nowrap text-2xl text-center text-white font-semibold leading-none tracking-tight">
                      Customer Details
                    </h3>
                  </div>
                  <div className="p-6 grid gap-4">
                    <div className="grid grid-cols-[minmax(100px,_1fr)_1fr] items-center gap-1">
                      <div className="text-muted-foreground text-gray-300">
                        Name
                      </div>
                      <div className="text-white">{problem.name}</div>
                    </div>
                    <div className="grid grid-cols-[minmax(100px,_1fr)_1fr] items-center gap-1">
                      <div className="text-muted-foreground  text-gray-300">
                        Contact
                      </div>
                      <div className="text-white">{problem.contact}</div>
                    </div>
                    <div className="grid grid-cols-[minmax(100px,_1fr)_1fr] items-center gap-1">
                      <div className="text-muted-foreground text-gray-300">
                        Problem Type
                      </div>
                      <div className="text-white">{problem.problemType}</div>
                    </div>
                    <div className="grid grid-cols-[minmax(100px,_1fr)_1fr] items-center gap-1">
                      <div className="text-muted-foreground text-gray-300">
                        Problem Description
                      </div>
                      <div className="text-white">{problem.description}</div>
                    </div>
                    <div className="grid grid-cols-[minmax(100px,_1fr)_1fr] items-center gap-1">
                      <div className="text-muted-foreground text-gray-300">
                        Address
                      </div>
                      <div className="text-white">{problem.address}</div>
                    </div>
                    <div className="grid grid-cols-[minmax(100px,_1fr)_1fr] items-center gap-1">
                      <div className="text-muted-foreground text-gray-300">
                        status
                      </div>
                      <select
                        name="status"
                        id={problem._id}
                        className="bg-transparent px-2 py-1  border  text-sm rounded-md text-white"
                        value={problem.status}
                        onChange={(e) => handleUpdate(e, problem)}
                      >
                        <option value="pending">Pending</option>
                        <option value="solved">Solved</option>
                      </select>
                      <div
                        className={
                          problem.status == "pending"
                            ? "text-yellow-500"
                            : "text-green-500"
                        }
                      >
                        <b>{problem.status}</b>
                      </div>
                    </div>
                    <button
                      id={problem._id}
                      onClick={handleDelete}
                      className="px-2 py-1 border-1 text-white hover:scale-105 hover:bg-red-600 "
                    >
                      delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : null}

      {currUser?.category === "sarpunch" ?    <>
          <div className="flex flex-wrap gap-3 justify-center mx-5">
            {problems.map((problem) => (
              <div>
                <div className="rounded-lg mx-10  border bg-transparent text-card-foreground shadow-sm w-full max-w-md mt-10">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="whitespace-nowrap text-2xl text-center text-white font-semibold leading-none tracking-tight">
                      Customer Details
                    </h3>
                  </div>
                  <div className="p-6 grid gap-4">
                    <div className="grid grid-cols-[minmax(100px,_1fr)_1fr] items-center gap-1">
                      <div className="text-muted-foreground text-gray-300">
                        Name
                      </div>
                      <div className="text-white">{problem.name}</div>
                    </div>
                    <div className="grid grid-cols-[minmax(100px,_1fr)_1fr] items-center gap-1">
                      <div className="text-muted-foreground  text-gray-300">
                        Contact
                      </div>
                      <div className="text-white">{problem.contact}</div>
                    </div>
                    <div className="grid grid-cols-[minmax(100px,_1fr)_1fr] items-center gap-1">
                      <div className="text-muted-foreground text-gray-300">
                        Problem Type
                      </div>
                      <div className="text-white">{problem.problemType}</div>
                    </div>
                    <div className="grid grid-cols-[minmax(100px,_1fr)_1fr] items-center gap-1">
                      <div className="text-muted-foreground text-gray-300">
                        Problem Description
                      </div>
                      <div className="text-white">{problem.description}</div>
                    </div>
                    <div className="grid grid-cols-[minmax(100px,_1fr)_1fr] items-center gap-1">
                      <div className="text-muted-foreground text-gray-300">
                        Address
                      </div>
                      <div className="text-white">{problem.address}</div>
                    </div>
                    <div className="grid grid-cols-[minmax(100px,_1fr)_1fr] items-center gap-1">
                      <div className="text-muted-foreground text-gray-300">
                        status
                      </div>
                      <select
                        name="status"
                        id={problem._id}
                        className="bg-transparent px-2 py-1  border  text-sm rounded-md text-white"
                        value={problem.status}
                        onChange={(e) => handleUpdate(e, problem)}
                      >
                        <option value="pending">Pending</option>
                        <option value="solved">Solved</option>
                      </select>
                      <div
                        className={
                          problem.status == "pending"
                            ? "text-yellow-500"
                            : "text-green-500"
                        }
                      >
                        <b>{problem.status}</b>
                      </div>
                    </div>
                 
                  </div>
                </div>
              </div>
            ))}
          </div>
        </> : null}
    </div>
  );
}

export default Problem;
