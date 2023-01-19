import { ReactComponent as SearchSvg } from '../../images/search.svg';

function HeaderMainCenter() {
    return (
        <div id="header-main-center">
            <input type="text" placeholder='Search' id='search' disabled/>     
            <select id='select' value={0} disabled>
                <option value={0}>All Type</option>
            </select> 
            <a href='#' id='search-btn'><SearchSvg/></a> 
        </div>
    )
}

export default HeaderMainCenter