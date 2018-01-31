import {INITIAL_STATE} from '../constants/constants';
import * as Utils from '../vendors/Utils.js';

function passwordCheckerReducer(state = INITIAL_STATE.password, action){
  switch (action.type){
  case 'NEW_PASSWORD_TO_CHECK':
    return checkPasswd(action.password);
  default:
    return state;
  }
}

/*progress consist of 3 steps*/
export function checkPasswd(password){
  let initialState = {
    password: password,
    time_to_crack: "1 año",
    recommendations: [ "Incluye mayúsculas y minúsculas", "Incluye números"],
    progress: 1,
    score: 1
  }
  //check no username in password
  //podría poner un campo en el estado que indique si ha cambiado el progress y según ese campo en el App lanzo la otra action
  

  return initialState;
}

export default passwordCheckerReducer;
