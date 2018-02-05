import React from 'react';
import {OBJECTIVES} from '../constants/constants';

export default class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let loggedText;
    let trackingTexts = [];

    if(typeof this.props.tracking.progress_measure === "number"){
      trackingTexts.push("Progreso: " + (this.props.tracking.progress_measure * 100) + "%");
    } else {
      trackingTexts.push("Progreso: sin empezar");
    }
    if(typeof this.props.tracking.score === "number"){
      trackingTexts.push("Puntuación: " + (this.props.tracking.score * 100) + "%");
    } else {
      trackingTexts.push("Puntuación: sin intentos");
    }
    if(this.props.user_profile){
      if((typeof this.props.user_profile.name === "string" && this.props.user_profile.name !=="Unknown")){
        loggedText = <span>Logueado como: {this.props.user_profile.name}</span>;
      }
      if(typeof this.props.user_profile.learner_preference === "object"){
        if(typeof this.props.user_profile.learner_preference.difficulty === "number"){
          trackingTexts.push("Dificultad: " + this.props.user_profile.learner_preference.difficulty);
        }
      }
    }

    let trackingEls = trackingTexts.map((text, index)=>{
      return <span key={index}>{text}</span>;
    });

    return (
      <div>
        <h1 id="heading">Comprueba la Fortaleza de Contraseñas</h1>
        <p id="tracking">{loggedText}{trackingEls}</p>
        <div className="objectives">
          {OBJECTIVES.map((obj, index)=>{
              let icon = this.props.objectives_accomplished.some(e => e.id === obj.id) ? <i className="glyphicon glyphicon-ok"></i>: <i className="glyphicon glyphicon-remove"></i>;
              return <div key={index}>{icon}{obj.desc}</div>;
            })
          }
        </div>
        {this.props.activity_feedback &&
          <p id="activity_feedback">Feedback de la actividad: {this.props.activity_feedback}</p>
        }
      </div>
    );
  }
}
