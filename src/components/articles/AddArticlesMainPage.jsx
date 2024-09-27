import React, { useRef, useState } from "react";
import useAddArticles from "../../hooks/useAddArticles";


const AddArticlesMainPage = () => {
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });

  const { loading, addArticles } = useAddArticles();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addArticles(inputs);
   inputs.title = ""
   inputs.content = ""
  };

  return (
    <div className=" w-2/3 bg-gray-100 overflow-y-scroll ">
      <div className=" w-full h-[60px] flex items-center ps-4 bg-pink-500 ">
        <p className="text-white font-serif text-[25px] ms-11">Add Article</p>
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
              <textarea  name="" value={inputs.content} onChange={(e)=> setInputs({...inputs, content: e.target.value})} cols={55}  rows={15}  className=" border-2 outline-none" id=""></textarea>
         
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
                  "Add Article"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddArticlesMainPage;
