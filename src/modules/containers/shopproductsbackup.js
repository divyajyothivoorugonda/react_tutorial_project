import { useState } from 'react';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import { fetchProducts, AddCart, WishList, SearchList } from '../../redux/actions/actions';
import CustomCards from '../components/CustomCards';

const ShopProducts = (props) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [dropdown, setDropdown] = useState('');
    const [discount, setDiscount] = useState(0);
    const [getCategory, setCategoryData] = useState([]);

    let prodFiltCom = [], filProds = [], checkedCat = false, numOfProds = 0
    const newData = [...new Set(props.products.map(item => item.category))]
    console.log(newData);
    const categoryProducts = event => {
        if (event.target.checked) {
            if (!checkedCat) { prodFiltCom = []; }
            prodFiltCom.push(props.products.filter((item) => item.category === event.target.value))
            filProds = prodFiltCom.flat(Infinity)
            checkedCat = true
            numOfProds = numOfProds + 1
        }
        else if (!event.target.checked) {
            numOfProds = numOfProds - 1
            if (numOfProds < 1) {
                filProds = []
                checkedCat = false;
                filProds = props.products;
            }
            else {
                filProds = filProds.filter((item) => item.category !== event.target.value)
            }
        }
        console.log(filProds)
    };

    return (
        <div>
            <Navbar SearchList={props.SearchList} />

            <div style={{ float: 'right' }}>
                <select className="custom-select custom-select-lg mb-3" >
                    <option value="asec">Price: Low to High</option>
                    <option value="desc">Price: High to Low</option>
                    <option value="rating">Customer Rating</option>
                </select>
            </div>
            <br />
            <div className='row'>
                <div className='col-sm-3'>
                    <p>Discount Filter</p>
                    <label>
                        <input
                            type="radio"
                            value={10}
                            name='dicount'
                        />
                        10 % and Above
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            value={20}
                            name='discount'

                        />
                        20 % and Above
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            value={30}
                            name='discount'

                        />
                        30 % and Above
                    </label>

                    {newData.map((category, index) => {
                        return (
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" onChange={categoryProducts} id={index} value={category} />
                                <label className="form-check-label" htmlFor="flexCheckDefault" checked>
                                    {category}
                                </label></div>)
                    })}
                </div>
                <div className='col-sm-9'>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: 'wrap' }}>

                        {props.isloading === false ? props.products.map((item) => {
                            return <CustomCards AddCart={props.AddCart} WishList={props.WishList} key={item.id} item={item} /> }) : 'loading'}
                    </div>
                </div>
            </div>
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
        WishList: item => dispatch(WishList(item)),
        SearchList: item => dispatch(SearchList(item))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShopProducts);
//export default connect(mapStateToProps, null)(ShopProducts);

