import menuHamb from '../img/menuHamb.svg';
import paintPalette from '../img/paintPalette.svg';
import bell from '../img/bell.svg';
import addUser from '../img/addUser.svg';
import threeDots from '../img/threeDots.svg';

import '../css/header.css';

const Header = ({cambiarFondo, mostrarMenu}) => {
  return (
    <header>
        <a href="#"><img src={menuHamb} alt="" /></a>
        <div className="navMenu">
            <button onClick={cambiarFondo}><img src={paintPalette} alt="" /></button>
            <button><img src={bell} alt="" /></button>
            <button><img src={addUser} alt="" /></button>
            <button onClick={mostrarMenu}><img src={threeDots} alt=""  /></button>

        </div>

    </header>
  )
}

export default Header