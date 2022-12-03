import { connect } from 'react-redux';
import React from 'react'
import CustomCards from './CustomCards'
import Navbar from './Navbar';
import { fetchProducts } from '../../redux/actions/actions'
function Cart(props) {
  return (
    <div>
      <Navbar />

      <h1>Your Shop Products</h1>

      {props.isloading === false ? props.products.map((item) => { return <CustomCards key={item.id} item={item} /> }) : 'loading'}


    </div>
  )
}
const mapStateToProps = (state) => {
  console.log(state.fetchProducts.Carts);
  return {
    products: state.fetchProducts.productslist,
    products: state.fetchProducts.Carts,
    // numberCart:state._todoProduct.numberCart,
    isloading: state.fetchProducts.loading,
  }
}
export default connect(mapStateToProps, null)(Cart)