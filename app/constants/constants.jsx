export const INITIAL_STATE = {
  tracking:{
    progress_measure:0,
    score:null,
    objectives:{},
  },
  scorm:null,
  user_profile:{
    id:undefined,
    name:"Unknown",
    learner_preference:{},
  },
  password:{
      password: "",
      crack_times_display: "",
      recommendations: [],
      progress: 0,
      score: 0
  }
};

export const RULES = {
  too_short: 8,

};

export const RECOMMENDATIONS = {
  too_short: "La contraseña es demasiado corta",
  includeNumbersAndLetters: "La contraseña debe incluir números y letras"


};
