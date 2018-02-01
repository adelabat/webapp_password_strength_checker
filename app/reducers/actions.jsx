export function scormConnected(scorm){
  return {
    type:'SCORM_CONNECTED',
    scorm:scorm,
  };
}

export function updateUserProfile(user_profile){
  return {
    type:'UPDATE_USER_PROFILE',
    user_profile:user_profile,
  };
}

export function addObjectives(objectives){
  return {
    type:'ADD_OBJECTIVES',
    objectives:objectives,
  };
}

export function objectiveAccomplished(objectiveId, accomplishedScore = null){
  return {
    type:'OBJECTIVE_ACCOMPLISHED',
    objective_id:objectiveId,
    accomplished_score:accomplishedScore,
  };
}

function newPass(password, username){
  return {
    type:'NEW_PASSWORD_TO_CHECK',
    password:password,
    username:username
  }
}

// Uso Thunk para encadenar acciones
//si la acción newPass cambia y el alumno consigue un objetivo, lo lanzo desde aquí
//la opción alternativa a hacerlo así, que yo haya visto, es hacerlo en willreceiveprops
//ver si nextprops ha cambiado el progress y lanzar otra action ahí, pero esto de thunk me ha
//parecido más correcto
export function newPassWithScorm(password, username) {
    return (dispatch, getState) => {
        const firstState = getState();
        dispatch(newPass(password, username));

        const secondState = getState();
        //check if there is a new objectives_accomplished
        if(secondState.password.objectives_accomplished.length != firstState.password.objectives_accomplished.length) {
            let last = secondState.password.objectives_accomplished.length-1;
            console.log("Objetivo cumplido: ", secondState.password.objectives_accomplished[last]);
            dispatch(objectiveAccomplished(secondState.password.objectives_accomplished[last].id, secondState.password.objectives_accomplished[last].score));
        }
      }
}
