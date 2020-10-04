import React, { Component } from 'react';
import './News.scss';
import Button from '../Button/Button';

export default class News extends Component {
  state = {
    title: 'Bugs pack!',
    imgs: [{ char: '🐌' }, { char: '🦋' }, { char: '🐛' }],
    price: 1,
    isActive: false,
    id: 1,
    timerIndicator: 0
  };

  componentDidMount() {
    this.initialTimerID = setTimeout(() => this.updateNewsPack(), 100);
    this.timerID = setInterval(() => this.updateNewsPack(), 7000);
    this.packActivityTimer = setInterval(() => this.updatePackActivity(), 100);
  }

  chooseNewsPackNumber() {
    const packItemsCount = this.props.list.length;
    const newsPackNumber = Math.floor(Math.random() * packItemsCount);
    return newsPackNumber;
  }

  updateNewsPack() {
    this.addTimerIndicator();
    const newsPackNumber = this.chooseNewsPackNumber();
    const { isPurchased: isActive, id, title, price, emoji: imgs } = this.props.list[newsPackNumber];
    this.setState({
      title,
      imgs,
      price,
      isActive,
      id
    });
  }

  addTimerIndicator() {
    const totalTime = 7000;
    let currentTime = 0;
    let newTimerIndicator;
    this.bannerTimer = setInterval(() => {
      if(currentTime < totalTime) {
        currentTime += 50;
        newTimerIndicator = Math.floor((currentTime / totalTime) * 100);
        this.setState({
          timerIndicator: newTimerIndicator
        });
      }
    }, 50)
  }

  updatePackActivity = () => {
    this.timer = setTimeout(() => {
      this.setState(({ isActive }) => {
        isActive = this.props.list[this.state.id - 1].isPurchased || false;
        return {
          isActive
        };
      });
    }, 1);
  }

  componentWillUnmount() {
    clearTimeout(this.initialTimerID);
    clearInterval(this.packActivityTimer);
    clearInterval(this.timerID);
    setTimeout(() => clearInterval(this.bannerTimer), 7000);
  }

  render() {
    const { title, imgs, price, id, isActive, timerIndicator } = this.state;
    
    const images = imgs
      .filter((_, i) => i <= 2)
      .map((img, i) => {
        return (
          <div key={i} className='news__img'>
            {img['char']}
          </div>
        );
      });

    return (
      <div className='news__banner'>
        <h2 className='news__title'>
          New! <span>{title}</span>
        </h2>
        <span className='news__subtitle'>Includes</span>
        <div className='news__imgs-wrapper'>{images}</div>
        <div className='btn-wrapper'>
          <Button price={price} type={'Get'} isActive={isActive} onPurchaseItem={() => this.props.onPurchaseItem(id)} />
        </div>
        <div className='news__timer' style={{width:`${timerIndicator}%`}}></div>
      </div>
    );
  }
}
