import React, { useRef, useState } from "react";
import useAddCounsellors from "../../hooks/useAddCounsellors";
import GenderCheckBox from "../pages/signup/GenderCheckBox";
import { useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom"


const AddCounsellorsMainPage = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    bio: "",
    gender: "",
    phone: "",
  });

//   const { loading, addCounsellors } = useAddCounsellors();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  useEffect(()=> {
    fetch(`/api/counsellors/${id}`)
    .then((response)=> response.json())
    .then((data)=> setInputs(data))
    .catch((error)=> console.error("Error fetching counsellors", error))

  },[id])


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
        await fetch(`/api/counsellors/editCounsellor/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputs)
        }).then((response)=> response.json())
        .then(()=> {
            navigate("/viewCounsellors")
        })
        
        
    } catch (error) {
        console.error("Error updating counsellors: ", error)
        
    }
  };


  return (
    <div className=" w-2/3 bg-gray-100 overflow-y-scroll ">
      <div className=" w-full h-[60px] flex items-center ps-4 bg-pink-500 ">
        <p className="text-white font-serif text-[25px] ms-11">Edit Counsellor</p>
      </div>

      <div className="w-[60%] mx-auto overflow-y-auto ">
        <form onSubmit={handleSubmit}>
          <div className=" w-full pb-3 shadow-lg mt-3 flex flex-col bg-white mb-9 ">
          <div className=" ps-6 py-4 font-bold">
              <p className=" font-serif text-gray-500">Full name</p>
              <input
                type="text"
                value={inputs.name}
                onChange={(e) =>
                  setInputs({ ...inputs, name: e.target.value })
                }
                placeholder=""
                className=" border-2 rounded-sm w-[250px] h-[40px] mt-2 outline-none ps-2 font-normal "
              />
            </div>

            <div className=" ps-6 py-4 font-bold">
              <p className=" font-serif text-gray-500">Email</p>
              <input
                type="text"
                value={inputs.email}
                onChange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
                placeholder=""
                className=" border-2 rounded-sm w-[250px] h-[40px] mt-2 outline-none ps-2 font-normal "
              />
            </div>
            <div className=" ps-6 py-4 font-bold">
              <p className=" font-serif text-gray-500">Phone Number</p>
              <input
                type="number"
                value={inputs.phone}
                onChange={(e) =>
                  setInputs({ ...inputs, phone: e.target.value })
                }
                placeholder=""
                className=" border-2 rounded-sm w-[250px] h-[40px] mt-2 outline-none ps-2 font-normal "
              />
            </div>
            <div className=" ps-6 py-4 font-bold">
              <p className=" font-serif text-gray-500">Bio</p>
              <textarea  name="" value={inputs.bio} onChange={(e)=> setInputs({...inputs, bio: e.target.value})} cols={25}  rows={3}  className=" border-2" id=""></textarea>
         
            </div>
            <div className=" ps-6 py-4 font-ld">
              <p className=" font-serif text-gray-500">Gender</p>
              <GenderCheckBox
                onCheckboxChange={handleCheckboxChange}
                selectedGender={inputs.gender}
              />
            </div>
            <div className=" font-serif ms-6 mt-5">
              <button
                type="submit"
                disabled={loading}
                className="  bg-green-500 w-[30%] mx-auto text-white p-2 rounded-sm"
              >
                {loading ? (
                  <span className=" loading loading-spinner"></span>
                ) : (
                  "Update"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddCounsellorsMainPage;
