import React, { useRef, useState } from "react";
import useAddUser from "../../hooks/useAddUser";
import GenderCheckBox from "../pages/signup/GenderCheckBox";
;



const AddUserMainPage = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    email: "",
    dob: "",
    bio: "",
    password: "",
    confirmPassword: "",
    gender: ""
});

const {loading, addUser} = useAddUser();

const handleCheckboxChange = (gender)=> {
  setInputs({...inputs, gender})
}

const handleSubmit = async (e)=>{
  e.preventDefault();
  await addUser(inputs);
  inputs.fullName = ""
  inputs.username = ""
  inputs.email = ""
  inputs.bio = ""
  inputs.dob = ""
  inputs.gender = ""
  inputs.password = ""
  inputs.confirmPassword = ""

}


  return (
    <div className=" w-2/3 bg-gray-100 overflow-y-scroll ">
      <div className=" w-full h-[60px] flex items-center ps-4 bg-pink-500 ">
        <p className="text-white font-serif text-[25px] ms-11">Add New User</p>
      </div>

      <div className="w-[60%] mx-auto overflow-y-auto ">
        <form onSubmit={handleSubmit}>
          <div className=" w-full pb-3 shadow-lg mt-3 flex flex-col bg-white mb-9 ">
            <div className=" ps-6 py-4 font-bold">
              <p className=" font-serif text-gray-500">Full Name</p>
              <input
                type="text"
                value={inputs.fullName}
                onChange={(e)=> setInputs({...inputs, fullName: e.target.value})}
                placeholder=""
                className=" border-2 rounded-sm w-[250px] h-[40px] mt-2 outline-none ps-2 font-normal "
              />
            </div>
            <div className=" ps-6 py-4 font-bold">
              <p className=" font-serif text-gray-500">Username</p>
              <input
                type="text"
                value={inputs.username}
                onChange={(e)=> setInputs({...inputs, username: e.target.value})}
                placeholder=""
                className=" border-2 rounded-sm w-[250px] h-[40px] mt-2 outline-none ps-2 font-normal "
              />
            </div>
            <div className=" ps-6 py-4 font-bold">
              <p className=" font-serif text-gray-500">Email</p>
              <input
                type="text"
                value={inputs.email}
                onChange={(e)=> setInputs({...inputs, email: e.target.value})}
                placeholder=""
                className=" border-2 rounded-sm w-[250px] h-[40px] mt-2 outline-none ps-2 font-normal "
              />
            </div>
            <div className=" ps-6 py-4 font-bold">
              <p className=" font-serif text-gray-500">Date of Birth</p>
              <input
                type="date"
                value={inputs.dob}
                onChange={(e)=> setInputs({...inputs, dob: e.target.value})}
                placeholder=""
                className=" border-2 rounded-sm w-[250px] h-[40px] mt-2 outline-none ps-2 font-normal "
              />
            </div>
            <div className=" ps-6 py-4 font-bold">
              <p className=" font-serif text-gray-500">Bio</p>
              <textarea  name="" value={inputs.bio} onChange={(e)=> setInputs({...inputs, bio: e.target.value})} cols={25}  rows={3}  className=" border-2" id=""></textarea>
         
            </div>
            <div className=" ps-6 py-4 font-bold">
              <p className=" font-serif text-gray-500">Gender</p>
             <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>
            </div>
    
            <div className=" ps-6 py-4 font-bold">
              <p className=" font-serif text-gray-500">Password</p>
              <input
              type="password"
              value={inputs.password}
              onChange={(e)=> setInputs({...inputs, password: e.target.value})}
                placeholder=""
                className=" border-2 rounded-sm w-[250px] h-[40px] mt-2 outline-none ps-2 font-normal "
              />
            </div>
    
            <div className=" ps-6 py-4 font-bold">
              <p className=" font-serif text-gray-500">Confirm Password</p>
              <input
               type="password"
               value={inputs.confirmPassword}
               onChange={(e)=> setInputs({...inputs, confirmPassword: e.target.value})}
                className=" border-2 rounded-sm w-[250px] h-[40px] mt-2 outline-none ps-2 font-normal "
              />
            </div>
            <div className=" font-serif ms-6 mt-5">
              <button type="submit" disabled={loading}
                className="  bg-green-500 w-[30%] mx-auto text-white p-2 rounded-sm"
              >
              {loading ? <span className=" loading loading-spinner"></span> : "Add User"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddUserMainPage;
