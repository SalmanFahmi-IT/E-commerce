import React from 'react';
import Navbar from '../../components/Nav';
import Footer from '../../components/Footer';
import Products from '../Products';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions';

class Homepage extends React.Component {

  componentDidMount(){
    const {actions} = this.props
    actions.FetchProducts();
  }

  render(){
    return(
      <div>
        <Navbar {...this.props}/>
        <main className="product-page">
          <div className="container">
              <Products {...this.props} />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => ({
    Products: state.Products,
    Cart: state.Cart,
    Wishlist: state.Wishlist
});

const mapDispatchToProps = (dispatch) => {
  return{
    actions: bindActionCreators(Object.assign({}, actions), dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
