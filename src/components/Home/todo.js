import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, CheckboxGroup } from '@momentum-ui/react';
import monster from './monster.png';
export default function ToDo(props) {
  return (
      <div className="container" style={{marginTop: "3rem"}}>
              {props.data.tasks.map((task) =>
                  (
                    <div className="container" key={task.id} style={{width: 350, height: 60, display: "flex", alignItems: "center", borderBottom: "1px solid gray", paddingTop: "0.5rem"}}>
                      <img src={monster} alt="monster" style={{ width: 30, height: 30}}/>
                    </div>      
                  )
              )}
      </div>
  );
}
ToDo.propTypes = {
  data: PropTypes.object.isRequired,
};
