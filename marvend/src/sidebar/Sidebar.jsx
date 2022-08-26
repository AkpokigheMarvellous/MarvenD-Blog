import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img 
        src="https://sun9-11.userapi.com/impf/c852132/v852132968/1550a9/JftJMFjJA1c.jpg?size=807x596&quality=96&sign=d524aeee13950ee6f5e6ad6bbbee3f55&type=album" 
        alt=""
        />
       <p>I'm a Full-Stack & Web Developer. I'm a Software Engineer. I'm a Frontend Developer. 
        I'm a Backend Developer. I'm a Desiner and Programmer. I design anything that stays on web
      </p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarItem">CATEGORIES</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Style</li>
        <li className="sidebarListItem">Sport</li>
        <li className="sidebarListItem">Tech</li>
        <li className="sidebarListItem">Cinema</li>
      </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-sqaure"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
      </div>
    </div>
    
  );
}