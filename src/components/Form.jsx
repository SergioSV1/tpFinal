import '../css/form.css';
import imgAgregar from '../img/agregar.svg';
const Form = ({handleChange, addTask, tarea}) => {
  return (
    <div className="formulario">
        <form onSubmit={addTask}>
            <input type="text" value={tarea} placeholder="Tarea Nueva" onChange={handleChange}/>
            <button type="submit">+</button>
        </form>
    </div>
  )
}

export default Form