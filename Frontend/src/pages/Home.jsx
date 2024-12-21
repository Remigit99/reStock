
import headerImg from "../assets/investo_header.png"

import "../../styles/homeStyle.css"
import { Link } from "react-router-dom"
import { ArrowRight, Facebook, TwitterIcon, Instagram, Youtube } from "lucide-react"
// import Search from "../components/Search"
import FeaturedCategory from "../components/FeaturedCategory"
import PopularCategory from "../components/PopularProducts"

const Home = () => {
    return (
        <>
            <header>
                <div className="container header__container">

                    {/* <Search/> */}
                    <div className="header_container-left">
                        <h1>
                            Upgrade Wardrobe
                        </h1>
                        <h1 className="mini">
                            by Our New Collections
                        </h1>


                        <div className="header_parag">
                            <p>
                                Explore our vast selections og high-quality Products
                                ranging from fashion and electronics to home essentials
                                and beyound.
                            </p>
                        </div>

                        <Link to="/" className="btn startBtn">
                            <p>Explore our Products</p>  <ArrowRight /> </Link>


                    </div>
                    <div className="header_container-right">

                        <img src={headerImg} className="header_img" />
                    </div>
                </div>
            </header>

            <section className="featured">
                <div className="container featured__container">
                    <FeaturedCategory />
                </div>
            </section>

            <section className="popular">
                <div className="container popular__container">

                    <PopularCategory />
                </div>
            </section>


            <footer>
                <div className="container footer__container">
                    <div className="footer__container-left">
                        <Link to="/" className="logo">
                            <h3>rem<span>Vento</span></h3>
                        </Link>

                        <p>
                            Invest with confidence.
                        </p>

                        <div className="footer__socials">
                            <Facebook />
                            <TwitterIcon />
                            <Instagram />
                            <Youtube />
                        </div>
                    </div>


                    <div className="footer__container-right">

                        <article>
                            <h5>Company</h5>
                            <Link to="/">About Us</Link>
                            <Link to="/">Contact Us</Link>
                            <Link to="/">Career</Link>
                            <Link to="/">Blog</Link>
                        </article>

                        <article>
                            <h5>Features</h5>
                            <Link to="/">Pricing</Link>
                            <Link to="/">Products</Link>
                            <Link to="/">Updates</Link>
                            <Link to="/">Ivesting</Link>
                            <Link to="/">Options</Link>
                            <Link to="/">Overview</Link>
                        </article>

                        <article>
                            <h5>Legal</h5>
                            <Link to="/">Privacy Policy</Link>
                            <Link to="/">Terms of Service</Link>

                        </article>

                    </div>
                </div>
            </footer>

        </>
    )
}

export default Home