import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';
import "../App.css"

const TagPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
  return (
    <div className='mt-[5%]'>
        <Header/>
        <div className='flex justify-center items-center gap-x-5' id='backButton'>
            <button 
            className='rounded-md border-2 px-4 py-1'
            onClick={() => navigation(-1)}
            >
                Back
            </button>
            <h2 className="font-bold text-lg">
                Blogs Tagged <span className="text-blue-700 underline font-bold">#{tag}</span>
            </h2>
        </div>
        <Blogs/>
        <Pagination/>
      
    </div>
  )
}

export default TagPage
