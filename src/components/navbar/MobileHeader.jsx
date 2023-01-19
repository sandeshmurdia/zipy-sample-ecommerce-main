import { useState } from 'react';
import Menu from './Menu';
import MobileHeaderFirst from './MobileHeaderFirst';
import MobileHeaderSecond from './MobileHeaderSecond';
import MobileHeaderThird from './MobileHeaderThird';


function MobileHeader() {

    const [openDrawer,setOpenDrawer] = useState(false)

    const handleClick = () => {
        setOpenDrawer( prev => !prev)
    }
    const handleClose = () => {
        setOpenDrawer(false)
    }
    return (
        <nav id='mobile-header'>
            <Menu open={openDrawer} onclose={handleClose}/>
            <div className="container">
                <MobileHeaderFirst handleClick={handleClick}/>
                <MobileHeaderSecond/>
                <MobileHeaderThird/>
            </div>
        </nav>
    )
}

export default MobileHeader