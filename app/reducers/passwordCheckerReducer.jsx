import * as Utils from '../vendors/Utils.js';
import zxcvbn from 'zxcvbn';
import {INITIAL_STATE, OBJECTIVES} from '../constants/constants';

function passwordCheckerReducer(state = INITIAL_STATE.password, action){
  switch (action.type){
  case 'NEW_PASSWORD_TO_CHECK':
    return checkPasswd(state, action);
  default:
    return state;
  }
}


//objectives_accomplished consist of 3 steps (SCORM objectives already added in App.jsx)
//OBJECTIVES array defined in constants
function checkPasswd(state, action){
  //clone state, immutability!
  let receivedState = JSON.parse(JSON.stringify(state));

  let result = zxcvbn(action.password, [action.username]);
  console.log(result);
  receivedState.password = action.password;
  receivedState.crack_times_display.offline_fast_hashing_1e10_per_second = Utils.translateTime(result.crack_times_display.offline_fast_hashing_1e10_per_second);
  receivedState.crack_times_display.offline_slow_hashing_1e4_per_second = Utils.translateTime(result.crack_times_display.offline_slow_hashing_1e4_per_second);
  receivedState.crack_times_display.online_no_throttling_10_per_second = Utils.translateTime(result.crack_times_display.online_no_throttling_10_per_second);
  receivedState.crack_times_display.online_throttling_100_per_hour = Utils.translateTime(result.crack_times_display.online_throttling_100_per_hour);

  receivedState.recommendations = [];
  if(result.feedback.suggestions.length>0){
    result.feedback.suggestions.forEach(function(element) {
      receivedState.recommendations.push(Utils.translate(element));
    });
  }

  receivedState.sequence = result.sequence;

  receivedState.conclussion = result.score;

  //check password content
  var letters = /[a-z]/;
  var nums = /[0-9]/;
  let uppercase = /[A-Z]/;
  let special = /[$&+,:;=?@#|'<>.^*()%!-]/;
  receivedState.contains.letters = receivedState.password.match(letters);
  receivedState.contains.numbers = receivedState.password.match(nums);
  receivedState.contains.uppercase = receivedState.password.match(uppercase);
  receivedState.contains.special = receivedState.password.match(special);


  //check progress
  if(result.score===0 || result.score===1){
    if(receivedState.objectives_accomplished.some(e => e.id === OBJECTIVES[0].id)){
      receivedState.activity_feedback = "Ya has comprobado una contraseña sencilla. Prueba ahora con contraseñas más complejas.";
    } else {
      receivedState.activity_feedback = "";
      receivedState.objectives_accomplished.push(OBJECTIVES[0]);
    }
  } else if(result.score===2 || result.score===3){
    if(receivedState.objectives_accomplished.some(e => e.id === OBJECTIVES[1].id)){
      receivedState.activity_feedback = "Ya has comprobado una contraseña de fortaleza media. Prueba ahora con contraseñas más complejas y más simples.";
    } else {
      receivedState.activity_feedback = "";
      receivedState.objectives_accomplished.push(OBJECTIVES[1]);
    }
  } else if(result.score===4){
    if(receivedState.objectives_accomplished.some(e => e.id === OBJECTIVES[2].id)){
      receivedState.activity_feedback = "Ya has comprobado una contraseña robusta. Prueba ahora con contraseñas más simples.";
    } else {
      receivedState.activity_feedback = "";
      receivedState.objectives_accomplished.push(OBJECTIVES[2]);
    }
  }

  return receivedState;
}

export default passwordCheckerReducer;
