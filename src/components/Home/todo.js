import React from 'react';
import PropTypes from 'prop-types';
import monster from './monster.png';
import API from '../../store/api';

export default function ToDo(props) {
  const killMonster = (button, taskId, userId) => {
    button.classList.add("monster_dead");
    API.finishTask(taskId, userId)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
      button.classList.remove("monster_dead");
    });
  };
  return (
      <div className="container sword" style={{marginTop: "3rem", padding: "2rem"}}>
              {props.data.tasks.map((task) =>
                  (
                    <div className="container" key={task.id} style={{width: 350, height: 60, display: "flex", alignItems: "center", borderBottom: "1px solid gray", paddingTop: "0.5rem"}}>
                      <button style={{ background: "none", border: "none"}} onClick={(e) => killMonster(e.target, task.id, props.data.userId)}>
                        <img className= {task.completed ? "sword monster_alive monster_dead" : "sword monster_alive"} src={monster} alt="monster"/>
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
};
