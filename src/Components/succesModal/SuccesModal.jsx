import React from 'react';
import './styles.scss';

const SuccesModal = props => {
  const { closeModal } = props;
  return (
    <div className="succesModal__wrapper">
      <div className="succesModal__container">
        <div className="succesModal__message">
          <p>You've redeem the product successfully</p>
        </div>
        <div className="succesModal__img">
          <img
            className="succesModal__img--dodge"
            src="/statics/images/icons/doge_800x600.gif"
            alt="Doge H5"
          />
          <div className="succesModal__close">
            <button onClick={closeModal} className="succesModal__close--btn">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccesModal;
