import '../css/fondo.css';
import fondo from '../img/fondo.jpeg';
import logoArgentina from '../img/logoArgentina.png';
import FondoMain from './FondoMain';

const Fondo = ({fondo1}) => {
  return (
    <div className={"fondo " + fondo1}>
        <img src={logoArgentina} alt="" />
        <FondoMain/>
    </div>
  )
}

export default Fondo