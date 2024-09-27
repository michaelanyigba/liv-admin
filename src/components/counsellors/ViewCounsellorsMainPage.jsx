import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import userImage from "../../assets/images/user.png"
import toast from "react-hot-toast";
import { Link , useParams, useNavigate} from "react-router-dom";


const ViewCounsellorsMainPage = () => {
    const [loading, setLoading] = useState(false);
    const [counsellors, setCounsellors] = useState([]) 
    const [searchTerm, setSearchTerm] = useState("")
    const navigate = useNavigate();

    useEffect(()=>{
        const getCounsellors = async () =>{
            setLoading(true);

            try {
                const res = await fetch(`/api/counsellors/all?search=${searchTerm}`);
                const data = await res.json();
                setCounsellors(data)
                if(data.error){
                    throw new Error(data.error);
                }
                
            } catch (error) {
                toast.error(error.message);
                
            }finally{
                setLoading(false);
            }
        }
        getCounsellors();
    },[searchTerm]);

    // deleting the counsellor
    const handleDelete = async(id)=> {
        try {
            const response = await fetch(`/api/counsellors/deleteCounsellor/${id}`, {
                method: "DELETE", 
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if(response.ok){
                toast.success("Counsellor deleted successfully")
                navigate("/addCounsellors")
            }else{
                const result = await response.json()
                console.log("Failed in deleting counsellor: ", result.message)
                alert("Failed to delete Counsellor")
                
            }
            
        } catch (error) {
            console.error("Error deleting Counsellor: ", error)
            alert("An error occured while deleting counsellor")
            
        }
    }



  return (
    <div className=" w-2/3 bg-gray-100 overflow-y-scroll ">
      <div className=" w-full h-[60px] flex items-center ps-4 bg-pink-500 ">
        <p className="text-white font-serif text-[25px]">View Counsellors</p>
      </div>
      <div className=" flex justify-center items-center mt-6 h-9">
        <div className=" flex me-8  items-center justify-center rounded-md ms-2 h-4 ">
          <input
            type="text"
            value={searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value)}
            placeholder="Search"
            className=" p-4 w-[400px] outline-1 rou" 
          />
        </div>
      </div>
      {counsellors.length ===0 ? <h1 className=" text-red-500 font-bold text-[30px] flex justify-center mt-5">No data</h1>: <div className=" w-[99%] bg-white  rounded-md shadow-xl mx-auto mt-6">
        <div className=" text-gray-400 font-serif px-4 py-4">
          <p>Counsellor Details</p>
        </div>
        <div>
          <div className="overflow-x-auto mb-3 h-full">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">          
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    USer Id
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fullname
                  </th>
                  
                 
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Gender
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    BIO
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {counsellors.map(counsellor=>(
                <tr key={counsellor._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{counsellor._id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{counsellor.name} </td>
                
                  <td className="px-6 py-4 whitespace-nowrap">
                    {counsellor.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{counsellor.gender}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{counsellor.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{counsellor.bio}</td>
                  <td className="px-6 py-4 whitespace-nowrap flex">
                    <Link to={`/editCounsellors/${counsellor._id}`}>
                    <button className="ms-4 rounded-sm w-[70px] text-white font-mono bg-blue-600 py-2">
                      Edit
                    </button>
                    </Link>
                    <button onClick={()=> handleDelete(counsellor._id)}  className="ms-4 rounded-sm w-[70px] text-white font-mono bg-red-600 py-2">
                      Delete
                    </button>
                  </td>
                </tr>
               ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default ViewCounsellorsMainPage;
