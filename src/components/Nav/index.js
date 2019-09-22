import React, { Component } from 'react';
import Bag from '../../assets/svg/bag.svg'
import wishlist from '../../assets/svg/wishlist.svg'

export default class Nav extends Component
{
    render(){
        return(
            <header className="header container">
                <h1 className="page-title">BRAND</h1>
                <div className="header-bag">
                    <div className="header-bag__item header-bag__count">
                        <div className="header-bag__price">
                            £210
                        </div>
                        <img src={Bag} alt='' />
                        <span className="bag__item-counter">10</span>
                    </div>
                    <div className="header-bag__item header-bag__wishlist-count">
                        <img src={wishlist} alt='' />
                        <span className="bag__item-counter">5</span>
                    </div>
                </div>
            </header>
        );
    }
}