import React from 'react';
import Navbar from '../../components/Nav';
import Footer from '../../components/Footer';
import Products from '../Products';
import image from '../../assets/images/activity_image.jpeg';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions';

const Items = [
  {
    Id: 1,
    Image: image,
    Title: 'Travel to France',
    Description: 'It\'s a nice place you will like it, trust me !',
    Price_Strike: 822,
    Price_Discounted: 622
  },
  {
    Id: 2,
    Image: image,
    Title: 'Travel to Spain',
    Description: 'It\'s a nice place you will like it, trust me !',
    Price_Strike: 822,
    Price_Discounted: 622
  }
]
class Homepage extends React.Component {

  componentDidMount(){
    const {actions} = this.props
  }
  render(){
    return(
      <div>
        <Navbar />
        <main className="product-page">
          <div className="container">
              <Products 
              Products = {Items}
              handleClick={this.AddToCart}
              />
              {/* this.props.Products.data */}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  AddToCart = item => {
    const {actions} = this.props
    actions.AddToCart(item);
  }
}
    
const mapStateToProps = state => ({
    Products: state.Products
});

const mapDispatchToProps = (dispatch) => {
  return{
    actions: bindActionCreators(Object.assign({}, actions), dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
