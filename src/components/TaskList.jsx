import { useState } from 'react';
import '../css/taskList.css';
import Taskitem from './Taskitem';
import Form from './Form';

const TaskList = () => {

  const [tarea,setTarea] = useState('');
  const [tareas,setTareas] = useState([]);
  
  const handleChange = (e)=>{
    setTarea(e.target.value);
  }

  const addTask = (e)=>{
    e.preventDefault();
    if(tarea.trim() === ''){
     /*  alert('Debes agregar una tarea'); */
      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      tarea,
      completada:false
    }

    const totalTareas = [nuevaTarea, ...tareas];
    setTareas(totalTareas);
    setTarea('');
  }
  
  const borrarTarea = (id)=>{
    const tareasActualizadas = tareas.filter(tarea =>{
      return tarea.id != id
    })
    setTareas(tareasActualizadas);
  }

  return (
    <div className="taskList">
          <h2>Lista de Tareas</h2>
          <Form handleChange = {handleChange}
          addTask = {addTask}
          tarea = {tarea}
          />
      <div className='list'>

          {tareas.map(tarea => (
            <Taskitem
              key = {tarea.id}
              id = {tarea.id}
              tarea = {tarea}
              borrarTarea = {borrarTarea}
            />
          ))

          }
      </div>

    </div>
  )
}

export default TaskList