
import "../../styles/featuredCat.css"
import { specCat } from "../../utlis/specCat";
import { Link } from "react-router-dom";
import { Popularcat } from "../../utlis/popularProductsData";



const PopularCategory = () => {
    return (
        <>
            <div className="popularCatHeader">
                <h2>Popular Products</h2>
                <p>
                    Start browsing now to discover the perfect
                    items that suits your needs and preferences.
                </p>

                <div className="specific__container">
                    {
                        specCat.map(item => <Link to="/" className="specItem" key={item.id}> <p>{item.title}</p></Link>)
                    }
                </div>
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