import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CircularSlider from '@fseehawer/react-circular-slider';
import ToDo from './todo';
import testData from "./testData";
import API from '../../store/api';
import Spinner from '@momentum-ui/react/lib/Spinner';
import Fireworks from '../Animations/1801-fireworks (1).json';
import Lottie from "lottie-react";

import squid from './monsters2x/squid.png';

const monsters = [squid];

const HomePage = (props) => {
  const [data, setData] = useState(testData);
  let showError = false;
  let errorMsg = "";
  // useEffect(() => {
  //   API.login(props.userId, "nei")
  //   .then((res) => {
  //     console.log(res);
  //     //setData(res);
  //   })
  //   .catch(err => {
  //     showError = true;
  //     console.log(err.message);
  //     errorMsg = err.message;
  //     ////////// TESTING
  //     setData(testData);
  //   });
  // }, []);
  if(!data || !data.team){
    return (
      <Spinner />
    );
  };

  let currentMilestone = data.team.milestones.find(milestone => (milestone.done==0));

  let currentProgress = data.team.tp;
  data.team.milestones.forEach(milestone => {
    if (milestone.done==1) {
      currentProgress -= milestone.tpNeeded;
    }
  });
  const setTasks = () => {
    let newState = Object.assign({}, data);
    setData(newState);
  };
  
  return (
    <Fragment>
      <Lottie animationData={Fireworks} style={{position:"absolute", width:"100vw", top:"-200px"}}/>
      <div className="container" style={{
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        flexDirection: "column",
        textAlign: "center"
      }}>
        <h1 style={{ fontWeight: "bold", margin: "1rem 0"}}>{data.team.name.toUpperCase()}</h1>
        <CircularSlider
          renderLabelValue={(<img src={monsters[0]} alt="monster" style={{ width: 120, height: 120, position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)"}}/>)}
          labelColor="#005a58"
          hideKnob={true}
          knobDraggable={false}
          valueFontSize={0}
          labelFontSize="2rem"
          progressColorFrom="#ff0000cc"
          progressColorTo="red"
          progressSize={24}
          trackColor="#eeeeee"
          trackSize={24}
          dataIndex={360 - (currentProgress/currentMilestone["tpNeeded"]*360)}
          style={{width: 280}}
        />
        <p>Reward for the current milestone: {currentMilestone["reward"]}</p>
        <ToDo data={data} setTasks={setTasks}/>
      </div>
    </Fragment>
  );
};

HomePage.propTypes = {
  userId: PropTypes.string.isRequired
};

export default HomePage;
