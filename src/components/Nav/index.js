import React, { Component } from 'react';
import Bag from '../../assets/svg/bag.svg'
import wishlist from '../../assets/svg/wishlist.svg'
import Quickview from '../Quickview';
import { findDOMNode } from "react-dom";

class Nav extends Component
{
    constructor(props){
        super(props);
        this.state = {
            showCartPreview: false
        }
    }

    showCart(e){
        e.preventDefault();
        this.setState({ 
            showCartPreview: true
        })
    }

    clickOutSide(e){
        const cartNode = findDOMNode(this.refs.cartPreview);
        if (cartNode.classList.contains("active")) {
            if (!cartNode || !cartNode.contains(e.target)) {
              this.setState({
                showCartPreview: false
              });
              e.stopPropagation();
            }
        }
    }

    componentDidMount(){
        document.addEventListener(
            'click',
            this.clickOutSide.bind(this),
            true
        );
    }

    componentDidUpdate(prevProps){
        if(prevProps.Cart !== this.props.Cart){
            this.setState({ 
                showCartPreview: true
            })
        }
    }

    componentWillUnmount(){
        document.removeEventListener(
            'click',
            this.clickOutSide.bind(this),
            true
        );
    }

    render(){
        const {Cart, Wishlist} = this.props
        return(
            <header className="header container">
                <h1 className="page-title">BRAND</h1>
                <div className="header-bag">
                    <div className="header-bag__item header-bag__count">
                        <div className="header-bag__price">
                            £ {this.CartTotal()}
                        </div>
                        <img src={Bag} alt='' onClick={this.showCart.bind(this)}/>
                        <span className="bag__item-counter">{ Cart ? Cart.data.length : 0 }</span>
                        <div className={this.state.showCartPreview ? 'quickview active' : 'inactive'} ref="cartPreview">
                            <Quickview {...this.props} show={this.state.showCartPreview}/>
                        </div>
                    </div>
                    <div className="header-bag__item header-bag__wishlist-count">
                        <img src={wishlist} alt='' />
                        <span className="bag__item-counter">{ Wishlist ? Wishlist.data.length : 0 }</span>
                    </div>
                </div>
            </header>
        );
    }

    CartTotal = () => {
        const {Cart} = this.props;
        const prices = Cart.data.map(a => {return a.retail_price.value * Number(a.Qty)});
        console.log('Data', prices)
        return prices.reduce((a,b) => a + b, 0);
    }
}

export default Nav;