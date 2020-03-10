import React, { Component } from 'react';
import './App.css';
import Products from './components/Products';
import Filter from './components/Filter';
import Basket from './components/Basket';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
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

    if (localStorage.getItem('cartItems')) {
      this.setState({ cartItems: JSON.parse(localStorage.getItem('cartItems')) });
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <h1> E-commerce Shopping App </h1>
          <hr />
          <div className="col-md-8">
            <Filter />
            <hr />
            <Products/>
          </div>
          <div className="col-md-4">
            <Basket/>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
