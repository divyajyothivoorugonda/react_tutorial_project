import CustomCards from '../components/CustomCards';
import {connect} from 'react-redux';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
const Navbar = (props) => {
    const [searchInput, setSearchInput] = useState('');
    return (
        <nav className="navbar navbar-expand-lg navbar-color-bg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand navbar-color" href="/">Shop.com</a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link navbar-color" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <Link to='/products'><span className="nav-link navbar-color">Shop</span></Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  navbar-color" href="/products">Pages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  navbar-color" href="/">Logbook</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar-color" href="/">Contact</a>
                        </li>
                    </ul>
                    <span className="d-flex" role="search">
                        <input className="form-control me-2" type="search"  /* value={searchInput} */ 
                 onChange={e => setSearchInput(e.target.value)}  placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" onClick={()=>props.SearchList(searchInput)} type="submit">Search</button>
                    </span>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                        <li className="nav-item snavbar-sli-smargin">
                        <Link to="/carts"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>     {props.numberCart}</Link>                   </li>
                        <li className="nav-item snavbar-sli-smargin">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                            </svg>                  </li>
                        <li className="nav-item snavbar-sli-smargin">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                            </svg>
                        </li>
                        <li className="nav-item snavbar-sli-smargin">
                        <Link to="/wishitems">    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-heart" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                            </svg><span>{props.WListNumber}</span></Link>
                        </li>
                    </ul>
                    <div className="clearfix mxn1">
                 
            </div>

                </div>
            </div>
        </nav>
    );
}
const mapStateToProps = (state) => {
    return {
        numberCart:state.fetchProducts.numberCart,
        WListNumber:state.fetchProducts.WListNumber,
        //products: state.fetchProducts.productslist,

    }
}
/*const mapDispatchToProps = dispatch => {
    return {
        
    }
}*/
export default connect(mapStateToProps, null)(Navbar);

