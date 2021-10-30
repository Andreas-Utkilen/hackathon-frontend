import React from 'react';
import PropTypes from 'prop-types';
import monster from './monster.png';

export default function ToDo(props) {
  const killMonster = (button) => {
    var className = button.target.className;
    if(className.includes("monster_dead")) {
      className = className.replace("monster_dead", "");
    }
    else {
      className += " monster_dead";
    }
    button.target.className = className;
    // button.target.style.transform = "rotate(-90deg)";
  };
  return (
      <div className="container sword" style={{marginTop: "3rem", padding: "2rem"}}>
              {props.data.tasks.map((task) =>
                  (
                    <div className="container" key={task.id} style={{width: 350, height: 60, display: "flex", alignItems: "center", borderBottom: "1px solid gray", paddingTop: "0.5rem"}}>
                      <button style={{ background: "none", border: "none"}} onClick={killMonster.bind(this)}>
                        <img className="sword monster_alive" src={monster} alt="monster"/>
                      </button>
                      <div className="column">
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
