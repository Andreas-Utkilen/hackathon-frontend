import React from 'react';
import PropTypes from 'prop-types';
import green from './monsters1x/green.png';
import API from '../../store/api';

const monsters = [green];

export default function ToDo(props) {
  const killMonster = (button, taskId, completed) => {
    if(!(button instanceof HTMLImageElement)) return;
    if(completed){
      button.classList.remove("monster_dead");
    }else{
      button.classList.add("monster_dead");
    }
    API.updateTask(taskId, !completed)
    .then(res => {
      if(res.status == 200){
        let data = props.data;
        data.tasks.find(task => task.id == taskId).completed = !completed;
        props.setTasks();
      }
    })
    .catch(err => {
      console.log(err);
      if(completed){
        button.classList.remove("monster_dead");
      }else{
        button.classList.add("monster_dead");
      }
    });
  };
  return (
      <div className="container sword" style={{marginTop: "3rem", padding: "2rem"}}>
              {props.data.tasks.map((task) =>
                  (
                    <div className="container" key={task.id} style={{width: 512, height: 60, display: "flex", alignItems: "center", borderBottom: "1px solid gray", paddingTop: "0.5rem"}}>
                      <button style={{ background: "none", border: "none", padding: 0}} onClick={(e) => killMonster(e.target, task.id, task.completed)}>
                        <img className= {task.completed ? "sword monster_alive monster_dead" : "sword monster_alive"} src={monsters[0]} alt="monster"/>
                      </button>
                      <div className="column"
                        style={{textDecoration: task.completed ? "line-through" : ""}}
                        >
                        <p>{task.name}</p>
                        <h6 style={{display:"flex", flexWrap:"wrap"}}>{task.description}</h6>
                      </div>
                    </div>      
                  )
              )}
      </div>
  );
}
ToDo.propTypes = {
  data: PropTypes.object.isRequired,
  setTasks: PropTypes.func.isRequired
};
