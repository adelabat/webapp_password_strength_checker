import React from 'react';
import {connect} from 'react-redux';
import './../assets/scss/main.scss';

import {GLOBAL_CONFIG} from '../config/config.js';
import {OBJECTIVES} from '../constants/constants.js';
import * as Utils from '../vendors/Utils.js';
import {addObjectives, objectiveAccomplished, newPassWithScorm} from './../reducers/actions';

import SCORM from './SCORM.jsx';
import Header from './Header.jsx';
import MyEntry from './MyEntry.jsx';
import Feedback from './Feedback.jsx';
import MyAlert from './MyAlert.jsx';

import * as SCORM_WRAPPER from '../vendors/SCORM_API_Wrapper.js';

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: '', hide_pass: false };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEyeChange = this.handleEyeChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(newPassWithScorm(this.state.value, this.props.user_profile.name));
    this.setState({ value: "" });
  }

  handleEyeChange(event) {
    let new_state = event.target.classList.contains("open") ? true : false;
    this.setState({hide_pass: new_state});
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
        <Header activity_feedback={this.props.password.activity_feedback} objectives_accomplished={this.props.password.objectives_accomplished} user_profile={this.props.user_profile} tracking={this.props.tracking} config={GLOBAL_CONFIG}/>
        <MyAlert/>
        <MyEntry handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange} handleEyeChange={this.handleEyeChange} value={this.state.value} hide_pass={this.state.hide_pass} dispatch={this.props.dispatch} user_profile={this.props.user_profile} config={GLOBAL_CONFIG}/>
        <Feedback hide_pass={this.state.hide_pass} password={this.props.password.password} sequence={this.props.password.sequence} conclussion={this.props.password.conclussion} recommendations={this.props.password.recommendations} crack_times_display={this.props.password.crack_times_display}/>
    </div>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(App);
