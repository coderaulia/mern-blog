import './home.css';
import Hero from '../../parts/hero/Hero'
import Blog from '../../parts/blog/Blog'
import Sidebar from '../../parts/sidebar/Sidebar'

export default function Home() {
   return (
      <>
         <Hero/>
         <div className="home">
            <Blog/>
            <Sidebar/>
         </div>
      </>
   )
}
