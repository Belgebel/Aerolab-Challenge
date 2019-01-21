import React, { Component } from 'react';
import './styles.scss';

export default class NavBar extends Component {
  render() {
    const { userName, coins } = this.props;
    return (
      <div className="navBar__container">
        <div className="navBar__logoWrapper">
          <img
            className="navBar__logoWrapper--logoImg"
            src="/statics/images/aerolab-logo.svg"
            alt="Logo Aerolab"
          />
        </div>
        <div className="navBar__userDataWrapper">
          <label className="navBar__userDataWrapper--userName">
            {userName}
          </label>
          <label className="navBar__userDataWrapper--userCoins">{coins}</label>
          <img
            className="navBar__userDataWrapper--coinImg"
            src="/statics/images/icons/coin.svg"
            alt="coin"
          />
        </div>
      </div>
    );
  }
}

NavBar.defaultProps = {
  userName: '',
  coins: 0,
};
