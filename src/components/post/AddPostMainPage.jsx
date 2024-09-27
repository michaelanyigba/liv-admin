import React, { useRef, useState } from "react";

import { MdDriveFolderUpload } from "react-icons/md";
import noImage from "../../assets/images/noimage.jpg"
import toast from "react-hot-toast";



const AddPostMainPage = () => {
  const [desc, setDesc] = useState("");
  const [file , setFile] = useState(null);
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const fileInputRef = useRef(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');
  const [imageBase, setImageBase] = useState("");

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onloadend = ()=>{
        setImage(file);
        setImagePreviewUrl(reader.result)
        setImageBase(reader.result.split(",")[1]);
      }
      reader.onerror = error => {
        console.log("Error: ", error)
      }
      reader.readAsDataURL(file);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault()
   try {
    fetch("/api/post/add", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        base64: imagePreviewUrl,
        title,
        desc
      })
    }).then((res)=> res.json().then((data)=> console.log(data)))
    toast.success("Post added successfully")
   } catch (error) {
    alert("Image too large")
    console.log("Error: ", error)
    
   }
  };

  return (
    <div className=" w-2/3 bg-gray-100 overflow-y-scroll">
      <div className="bg-pink-500 h-[80px] flex items-center">
        <p className=" text-white font-serif text-[40px] ms-4">Add New Post</p>
      </div>

      <div className="w-[60%] mx-auto">
        <form>
          <div className=" shadow-md">
            <div className=" bg-white h-[350px] w-full flex items-center justify-around ">
              <div className=" py-0 ps-2">
                {image ? (
                  <img src={imagePreviewUrl} alt="" className="h-[250px]" />
                ) : (
                  <img src={noImage} alt="" className=" h-[250px] " />
                )}
              </div>
              <div>
                <MdDriveFolderUpload
                  onClick={handleIconClick}
                  className="text-pink-500 cursor-pointer"
                  size={60}
                  
                />
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </div>

          <div className=" w-full h-[630px] shadow-lg mt-3 flex flex-col bg-white mb-9">
            <div className=" ps-6 py-4 font-bold">
              <p className=" font-serif text-gray-500">Title</p>
              <input
                name="title"
                onChange={(e)=>setTitle(e.target.value)}
                type="text"
                placeholder=""
                className=" border-2 rounded-sm w-[450px] h-[60px] mt-2 outline-none ps-2 font-normal "
              />
            </div>
            <div className=" ps-6 py-4 font-bold">
              <p className=" font-serif text-gray-500">Description</p>
              <textarea
                onChange={(e)=> setDesc(e.target.value)}
                name="desc"
                id=""
                cols="52"
                rows="8"
                className=" border-2 mt-2 font-normal outline-none ps-2 pt-2"
              ></textarea>
            </div>
    
            <div className=" font-serif ms-6 mt-5">
              <button
              type="submit"
                onClick={handleClick}
                className="  bg-green-500 w-[40%] mx-auto text-white p-2 py-3 rounded-sm text-[25px]"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddPostMainPage;
