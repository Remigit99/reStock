import { MdDevices } from "react-icons/md";
import { FaShirt } from "react-icons/fa6";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaTv } from "react-icons/fa6";
import { SlNotebook } from "react-icons/sl";
import { IoWatchOutline } from "react-icons/io5";
import "../../styles/featuredCat.css"


const Popularcat = [
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

const PopularCategory = () => {
    return (
        <>
            <div className="popularCatHeader">
                <h2>Popular Products</h2>
                <p>
                    Start browsing now to discover the perfect
                    items that suits your needs and preferences.
                </p>
            </div>


            <div className="PopularCatMain">

                {
                    Popularcat.map(({ id, icon, catTitle, num }) => {

                        return (<article className="PopularItem" key={id} >
                            <div className="Popular_icon" >
                                {icon}
                            </div>

                            <div className="Popular_bottom">
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

export default PopularCategory