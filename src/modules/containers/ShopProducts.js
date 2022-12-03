import { useState } from 'react';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import { fetchProducts, AddCart } from '../../redux/actions/actions';
import CustomCards from '../components/CustomCards';

const ShopProducts = (props) => {
    const [products, setProducts] = useState([]);
    var productsFiltered
    var prodFiltCom = []
    var filProds = []
    var checkedCat
    var numOfProds = 0
    const newData = [...new Set(props.products.map(item => item.category))]
        const categoryProducts = event => {
            if (event.target.checked) {
                if(!checkedCat) { filProds = []; prodFiltCom = []; }
                productsFiltered = props.products.filter((item) => item.category === event.target.value)
                prodFiltCom.push(productsFiltered)
                filProds = prodFiltCom.flat(Infinity)
                checkedCat = true
                numOfProds = numOfProds + 1
        }
        else if (!event.target.checked) {
            numOfProds = numOfProds - 1
            if(numOfProds < 1)
            {
                filProds = []
                checkedCat = false;
                filProds = props.products;
            }
            else{
                filProds = filProds.filter((item) => item.category !== event.target.value)
            }
        }
        console.log(filProds)
    };

    return (
        <div>
            <Navbar />

            {newData.map((category,index) => {
                return (
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" onChange={categoryProducts} id={index} value={category} />
                        <label className="form-check-label" for="flexCheckDefault" checked>
                            {category}
                        </label></div>) 
            })}
            {props.isloading === false ? props.products.map((item) => { return <CustomCards AddCart={props.AddCart} key={item.id} item={item} /> }) : 'loading'}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.fetchProducts.productslist,
        // numberCart:state._todoProduct.numberCart,
        isloading: state.fetchProducts.loading,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        AddCart: item => dispatch(AddCart(item)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShopProducts);
//export default connect(mapStateToProps, null)(ShopProducts);

