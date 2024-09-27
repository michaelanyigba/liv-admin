import React, { useEffect, useState } from 'react'
import postImage from "../../assets/images/post-img1.jpg"
import postImage1 from "../../assets/images/post-img.png"
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const ViewPostMainPage = () => {
  const [allProducts, setAllProducts] = useState([])
  const [randomUsers, setRandomUsers] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    getImage()
  }, [searchTerm])

  const getImage = async () => {
    try {
      await fetch(`/api/post/get-post?search=${searchTerm}`, {
        method: "GET",
      }).then((res) => res.json()).then((data) => {
        setAllProducts(data.data)
      })

    } catch (error) {
      console.log("Error: ", error)
    }
  }


  
const handleDelete = async(id)=> {
  try {
      const response = await fetch(`/api/post/deletePost/${id}`, {
          method: "DELETE", 
          headers: {
              "Content-Type": "application/json"
          }
      })
      if(response.ok){
          toast.success("Post deleted successfully")
          navigate("/addPost")
      }else{
          const result = await response.json()
          console.log("Failed in deleting Post: ", result.message)
          alert("Failed to delete Post")
          
      }
      
  } catch (error) {
      console.error("Error deleting Post: ", error)
      
  }
}

  return (
    <div className=' w-2/3 bg-gray-100 overflow-y-scroll'>
      <div className=" w-full h-[60px] flex items-center ps-4 bg-pink-500 ">
        <p className="text-white font-serif text-[40px]">View Posts</p>
      </div>

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

      {/* next */}

   {allProducts.length === 0 ? <h1 className=' text-red-600 text-[40px] flex justify-center'> No data </h1>: <div> {allProducts.map(product=>(
      <div className=' m-3 bg-white pt-3'>
      <div className=''><img src={product.image} alt="" className='w-[1400px] h-[600px] object-contain' /></div>
      <div className=' p-6'>
        <p className=' text-[30px] font-bold font-serif'>{product.title}</p>
        <p className=' text-[25px]'>{product.desc} </p>
        <div className=' flex flex-row justify-between mt-2'>
          <p className=' font-bold text-[20px] '>12:00pm</p>
          <p className=' font-bold text-[20px]'>24 March 2024</p>
        </div>
        <div className=' flex mt-2 justify-end'>
          <Link to={`/editPost/${product._id}`}>
          <button className=' p-2 bg-primary w-[100px] text-white text-[20px] rounded-sm cursor-pointer me-9'>Edit</button>
          </Link>
          <button onClick={()=>handleDelete(product._id)} className=' p-2 bg-red-600 w-[100px] text-white text-[20px] rounded-sm cursor-pointer'>Delete</button>
        </div>
      </div>
    </div>
    ))}</div>}
      
     


    </div>
  )
}

export default ViewPostMainPage