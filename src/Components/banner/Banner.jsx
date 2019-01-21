import React, { Component } from 'react';
import './styles.scss';

class Banner extends Component {
  render() {
    return (
      <div className="banner__container">
        <img
          className="banner__image"
          src="/statics/images/header-x2.png"
          alt="header"
        />
      </div>
    );
  }
}

export default Banner;
