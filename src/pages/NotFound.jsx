import React, { useEffect } from 'react'
import { useParams , useNavigate } from 'react-router-dom'


export default function NotFound() {
    const navigate = useNavigate()
    const params=useParams() ; 
    useEffect(
        ()=>{
            params.id=="3" ? console.log(params) : navigate("/") ;
        }
    )
  return (
    <div>NotFound </div>
  )
}
