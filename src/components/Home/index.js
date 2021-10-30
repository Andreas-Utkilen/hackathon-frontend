import React, { Fragment } from 'react';

import Hero from '../shared/Hero';
import CircularSlider from '@fseehawer/react-circular-slider';
import ToDo from './todo';
import data from "./testData";
import Spinner from '@momentum-ui/react/lib/Spinner';
const HomePage = () => {
  return (
    <Fragment>
      <div className="container" style={{
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        flexDirection: "column"
      }}>
        <CircularSlider
          label="Team 1"
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
          dataIndex={230}
          style={{width: 280}}
        />
        <p>Time until next update: 5 days, 4 hours and 12 mins</p>
        <ToDo data={data} />
        <Spinner />
      </div>
    </Fragment>
  );
};

export default HomePage;
