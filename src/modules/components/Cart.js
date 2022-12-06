import { connect } from 'react-redux';
import React from 'react'
import Navbar from './Navbar';
import { IncreaseQuantity,DecreaseQuantity,DeleteCart } from '../../redux/actions/actions';
function Cart({items,IncreaseQuantity,DecreaseQuantity,DeleteCart}){
  let ListCart = [];
    let TotalCart=0;
   Object.keys(items.Carts).forEach(function(item){
        TotalCart+=items.Carts[item].quantity * items.Carts[item].cost;
        ListCart.push(items.Carts[item]);
    });
    function TotalPrice(price,tonggia){
        return Number(price * tonggia).toLocaleString('en-US');
    }

  return (
    <div>
      <Navbar />

      <h1>Your Shop Products</h1>

      {ListCart.map((item,key) => { return (        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={item.image} alt="Card image cap" style={{width: '150px',height:'100px'}} />
            <div className="card-body">
                <h5 className="card-title">{item.product_name}</h5>
                <p>Price: {item.cost} X  {item.quantity}</p>
                <p>Total price for this item: {TotalPrice(item.cost, item.quantity)} </p>
                <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>DecreaseQuantity(key)}>-</span>
                <span className="btn" style={{borderColor:'black'}}>{item.quantity}</span>
                <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>IncreaseQuantity(key)}>+</span>
                <span className="btn btn-primary" style={{margin:'20px'}} onClick={()=>DeleteCart(key)}>X</span>
            </div>
        </div>
) })}
<p>{Number(TotalCart).toLocaleString("en-US")} $</p>
    </div>
  )
}

const mapStateToProps = state =>{
    return{
        items:state.fetchProducts
        //items: state.fetchProducts['Carts']

    }
}

export default connect(mapStateToProps, {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart
})(Cart);