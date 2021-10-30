import React from 'react';
import PropTypes from 'prop-types';
import monster from './monster.png';

export default function ToDo(props) {
  const killMonster = (button) => {
    button.target.style.transform = "rotate(-90deg)";
  };
  return (
      <div className="container sword" style={{marginTop: "3rem", padding: "2rem"}}>
              {props.data.tasks.map((task) =>
                  (
                    <div className="container" key={task.id} style={{width: 350, height: 60, display: "flex", alignItems: "center", borderBottom: "1px solid gray", paddingTop: "0.5rem"}}>
                      <button style={{ background: "none", border: "none"}} onClick={killMonster.bind(this)}>
                        <img className="sword" src={monster} alt="monster" style={{ width: 30, height: 30}}/>
                      </button>
                      <p>{task.name}</p>
                    </div>      
                  )
              )}
      </div>
  );
}
ToDo.propTypes = {
  data: PropTypes.object.isRequired,
};
