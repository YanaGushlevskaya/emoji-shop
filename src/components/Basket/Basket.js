import React, { Component } from "react";
import "./Basket.scss";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Basket extends Component {
  render() {
    const { list, onDeletedItem, onCleanBasket } = this.props;

    const purchasedItems = list.filter(pack => pack.isPurchased);

    const basketItems = purchasedItems.map(item => {
      let id = item.id;
      return (
        <li key={id} className="basket__item">
          <span>
            {item.title} - {item.price}$
          </span>
          <span className="basket__delete-btn" onClick={() => onDeletedItem(id)} >
            <FontAwesomeIcon icon="times" />
          </span>
        </li>
      );
    });

    let totalPrice = 0;
    purchasedItems.forEach(item => { totalPrice += parseFloat(item.price)});

    return (
      <div className="basket">
        <h3>Basket</h3>
        <ul className="basket__list">{basketItems}</ul>
        <Button
          className="basket__btn"
          type={"Purchase"}
          onCleanBasket={() => onCleanBasket(totalPrice)}
          isActive={false}
          price={totalPrice}
        />
      </div>
    );
  }
}
