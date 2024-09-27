import React, { useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const EditArticlesMainPage = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });

  useEffect(()=> {
    fetch(`/api/articles/${id}`)
    .then((response)=> response.json())
    .then((data)=> setInputs(data))
    .catch((error)=> console.error("Error fetching articles", error))

  },[id])




  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
        await fetch(`/api/articles/editArticle/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputs)
        }).then((response)=> response.json())
        .then(()=> {
            navigate("/viewArticles")
        })
        
        
    } catch (error) {
        console.error("Error updating article: ", error)
        
    }
  };

  return (
    <div className=" w-2/3 bg-gray-100 overflow-y-scroll ">
      <div className=" w-full h-[60px] flex items-center ps-4 bg-pink-500 ">
        <p className="text-white font-serif text-[25px] ms-11">Edit Article</p>
      </div>

      <div className="w-[60%] mx-auto overflow-y-auto ">
        <form onSubmit={handleSubmit}>
          <div className=" w-full pb-3 shadow-lg mt-3 flex flex-col bg-white mb-9 ">
            <div className=" ps-6 py-4 font-bold">
              <p className=" font-serif text-gray-500">Title</p>
              <input
                type="text"
                value={inputs.title}
                onChange={(e) =>
                  setInputs({ ...inputs, title: e.target.value })
                }
                placeholder=""
                className=" border-2 rounded-sm w-[250px] h-[40px] mt-2 outline-none ps-2 font-normal "
              />
            </div>

            <div className=" ps-6 py-4">
              <p className=" font-serif text-gray-500 font-bold">Content</p>
              <textarea
                name=""
                value={inputs.content}
                onChange={(e) =>
                  setInputs({ ...inputs, content: e.target.value })
                }
                cols={55}
                rows={15}
                className=" border-2 outline-none"
                id=""
              ></textarea>
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
export default EditArticlesMainPage;
