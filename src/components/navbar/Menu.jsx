import MenuBar from "../menu/MenuBar";
import MenuContent from "../menu/MenuContent";

import Drawer from '@mui/material/Drawer';


function Menu(props) {
    return (
        <Drawer open={props.open} onClose={props.onclose} anchor='left'>
            <div id='open-menu'>
                <MenuBar onclose={props.onclose}/>
                <MenuContent/>
            </div>
        </Drawer>
    )
}

export default Menu