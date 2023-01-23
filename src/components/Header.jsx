import TopBar from "./navbar/TopBar";
import HeaderMain from "./navbar/HeaderMain";
import Navbar from "./navbar/Navbar";
import MobileHeader from "./navbar/MobileHeader";
import Randomgen from "./Randomgen";
function Header() {

  return (

    <header>
        <TopBar/>
        <HeaderMain/>
        <Navbar/>
        <Randomgen/>
        <MobileHeader/>
    </header>
  )
}

export default Header