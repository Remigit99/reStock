import { MdDevices } from "react-icons/md";
import { FaShirt } from "react-icons/fa6";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaTv } from "react-icons/fa6";
import { SlNotebook } from "react-icons/sl";
import { IoWatchOutline } from "react-icons/io5";
import "../../styles/featuredCat.css"


const featuredcat = [
    {
        id: 1,
        catTitle: "Devices",
        icon: <MdDevices />,
        num: "82k"
    },
    {
        id: 2,
        catTitle: "Fashions",
        icon: <FaShirt />,
        num: "90k"
    },
    {
        id: 3,
        catTitle: "Gaming",
        icon: <IoGameControllerOutline />,
        num: "64k"
    },
    {
        id: 4,
        catTitle: "Electronics",
        icon: <FaTv />,
        num: "165k"
    },
    {
        id: 5,
        catTitle: "E-books",
        icon: <SlNotebook />,
        num: "29k"
    },
    {
        id: 6,
        catTitle: "Accessories",
        icon: <IoWatchOutline />,
        num: "212k"
    },
]

const FeaturedCategory = () => {
    return (
        <>
            <div className="featuredCatHeader">
                <h2>Featured Category</h2>
            </div>


            <div className="featuredCatMain">

                {
                    featuredcat.map(({ id, icon, catTitle, num }) => {

                        return (<article className="featuredItem" key={id} >
                            <div className="featured_icon" >
                                {icon}
                            </div>

                            <div className="featured_bottom">
                                <h5>{catTitle}</h5>
                                <p>{num} products</p>
                            </div>
                        </article>)
                    })
                }
            </div>


        </>
    )
}

export default FeaturedCategory