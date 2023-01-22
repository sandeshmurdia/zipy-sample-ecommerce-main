import Header from '../components/Header'
import Banner from '../components/Banner';
import Features from '../components/Features';
import Products from '../components/Products';
import Brands from '../components/Brands';
import AppStore from '../components/AppStore';
import Footer from '../components/Footer'
import { randomerror } from '../API/randomerror';


function LandingPage(cartItems) {

randomerror();  
  return (
    <>
     
      <Header/>
      <Banner/>
      <Features/>
      <Products cartItems={cartItems}/>
      <Brands/>
      <AppStore/>
      <Footer/>
    
    </>
  );
}

export default LandingPage;
