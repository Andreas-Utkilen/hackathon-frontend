import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CircularSlider from '@fseehawer/react-circular-slider';
import ToDo from './todo';
import testData from "./testData";
import API from '../../store/api';
import AlertDefault from '../shared/Alert';
import Spinner from '@momentum-ui/react/lib/Spinner';
const HomePage = (props) => {
  const [data, setData] = useState(null);
  let showError = false;
  let errorMsg = "";
  useEffect(() => {
    API.getTasks(props.userId)
    .then((res) => {
      setData(res);
    })
    .catch(err => {
      showError = true;
      console.log(err.message);
      errorMsg = err.message;
      ////////// TESTING
      setData(testData);
    });
  }, []);
  if(!data){
    return (
      <Spinner />
    );
  }
  let currentMilestone = data.team.milestones.find(milestone => (milestone.done==0));

  let currentProgress = data.team.tp;
  data.team.milestones.forEach(milestone => {
    if (milestone.done==1) {
      currentProgress -= milestone.tpNeeded;
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
          label={data.team.name}
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
      </div>
    </Fragment>
  );
};

HomePage.propTypes = {
  userId: PropTypes.string.isRequired
};

export default HomePage;
