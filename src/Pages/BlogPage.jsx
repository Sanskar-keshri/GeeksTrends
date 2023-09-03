import React, { useContext } from 'react'
import { useNavigate} from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';
import "../components/Blogs"
import "../components/Blogs.css"
import "./Spinner.css"
import "../App.css"

const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState(null);
    const[relatedblogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading, loading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        console.log("URL is: ");
        console.log(url);
        try {
            const res = await fetch(url);
            const data = await res.json();
            
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error) {
            console.log("Error in fetching Related blog posts: ",error);
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect( () => {
        if(blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname] )

  return (
    <div className='mt-[70px]'>
      <Header/>
      <div className='container'>
      <div className='BlogCategory'>
        <button
        onClick={() => navigation(-1)}
        className="border-2 border-gray-300 py-1 px-4 rounded-md"
        >
            Back
        </button>
      {
        loading ?
        (<div className='min-h-[80vh] w-full flex justify-center items-center'>
            <p className='spinner' id='loadingPage'></p>
            <p className="flex text-center font-bold text-3xl" id='loadingPage'> Loading</p>
        </div>) :
        blog ?
        (<div>
            <BlogDetails post={blog} />
            <h2 className='font-bold text-xl mt-[5%]'> Related Blogs </h2>
            {
                relatedblogs.map( (post) => (
                    <div key = {post.id}>
                        <BlogDetails post={post} />
                    </div>
                ) )
            }

        </div>) :
        (<div>
            <p>No Blog Found</p>
        </div>)
       
      }
       </div>
       </div>
    </div>
  )
}

export default BlogPage
