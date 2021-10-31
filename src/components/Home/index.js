import React, { Fragment, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import CircularSlider from '@fseehawer/react-circular-slider';
import ToDo from './todo';
import testData from "./testData";
import API from '../../store/api';
import Spinner from '@momentum-ui/react/lib/Spinner';

import squid from './monsters2x/squid.png';
import alien from './monsters2x/alien.png';

const monsters = [squid, alien];
var assignedMonster = monsters[0];

const HomePage = (props) => {
  const [data, setData] = useState(null);
  //const [monster, setMonster] = useState(0);
  const blood = useRef();
  useEffect(() => {
    assignedMonster = monsters[Math.round(Math.random()*(monsters.length-1))];
    API.getTasks(props.userId)
    .then((res) => {
      console.log(res);
      setData(res);
      
    })
    .catch(err => {
      console.log(err.message);
      setData(testData);
    });
    //console.log(Math.floor(Math.random() * (2 - 1)));
    //setMonster(Math.round(Math.random() * (2 - 1)));
  }, []);
  if(!data || !data.team){
    return (
      <Spinner style={{position: "absolute", left:"50%", transformX: "-50%"}}/>
    );
  }
  const tasksDone = data.tasks.filter(task => task.completed).length;
  let currentMilestone = data.team.milestones[0];
  let currentProgress = (5-tasksDone)/5;
  data.team.milestones[0].done = (5-tasksDone)/5 <= 0;
  /* data.team.milestones.forEach(milestone => {
    if (milestone.done==1) {
      currentProgress -= milestone.tpNeeded;
    }
  }); */
  const setTasks = () => {
    let newState = Object.assign({}, data);
    setData(newState);
  };
  
  const createBlood = (e) => {
    console.log(e.clientX);
    blood.style.left = `${e.clientX}px`;
    blood.style.top = `${e.clientY}px`;
  };
  

  return (
    <Fragment>
      {/* <Lottie animationData={Fireworks} style={{position:"absolute", width:"100vw", top:"0", display: currentMilestone.done ? "block" : "none"}}/> */}
      <div className="container" style={{
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        flexDirection: "column",
        textAlign: "center"
      }}>
        <h1 style={{ fontWeight: "bold", margin: "1rem 0"}}>{data.team.name.toUpperCase()}</h1>
        {currentProgress > 0 ? (
          <CircularSlider
            renderLabelValue={(<img src={assignedMonster} className="bounce" alt="monster" style={{ width: 120, height: 120, position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)"}}/>)}
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
            dataIndex={360*(currentProgress)}
            style={{width: 280}}
            onClick={createBlood}
          />
        ):
        (
          <div className="container" style={{height:288, width: 280, position: "relative"}}>
            <img id="monster_big" src={assignedMonster} className="monster_big monster_dead_big" alt="monster" style={{ width: 120, height: 120, position: "absolute", left: "50%", top: "50%"}}/>
          </div>
        )}
        <p>Reward for the current milestone: {currentMilestone["reward"]}</p>
        <ToDo data={data} setTasks={setTasks}/>
      </div>
    </Fragment>
  );
};

HomePage.proptypes ={
  userId: PropTypes.string.isRequired
};
export default HomePage;
