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


// An example of checking state after a dispatch
export function newPass(password) {
    return (dispatch, getState) => {
        const firstState = getState();
        dispatch({
          type:'NEW_PASSWORD_TO_CHECK',
          password:password,
        });

        const secondState = getState();
        console.log(secondState);
        if(secondState.password.progress != firstState.password.progress) {
            console.log("lanzamos la segunda accion");
            dispatch(objectiveAccomplished(secondState.tracking.objectives.MyPassword.id, 1));
        }
      }
}
