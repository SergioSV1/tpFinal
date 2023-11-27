import { useState } from "react"
import '../css/taskItem.css';
import imgBorrar from '../img/trash.svg';
import imgNoCompletada from '../img/accept1.svg';
import imgCompletada from '../img/accept3.svg';

const Taskitem = ({tarea, borrarTarea, id}) => {
    const [completada,setCompletada] = useState(false);
  return (
    <div className={completada?'containerTarea containerTareaCompletada':'containerTarea'}>
        <div className="item">
            <h2 className={completada?'completada':'noCompletada'}>{tarea.tarea}</h2>
            <button id="completar" onClick={()=>setCompletada(!completada)}>{completada?<img src={imgCompletada} alt="Completar Tarea" id="imgNocompletada1"/>:<img src={imgNoCompletada} alt="Completar Tarea" id="imgNocompletada1"/>}</button>
            <button onClick={()=>borrarTarea(tarea.id)} id="eliminar"><img src={imgBorrar} alt="Borrar Tarea" id="imgBorrar1"/></button>
        </div>
        
    </div>
  )
}

export default Taskitem