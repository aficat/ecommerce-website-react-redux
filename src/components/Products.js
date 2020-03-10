import React, { Component } from 'react';
import utils from '../utils';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';

class Products extends Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        const productItems = this.props.products.map(product => (
            <div className="col-md-4" key={product.sku}>
                <div className="thumbnail text-center">
                    <a href={`#${product.id}`} onClick={this.props.handleAddToCart}>
                        <img src={`/products/${product.sku}_2.jpg`} alt={product.title} />
                        <p>{product.title}</p>
                    </a>
                    <div>
                        <b>{utils.formatCurrency(product.price)}</b>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button
                            className="btn btn-primary"
                            onClick={(e) => this.props.handleAddToCart(e, product)}>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        ))
        return (
            <div className="row">
                {productItems}
            </div>
        )
    }
}

const mapStateToProps = state => ({ products: state.products.filteredItems });
export default connect(mapStateToProps, { fetchProducts })(Products);
