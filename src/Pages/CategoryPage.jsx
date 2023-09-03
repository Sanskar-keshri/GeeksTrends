import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';
import "../components/Blogs.css"
import "../App.css"

const CategoryPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

  return (
    <div className='mt-[5%] mb-[1%]'>
      <Header/>
      <div className='flex justify-center items-center gap-x-5' id="backButton">
        <button
        className='rounded-md border-2 px-4 py-1'
        onClick={() => navigation(-1)}
        >
            Back
        </button>
        <h2 className="font-bold text-lg"> 
            Blogs on <span className="italic underline font-bold">{category}</span>
        </h2>
      </div>
        <Blogs/>
      <Pagination/>
    </div>
  )
}

export default CategoryPage
