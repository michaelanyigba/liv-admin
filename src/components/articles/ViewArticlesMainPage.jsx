import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import  {Link, useNavigate} from "react-router-dom"

const ViewArticlesMainPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState();
  const [searchTerm, setSearchTerm] = useState("")
  const navigate =  useNavigate()

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);

      try {
        const res = await fetch(`/api/articles/all?search=${searchTerm}`);
        const data = await res.json();
        setArticles(data);
        if (data.error) {
          throw new Error(data.error);
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getArticles();
  }, [searchTerm]);


//   delete article

const handleDelete = async(id)=> {
    try {
        const response = await fetch(`/api/articles/deleteArticle/${id}`, {
            method: "DELETE", 
            headers: {
                "Content-Type": "application/json"
            }
        })
        if(response.ok){
            toast.success("Article deleted successfully")
            navigate("/addArticles")
        }else{
            const result = await response.json()
            console.log("Failed in deleting Article: ", result.message)
            alert("Failed to delete Article")
            
        }
        
    } catch (error) {
        console.error("Error deleting Article: ", error)
        
    }
}

  return (
    <div className=" bg-gray-100 lg:w-[1200px] flex flex-col min-h-screen overflow-y-auto">
        {/* the search and background */}
        <div className=" flex justify-center items-center mt-6 h-9 mb-4">
        <div className=" flex me-8  items-center justify-center rounded-md ms-2 h-4 ">
          <form action="">
          <input
            type="text" 
            placeholder="Search" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}
            className=" p-4 w-[400px] outline-1 mb-3 mt-2 outline-none" 
          />
          </form>
        </div>
      </div>
      {articles.length === 0 ? <h1 className="text-red-500 font-bold text-[30px] flex justify-center mt-5">No data</h1> :
      <div>
        {articles.map((article) => (
        <div key={article._id} className=" bg-white rounded-sm mt-1 mb-2 lg:w-[1100px] lg:mx-auto">
          <p className=" font-bold flex justify-center text-[20px] mt-1 mb-2 md:text-[30px]">
            {article.title}
          </p>
          <p className=" ps-2 pe-1 text-[18px] pb-2 md:text-[25px]">
            {article.content}
          </p>
          <div className=" flex justify-end me-3 mb-3">
            <Link to={`/editArticles/${article._id}`}>
            <button className=" bg-blue-700 py-2 px-3 me-3 text-white rounded-sm">
              Edit
            </button>
            </Link>
            <button onClick={()=>handleDelete(article._id)} className="bg-red-600 py-2 px-3 rounded-sm text-white ">
              Delete
            </button>
          </div>
        </div>
      ))}
      </div>
      }
      
    </div>
  );
};

export default ViewArticlesMainPage;
