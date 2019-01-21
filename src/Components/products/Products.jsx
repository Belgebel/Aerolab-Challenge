import React, { Component } from 'react';
import ItemCard from './ItemCard';
import './styles.scss';

export default class Products extends Component {
  render() {
    const { products, redeemProduct, points } = this.props;
    return (
      <div>
        <div className="products__container">
          <div className="products__buttonsBar">
            <label className="products__buttonsBar--title"> Sort by:</label>
            <button
              onClick={() => this.props.mostRecent()}
              className="products__buttonsBar--mostRecent"
            >
              Most recent
            </button>
            <button
              onClick={() => this.props.lowestPrice()}
              className="products__buttonsBar--lowPrice"
            >
              Lowest price
            </button>
            <button
              onClick={() => this.props.highestPrice()}
              className="products__buttonsBar--highPrice"
            >
              Highest Price
            </button>
          </div>
          <div className="products__container--items">
            {products.map(product => (
              <ItemCard
                key={product._id}
                id={product._id}
                image={product.img.url}
                category={product.category}
                name={product.name}
                price={product.cost}
                redeemProduct={redeemProduct}
                points={points}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
