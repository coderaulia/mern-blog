import './home.css';
import { useState, useEffect } from 'react';
import Hero from '../../parts/hero/Hero'
import Blog from '../../parts/blog/Blog'
import Sidebar from '../../parts/sidebar/Sidebar'
import axios from "axios";
import { useLocation } from 'react-router';

export default function Home() {
   const [posts, setPosts] = useState([]);
   const {search} = useLocation();

   // fetch data from api using axios
   // set the api port on package.json
   useEffect(() => {
      const fetchPosts = async () => {
         const res = await axios.get("/posts" + search);
         setPosts(res.data)
      }
      fetchPosts()
   }, [search])
   return (
      <>
         <Hero/>
         <div className="home">
            <Blog posts={posts}/>
            <Sidebar/>
         </div>
      </>
   )
}
