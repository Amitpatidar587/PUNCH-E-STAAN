import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";

export default function Expenditure() {
  const [expenditures, setExpenditures] = useState([]);
  const [TotalFund, setTotalFund] = useState(0);
  const [RemainFund, setRemainFund] = useState(0);
  const [render, setRender] = useState(false);
  const [form, setForm] = useState(false);
  const [area, setArea] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const {setFlashMessage}=useContext(UserContext);
  const user=JSON.parse(localStorage.getItem('user'))

  const handleEdit = (e, expend) => {
    setArea(expend);
    setIsEdit(true);
    openForm();
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setArea((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEdit) {
        await axios
          .put(`http://localhost:8080/expenditures/${area._id}`, { area })
          .then((res) => {
            console.log(res.data);
            closeForm();
          })
          .catch((err) => console.log(err)); 
      } else {
        console.log(area);
        await axios
          .post("http://localhost:8080/expenditures",{area})
          .then((res) => {
            console.log(res.data);
            closeForm(true);
          })
          .catch((err) => console.log(err));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete=async(e)=>{
    if(user.category==='sarpunch'){

      await axios.delete(`http://localhost:8080/expenditures/${e.target.id}`)
      .then(res=>{console.log(res.data)
        setRender(true);
      })
      .catch(err=>console.log(err));
    }else{
      setFlashMessage(`sorry you don't have permission to delete Event`)
    }
  }

  useEffect(() => {
    async function call() {
      try {
        await axios
          .get("http://localhost:8080/expenditures")
          .then((res) => {
            setExpenditures(res.data);
            console.log("res=>", res.data);
            setRender(false);
          })
          .catch((err) => console.log(err));
      } catch (error) {}
    }
    call();
  }, [render]);

  useEffect(() => {
    let total = 0;
    let remain = 0;
    expenditures.forEach((expend) => {
      total += expend.amountPass;
      remain += expend.amountPass - expend.invested;
    });
    setTotalFund(total);
    setRemainFund(remain);
  }, [expenditures]);

  const openForm = () => {
    if(user.category==='sarpunch'){
      setForm(true);
    }else{
      setFlashMessage(`sorry ${user.name} you don't have permission to add and update expenditure chart  `)
    }
  };
  const closeForm = () => {
    setForm(false);
    setArea({});
    setIsEdit(false);
    setRender(true)
  };

  return (
    <div className=" pt-4 pb-3 px-0 mt-1 flex flex-col ">
      <h1 className="text-5xl pt-4 mb-8 animate-fade-in-up   text-center inline-block  mx-auto   font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
        Government Expenditure Details
      </h1>
      <div className="bg-gradient-to-r from-blue-800 to-purple-800 text-center p-2 text-white lg:p-8 md:p-4 pt-4 rounded-lg shadow-lg animate-fade-in">
        <div className="overflow-x-auto">
          <table className="w-full text-center animate-fade-in-up">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="px-4 py-3">Expenditure Category</th>
                <th className="px-4 py-3">Amount sention</th>
                <th className="px-4 py-3">Invested Funds</th>
                <th className="px-4 py-3">Remaining Funds</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {expenditures.map((expend) => (
                <tr key={expend._id} className="border-b border-blue-900 hover:bg-blue-900/20 transition-colors duration-300">
                  <td className="px-4 py-3">{expend.category}</td>
                  <td className="px-4 py-3">{expend.amountPass}</td>
                  <td className="px-4 py-3">{expend.invested}</td>
                  <td className="px-4 py-3">
                    {expend.amountPass - expend.invested}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex text-center items-center justify-center flex-wrap gap-2 ">
                      <button
                        className="text-white bg-blue-400 rounded-md px-2 py-1 hover:scale-110"
                        onClick={(e) => handleEdit(e, expend)}
                      >
                        edit
                      </button>
                      <button
                        id={expend._id}
                        className="text-white bg-blue-400 rounded-md px-2 py-1 hover:scale-110"
                        onClick={(e) => handleDelete(e)}
                      >
                        delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex justify-between items-center animate-fade-in-up">
          <div>
            <p className="font-bold">Total Funds Provided: {TotalFund}</p>
            <p className="font-bold">Total Remaining Funds: {RemainFund}</p>
          </div>
          <div>
            <button
              className="ml-4 border-1 p-2 mr-10 rounded-md bg-blue-500 "
              onClick={openForm}
            >
              Add Fund
            </button>
          </div>
        </div>
      </div>

      {form && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gradient-to-br from-blue-600 to-blue-900 text-white rounded-lg shadow-lg max-w-lg w-full mx-auto p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Edit Event</h2>
              <button
                className="text-white focus:outline-none"
                onClick={closeForm}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="category" className="text-sm font-medium">
                  Expenditure Category
                </label>
                <input
                  id="category"
                  type="text"
                  name="category"
                  value={area.category}
                  onChange={handleChange}
                  className="mt-1 px-3 py-2 border rounded-md w-full bg-blue-800 text-white focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="amoutPass" className="text-sm font-medium">
                  amount Senstion
                </label>
                <input
                  id="amoutPass"
                  type="string"
                  name="amountPass"
                  value={area.amountPass}
                  onChange={handleChange}
                  className="mt-1 px-3 py-2 border rounded-md w-full bg-blue-800 text-white focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="invest" className="text-sm font-medium">
                  Invest Fund
                </label>
                <input
                  id="invest"
                  type="number"
                  name="invested"
                  value={area.invested}
                  onChange={handleChange}
                  className="mt-1 px-3 py-2 border rounded-md w-full bg-blue-800 text-white focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
