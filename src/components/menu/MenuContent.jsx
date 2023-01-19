import { ReactComponent as SearchSvg } from '../../images/search.svg';



function MenuContent(props) {
    return (
        <div className="container">
            <div id="menu-contents">
                <div id="menu-searchbar">
                    <input type="text" placeholder='Search' id='search' disabled/>     
                    <a href='#' id='search-btn'><SearchSvg/></a> 
                </div>
                <div>
                    <ul>
                        <li>
                            <a href="#">All categories</a>
                        </li>
                        <li>
                            <a href="#">Fashion</a>
                        </li>
                        <li>
                            <a href="#">Supermarket</a>
                        </li>
                        <li>
                            <a href="#">Electronics</a>
                        </li>
                        <li>
                            <a href="#">Fitness and sport</a>
                        </li>
                        <li>
                            <a href="#">Clothing</a>
                        </li>
                        <li>
                            <a href="#">Furnitures</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MenuContent