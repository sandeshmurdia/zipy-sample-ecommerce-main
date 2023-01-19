import { ReactComponent as MenuSvg } from '../../images/menu.svg';

function Navbar () {

  const handleClick = () => {
    console.warn('Redirection failed')
  }

  return (
    <nav id='navbar'>
      <div className="container">
        <ul>
          <li>
                <a onClick={handleClick} href="#">All categories</a>
          </li>
          <li>
            <a onClick={handleClick} href="#">Fashion</a>
          </li>
          <li>
            <a onClick={handleClick} href="#">Supermarket</a>
          </li>
          <li>
            <a onClick={handleClick} href="#">Electronics</a>
          </li>
          <li>
            <a onClick={handleClick} href="#">Fitness and sport</a>
          </li>
          <li>
            <a onClick={handleClick} href="#">Clothing</a>
          </li>
          <li>
            <a onClick={handleClick} href="#">Furnitures</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar