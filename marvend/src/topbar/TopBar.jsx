import "./topbar.css"
import MyPic from "../images/IMG_20211021_131109_853.webp";


export default function TopBar() {
  const imageWithFallback = ({ src }) => {
    const imgRef = useRef();
    const onImageError = () => imgRef.current.src="/fallback-image.png";
    return (
      <img ref={imgRef} src={src} onError={onImageError} />
    )
  }

  return (
      <div className="top">
        <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">HOME</li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">WRITE</li>
            <li className="topListItem">LOGOUT</li>
          </ul>
        </div>
        <div className="topRight">
        <img className="topImg"
            src="IMG_20211021_131109_853.webp" 
            alt="mypic"
        />

          <i className="topSearchIcon fas fa-search"></i>
        </div>
      </div>
    
  );
}
