import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";
import Spinner from "../Pages/Spinner"
import "./Blogs.css"
import "../App.css"

export default function Blogs() {
  const { posts, loading } = useContext(AppContext);
  return (
    <div className="flex flex-col gap-y-10 my-4 mt-[70px]">
      <div className="container">
      {loading ? (
        <div className="min-h-[80vh] flex justify-center items-center">
          <Spinner />
          <br />
          <p className="text-center font-bold text-3xl">Loading</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">No Blogs Found !</p>
        </div>
      ) : (
        posts.map((post, index) => (
          <div>
            {
              (index+1)%5==0 || (posts.length-1===index) ? (<div className="lastPost">
                <BlogDetails key={post.id} post={post}/>
              </div>) : (
                <BlogDetails key={post.id} post={post}/>
              )
            }
          </div>
        ))
      )}
      </div>
    </div>
  );
}
