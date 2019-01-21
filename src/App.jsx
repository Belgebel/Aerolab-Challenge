import React, { Component } from 'react';
import { Banner, NavBar, Products, SuccesModal } from './Components';
import './index.css';
import _ from 'lodash';

class App extends Component {
  state = {
    products: [],
    user: {},
    success: false,
  };

  componentDidMount() {
    let url = 'https://aerolab-challenge.now.sh/products';

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzM4YjI2MDUwZjRjZTAwN2JjNmI1ZmYiLCJpYXQiOjE1NDcyMTk1NTJ9.0MD-EmB8ecEOnz1zsUWKghdbwbQh7Ld2LQaOIxBLH_Y',
      },
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => this.setState({ products: response }));

    url = 'https://aerolab-challenge.now.sh/user/me';

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzM4YjI2MDUwZjRjZTAwN2JjNmI1ZmYiLCJpYXQiOjE1NDcyMTk1NTJ9.0MD-EmB8ecEOnz1zsUWKghdbwbQh7Ld2LQaOIxBLH_Y',
      },
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => this.setState({ user: response }));
  }

  redeemProduct = (id, price) => {
    const url = 'https://aerolab-challenge.now.sh/redeem';
    const data = { productId: id };
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzM4YjI2MDUwZjRjZTAwN2JjNmI1ZmYiLCJpYXQiOjE1NDcyMTk1NTJ9.0MD-EmB8ecEOnz1zsUWKghdbwbQh7Ld2LQaOIxBLH_Y',
      },
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        this.setState({
          user: {
            ...this.state.user,
            points: this.state.user.points - price,
          },
          success: true,
        });
      });
  };
  closeModal = () => {
    this.setState({ success: false });
  };

  mostRecent = () => {
    let url = 'https://aerolab-challenge.now.sh/products';

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzM4YjI2MDUwZjRjZTAwN2JjNmI1ZmYiLCJpYXQiOjE1NDcyMTk1NTJ9.0MD-EmB8ecEOnz1zsUWKghdbwbQh7Ld2LQaOIxBLH_Y',
      },
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => this.setState({ products: response }));
    this.handleShow();
  };
  lowestPrice = () => {
    const orderLow = _.orderBy(this.state.products, ['cost'], ['asc']);
    this.setState({ products: orderLow });
  };
  highestPrice = () => {
    const orderHigh = _.orderBy(this.state.products, ['cost'], ['desc']);
    this.setState({ products: orderHigh });
  };

  render() {
    const { products, user, success } = this.state;
    return (
      <div className="App">
        {success && <SuccesModal closeModal={this.closeModal} />}
        <NavBar userName={user.name} coins={user.points} />
        <Banner />
        <Products
          mostRecent={this.mostRecent}
          lowestPrice={this.lowestPrice}
          highestPrice={this.highestPrice}
          redeemProduct={this.redeemProduct}
          products={products}
          points={user.points}
        />
      </div>
    );
  }
}

export default App;
