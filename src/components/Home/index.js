import React, { Fragment } from 'react';

import Hero from '../shared/Hero';
import CircularSlider from '@fseehawer/react-circular-slider';
import ToDo from './todo';
import data from "./testData";
import Spinner from '@momentum-ui/react/lib/Spinner';

const HomePage = (props) => {
  var currentMilestone = props.data["team"]["milestones"].find(milestone => (milestone["done"]==0));

  var currentProgress = props.data["team"]["tp"];
  props.data["team"]["milestones"].forEach(milestone => {
    if (milestone["done"]==1) {
      currentProgress -= milestone["tpNeeded"]
    }
  });

  return (
    <Fragment>
      <div className="container" style={{
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        flexDirection: "column",
        textAlign: "center"
      }}>
        <CircularSlider
          label={props.data["team"]["name"]}
          labelColor="#005a58"
          hideKnob={true}
          knobDraggable={false}
          valueFontSize={0}
          labelFontSize="2rem"
          progressColorFrom="#00bfbd"
          progressColorTo="#009c9a"
          progressSize={24}
          trackColor="#eeeeee"
          trackSize={24}
          dataIndex={currentProgress/currentMilestone["tpNeeded"]*360}
          style={{width: 280}}
        />
        <p>Reward for the current milestone: {currentMilestone["reward"]}</p>
        <p>Time until next update: 5 days, 4 hours and 12 mins</p>
        <ToDo data={data} />
        {/* <Spinner /> */}
      </div>
    </Fragment>
  );
};

export default HomePage;
