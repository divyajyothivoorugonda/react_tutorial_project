const CustomCards = (props) => {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={props.item.image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.item.product_name}</h5>
                <p className="card-text">{props.item.description}</p>
                <p className="card-text">{props.item.cost}</p>
                <a className="btn btn-primary" onClick={()=>props.AddCart(props.item)}>Add to cart</a>
                <a className="btn btn-primary" onClick={()=>props.WishList(props.item)}>WISH</a>
            </div>
        </div>
    );
}
export default CustomCards;