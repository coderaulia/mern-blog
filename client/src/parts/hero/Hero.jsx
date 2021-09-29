import "./hero.css"

export default function Header() {
   return (
      <div className="hero">
         <div className="heroTitles">
            <span className="heroTitleSm">Coderaulia</span>
            <span className="heroTitleLg">Blog</span>
         </div>
         <img src="https://images.pexels.com/photos/590029/pexels-photo-590029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="from Pexels" className="heroImg"/>
      </div>
   )
}
