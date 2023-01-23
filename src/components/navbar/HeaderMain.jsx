import HeaderMainLeft from './HeaderMainLeft';
import HeaderMainCenter from './HeaderMainCenter';
import HeaderMainRight from './HeaderMainRight';

function HeaderMain() {
  return (
    <nav id="header-main">
        <div className="container">
            <HeaderMainLeft/>
            <HeaderMainCenter/>
    
            <HeaderMainRight/>
        </div>
      </nav>
  )
}

export default HeaderMain;