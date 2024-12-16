import { Link, useNavigate } from "react-router-dom"
import "../../styles/navStyle.css"
// import { navLinks } from "../../utlis/navlinks"
import Search from "./Search"
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";


const Navbar = () => {

  const navigate = useNavigate()

  return (
    <nav>
      <div className="container nav__container">
        <div className="nav__container-left">
          <Link to="/" className="logo">
            <h3>re<span>Stock</span></h3>
          </Link>
        </div>

        <div className="search__box" 
        onClick={() => navigate("/search")}
        >
          <span>
            <CiSearch className="icon" />
          </span>
          <Search />
        </div>
        {/* 
        <div className="nav__container-left">
          <div className="menu__links">
            {
              navLinks.map(({ id, title, path }) => <Link to={path} key={id}>{title}</Link>)
            }
          </div>


        </div> */}

        <div className="reg_login">

          <Link to="/login" className="btn loginBtn">Login</Link>
          <Link to="/register" className="btn regBtn" >Sign Up</Link>

          <Link to={"/cart"} className="cartWrapper">
            <span className="cartmain">
              <CiShoppingCart className="icon" />
              <span className="cartCount">9</span>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar