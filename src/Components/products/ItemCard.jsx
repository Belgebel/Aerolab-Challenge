import React, { Component } from 'react';
import './styles.scss';

export default class ItemCard extends Component {
  state = {
    itemCardHover: false,
  };

  handleMouseHover = () => {
    this.setState(this.toggleHoverState);
  };

  toggleHoverState = state => {
    return {
      itemCardHover: !state.itemCardHover,
    };
  };

  render() {
    const { image, name, category, price, points } = this.props;
    const { itemCardHover } = this.state;
    const canBuy = price < points;
    const cantBuy = price - points;
    return (
      <div className="itemCard__container">
        {canBuy && (
          <div
            className={`${
              itemCardHover ? 'itemCard__hover' : 'itemCard__hover none'
            }`}
            onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}
          >
            <img
              className="itemCard__hover--bagIconActive"
              src="/statics/images/icons/buy-white.svg"
              alt="White bag"
            />
            <h1 className="itemCard__hover--price">
              {Number(price).toLocaleString('de-DE')}
            </h1>
            <button
              onClick={() => this.props.redeemProduct(this.props.id, price)}
              className="itemCard__hover--button"
            >
              Redeem now
            </button>
          </div>
        )}
        <div className="itemCard__productPhoto">
          {canBuy ? (
            <img
              className="itemCard__productPhoto--bagIcon"
              src="/statics/images/icons/buy-blue.svg"
              alt="shopping bag"
            />
          ) : (
            <div className="itemCard__cantBuy">
              <p>You need {cantBuy}</p>
            </div>
          )}
          <img className="itemCard__productPhoto--img" src={image} alt={name} />
        </div>
        <div className="itemCard__productDescription">
          <p className="itemCard__productDescription--category">{category}</p>
          <p className="itemCard__productDescription--name">{name}</p>
        </div>
      </div>
    );
  }
}

ItemCard.defaultProps = {
  image: '/statics/images/product-pics/iPadMini-x2.png',
  name: 'Ipad mini',
  category: 'tablets & e-readers',
  price: 12000,
};
