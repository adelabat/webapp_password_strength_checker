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

function newPass(password){
  return {
    type:'NEW_PASSWORD_TO_CHECK',
    password:password,
  }
}

// Uso Thunk para encadenar acciones
//si la acción newPass cambia y el alumno consigue un objetivo, lo lanzo desde aquí
//la opción alternativa a hacerlo así, que yo haya visto, es hacerlo en willreceiveprops
//ver si nextprops ha cambiado el progress y lanzar otra action ahí, pero esto de thunk me ha
//parecido más correcto
export function newPassWithScorm(password) {
    return (dispatch, getState) => {
        const firstState = getState();
        dispatch(newPass(password));

        const secondState = getState();
        if(secondState.password.progress != firstState.password.progress) {
            console.log("lanzamos la segunda accion");
            dispatch(objectiveAccomplished(secondState.tracking.objectives.MyPassword.id, 1));
        }
      }
}
