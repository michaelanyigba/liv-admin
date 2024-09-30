import { useState } from "react"
import {useparams, useNavigate} from "react-router-dom"

const useEditArticle = ()=> {
    const {id} = useparams()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const editArticle = async( {title, content})=> {
        setLoading(true)
        try {
            fetch(`https://liv-backend-2.onrender.com/api/articles/editArticles/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(title, content)
            }).then((response)=>response.json())
            .then(()=>{
                navigate("/viewArticles")
            })
            
        } catch (error) {
            
        }

    }

    return {loading, editArticle}

}

export default useEditArticle

