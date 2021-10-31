import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'lottie-react';
import BloodDrop from '../Animations/43221-red-blood-doping.json';
import green from './monsters1x/green.png';
import red from './monsters1x/red.png';
import red2 from './monsters1x/red2.png';
import purple from './monsters1x/purple.png';
import API from '../../store/api';

const monsters = [green, red, purple, red2];
var assignedMonster = monsters[0];

export default function ToDo(props) {
  const killMonster = (e, button, taskId, completed) => {

    if(!(button instanceof HTMLImageElement)) return;


    if(completed){
      button.classList.remove("monster_dead");
    }else{
      button.classList.add("monster_dead");
      const rect = document.getElementById("container").getBoundingClientRect();
      document.getElementById("blood").style.display = "block";
      document.getElementById("blood").style.left = `${ e.clientX - rect.left - 20}px`;
      document.getElementById("blood").style.top = `${e.clientY - rect.top - 5}px`;
      setTimeout(() => {
        document.getElementById("blood").style.display = "none";
      }, 1200);
    }
    API.updateTask(taskId, !completed)
    .then(res => {
      assignedMonster = monsters[Math.round(Math.random()*(monsters.length -1))];
      if(res.status == 200){
        let data = props.data;
        data.tasks.find(task => task.id == taskId).completed = !completed;
        const tasksDone = data.tasks.filter(task => task.completed).length;
        data.team.milestones[0].health = (5-tasksDone)/5;
        data.team.milestones[0].done = (5-tasksDone)/5 <= 0;
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
      <div id="container" className="container sword" style={{marginTop: "3rem", padding: "2rem", position: "relative"}}>
        <Lottie id="blood" width={40} height={40} animationData={BloodDrop} style={{display: "none", position:"absolute", width:"40px", height:"50px", zIndex: 2}}/>
              {props.data.tasks.map((task) =>
                  (
                    <div className="container" key={task.id} style={{width: 512, height: 60, display: "flex", alignItems: "center", borderBottom: "1px solid gray", paddingTop: "0.5rem"}}>
                      <button style={{ background: "none", border: "none", padding: 0}} onClick={(e) => killMonster(e, e.target, task.id, task.completed)}>
                        <img className= {task.completed ? "sword monster_alive monster_dead" : "sword monster_alive"} src={assignedMonster} alt="monster"/>
                      </button>
                      <div className="column"
                        style={{textDecoration: task.completed ? "line-through" : ""}}
                        >
                        <h3>{task.name}</h3>
                        <h5 style={{display:"flex", flexWrap:"wrap"}}>{task.description}</h5>
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
