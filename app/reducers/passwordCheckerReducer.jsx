import {INITIAL_STATE, RULES, RECOMMENDATIONS} from '../constants/constants';
import * as Utils from '../vendors/Utils.js';
import zxcvbn from 'zxcvbn';

function passwordCheckerReducer(state = INITIAL_STATE.password, action){
  switch (action.type){
  case 'NEW_PASSWORD_TO_CHECK':
    return checkPasswd(action.password, action.username);
  default:
    return state;
  }
}

/*progress consist of 3 steps*/
export function checkPasswd(password, username){
  let initialState = {
    password: password,
    crack_times_display: {offline_fast_hashing_1e10_per_second: "", offline_slow_hashing_1e4_per_second: "", online_no_throttling_10_per_second: "", online_throttling_100_per_hour: ""},
    recommendations: [],
    conclussion: 0,
    progress: 0,
    score: 0
  }
  //TODO check no username in password
  /*
  if(password.length < RULES.too_short){
    initialState.recommendations.push(RECOMMENDATIONS.too_short);
  } else {
    initialState.progress = 1;
    initialState.score = 1;
  }

  if( /[a-z]+/i.test(password) && /[0-9]+/.test(password)){
    initialState.recommendations.push(RECOMMENDATIONS.too_short);
  }
  */
  //TODO meter en el array vacio este un diccionario de castellano y el username y passwords tipicas españolas
  let result = zxcvbn(password, [username]);
  console.log(result);
  initialState.crack_times_display.offline_fast_hashing_1e10_per_second = Utils.translateTime(result.crack_times_display.offline_fast_hashing_1e10_per_second);
  initialState.crack_times_display.offline_slow_hashing_1e4_per_second = Utils.translateTime(result.crack_times_display.offline_slow_hashing_1e4_per_second);
  initialState.crack_times_display.online_no_throttling_10_per_second = Utils.translateTime(result.crack_times_display.online_no_throttling_10_per_second);
  initialState.crack_times_display.online_throttling_100_per_hour = Utils.translateTime(result.crack_times_display.online_throttling_100_per_hour);

  if(result.feedback.suggestions.length>0){
    result.feedback.suggestions.forEach(function(element) {
      initialState.recommendations.push(Utils.translate(element));
    });
  }

  initialState.conclussion = result.score;

  return initialState;
}

export default passwordCheckerReducer;
