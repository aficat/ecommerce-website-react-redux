import React, { Component } from 'react';
import './App.css';
import Products from './components/Products';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filteredProducts: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8000/products").then(res => res.json())
    // .then(data => {
    //   console.log(data) 
    // })
      .then(data => this.setState({
        products: data,
        filteredProducts: data
      }))
    .catch(error => console.error(error));
  }

  render() {
    return (
      <div className="container">
        <h1> E-commerce Shopping App </h1>
        <hr />
        <div className="col-md-8">
          <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart} />
        </div>
        <div className="col-md-4">

        </div>
      </div>
    );
  }
}

export default App;
