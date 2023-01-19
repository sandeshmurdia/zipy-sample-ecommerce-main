import TopBar from "./navbar/TopBar";
import HeaderMain from "./navbar/HeaderMain";
import Navbar from "./navbar/Navbar";
import MobileHeader from "./navbar/MobileHeader";

function Header() {

  return (

    <header>
        <TopBar/>
        <HeaderMain/>
        <Navbar/>
        <MobileHeader/>
    </header>
  )
}

export default Header