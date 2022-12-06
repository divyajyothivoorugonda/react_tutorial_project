import { connect } from 'react-redux';
import CustomCards from './CustomCards';
import React from 'react';
import Navbar from './Navbar';

function WishItems(props) {
    console.log(props.products.WList);
    return (
        <div>
            <Navbar />
            {props.products.WList.map((item) => { return <CustomCards key={item.id} item={item} /> })}
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        products: state.fetchProducts
        //products: state.fetchProducts['WList']
    }
}
export default connect(mapStateToProps, null)(WishItems);
//export default connect(mapStateToProps, null)(ShopProducts);