import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, CheckboxGroup } from '@momentum-ui/react';
import monster from '../MonsterSprites/monster.png';

export default function ToDo(props) {
  return (
    <div className="container" style={{ marginTop: "3rem" }}>
      {props.data.tasks.map((task) =>
      (
        <div className="container" key={task.id} style={{ width: 350, height: 60, display: "flex", alignItems: "center", borderBottom: "1px solid gray", paddingTop: "0.5rem" }}>
          <CheckboxGroup name={`CheckboxGroup-${task.id}`}>
            <a className='sword'>
              <img src={monster} alt="Big monster"/>
            </a>
            <Checkbox
              checked={task.completed}
              label={task.name}
              htmlId={`checkbox-${task.id}`}
              onChange={() => {
                task.completed = true;
              }}
            />
            <h6 style={{ display: "flex", flexWrap: "wrap" }}>{task.description}</h6>
          </CheckboxGroup>
        </div>
      )
      )}
    </div>
  );
}
ToDo.propTypes = {
  data: PropTypes.object.isRequired,
};
