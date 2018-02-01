import React from 'react';
import {connect} from 'react-redux';
import './../assets/scss/main.scss';

import {GLOBAL_CONFIG} from '../config/config.js';
import {OBJECTIVES} from '../constants/constants.js';
import * as Utils from '../vendors/Utils.js';
import {addObjectives, objectiveAccomplished} from './../reducers/actions';

import SCORM from './SCORM.jsx';
import Header from './Header.jsx';
import MyEntry from './MyEntry.jsx';
import Feedback from './Feedback.jsx';

import * as SCORM_WRAPPER from '../vendors/SCORM_API_Wrapper.js';

export class App extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    let all_objectives = OBJECTIVES.map((obj, index)=>{
      return new Utils.objective({id:obj.id, progress_measure: obj.progress_measure, score: obj.score});
    });
    this.props.dispatch(addObjectives(all_objectives));
  }
  render(){
    return (
      <div id="container">
        <SCORM dispatch={this.props.dispatch} tracking={this.props.tracking} config={GLOBAL_CONFIG}/>
        <Header activity_feedback={this.props.password.activity_feedback} user_profile={this.props.user_profile} tracking={this.props.tracking} config={GLOBAL_CONFIG}/>
        <MyEntry dispatch={this.props.dispatch} user_profile={this.props.user_profile} config={GLOBAL_CONFIG}/>
        <Feedback  conclussion={this.props.password.conclussion} recommendations={this.props.password.recommendations} crack_times_display={this.props.password.crack_times_display}/>
    </div>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(App);
