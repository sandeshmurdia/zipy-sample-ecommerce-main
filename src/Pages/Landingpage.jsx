import Header from '../components/Header'
import Banner from '../components/Banner';
import Features from '../components/Features';
import Products from '../components/Products';
import Brands from '../components/Brands';
import AppStore from '../components/AppStore';
import Footer from '../components/Footer'
import zipy from 'zipy-staging-nextjs';
import { randomerror } from '../API/randomerror';
import { randomfrontenderror } from '../API/randomfrontenderror';
zipy.init('80be3435');


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
