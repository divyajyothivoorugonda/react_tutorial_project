const CustomCards = (props) => {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={props.item.image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.item.product_name}</h5>
                <p className="card-text">{props.item.description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}
export default CustomCards;