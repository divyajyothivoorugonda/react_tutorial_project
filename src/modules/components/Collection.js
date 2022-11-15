import CustomCards from "./CustomCards";
import { useState, useEffect } from "react";
import products from "../../data/apiproducts.json";
const Collection = () => {
    const [accessories, setAccessories] = useState();
    const [jwellery, setJwellery] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setAccessories(products.accessories);
        setJwellery(products.jwellery);
        setIsLoading(false);
    }, [])

    return (
        <div>
            <br /><h3 style={{ textAlign: 'center' }}>COLLECTION</h3>
            <h4 style={{ textAlign: 'center' }}>Our Top Collection</h4>
            {/*<div className="collection-center">*/}
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Accessories</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Jewellery</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Dress collection</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Footwear</button>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent" >
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                        {isLoading === false ? <div className="inline-collection">{accessories.map((item) => { return <CustomCards key={item.id} item={item} /> })}</div> : "Loading"}


                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                        {isLoading === false ? jwellery.map((jewitem) => { return <CustomCards key={jewitem.id} item={jewitem} /> }) : "Loading"}
                    </div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">...</div>
                    <div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabIndex="0">...</div>
                </div>     
        {/*</div>*/}
        </div>
    )
}
export default Collection;