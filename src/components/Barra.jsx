import '../css/barra.css';
import imgHome from '../img/home.svg';
import imgAcceptAll from '../img/acceptAll.svg';
import imgCompleted from '../img/acceptCompleted.svg';
import imgNoCompleted from '../img/acceptNoCompleted.svg';
import imgUser from '../img/user.svg';

const Barra = ({menuVisible}) => {
  return (
    <div className="headerB">
        <div className={"side-bar " + menuVisible}>
            <div className="user">
                <img src={imgUser} id='profile-img'/>
                <div className="profile-name">
                    <h2>Sergio<br/> Sempertegui</h2>
                    <p>sergionet100@gmail.com</p>
                </div>
            </div>
            <ul>
                <li><img src={imgHome}/><p>Inicio</p></li>
                <li><img src={imgAcceptAll}/><p>Todas las Tareas</p></li>
                <li><img src={imgCompleted}/> <p>Completadas</p></li>
                <li><img src={imgNoCompleted}/><p>No completadas</p></li>
            </ul>
        </div>
    </div>
  )
}

export default Barra
