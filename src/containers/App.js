import React from 'react';
import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import Products from '../components/Products';
import image from '../assets/images/activity_image.jpeg';

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

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="product-page">
        <div className="container">
            <Products Products = {Items}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
