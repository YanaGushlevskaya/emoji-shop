import React, { Component } from "react";
import "./App.scss";
import PacksTable from "../Packs/PacksTable/PacksTable";
import News from "../News/News";
import Basket from "../Basket/Basket";
export default class App extends Component {
  state = {
    packsData: []
  };

  componentDidMount() {
    fetch("./emoji-shop.json")
      .then(response => response.json())
      .then(response => this.setState({ packsData: response["emoji"] }));
  }

  updatePacksItemStatus = (id, status) => {
    this.setState(({ packsData }) => {
      const indexToUpdate = packsData.findIndex(item => item.id === id);
      const itemToUpdate = packsData[indexToUpdate];
      const newItem = { ...itemToUpdate, isPurchased: status };

      const newState = [
        ...packsData.slice(0, indexToUpdate),
        newItem,
        ...packsData.slice(indexToUpdate + 1)
      ];
      return {
        packsData: newState
      };
    });
  };

  onPurchaseItem = id => {
    this.updatePacksItemStatus(id, true);
  };

  onDeletedItem = id => {
    this.updatePacksItemStatus(id, false);
  };

  onCleanBasket = purchaseAmount => {
    this.setState(({ packsData }) => {
      const newState = [...packsData].map(item => {
        item = { ...item, isPurchased: false };
        return item;
      });
      return {
        packsData: newState
      };
    });
    purchaseAmount === 0
      ? alert("You didn't choose anything.")
      : alert(`Your purchase is made. You have to pay ${purchaseAmount}$.`);
  };

  render() {
    return (
      <div>
        <header className="header">
          <News
            list={this.state.packsData}
            onPurchaseItem={this.onPurchaseItem}
          />
          <Basket
            list={this.state.packsData}
            onDeletedItem={this.onDeletedItem}
            onCleanBasket={this.onCleanBasket}
          />
        </header>
        <main>
          <PacksTable
            list={this.state.packsData}
            onPurchaseItem={this.onPurchaseItem}
          />
        </main>
      </div>
    );
  }
}
