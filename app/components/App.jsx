import React from 'react';
import {connect} from 'react-redux';
import './../assets/scss/main.scss';

import {GLOBAL_CONFIG} from '../config/config.js';

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
    console.log("didmount")
    let objective = new Utils.objective({id:"MyPassword", progress_measure:1, score:1});
    this.props.dispatch(addObjectives([objective]));
  }
  render(){
    return (
      <div id="container">
        <SCORM dispatch={this.props.dispatch} tracking={this.props.tracking} config={GLOBAL_CONFIG}/>
        <Header user_profile={this.props.user_profile} tracking={this.props.tracking} config={GLOBAL_CONFIG}/>
        <MyEntry dispatch={this.props.dispatch} tracking={this.props.tracking} config={GLOBAL_CONFIG}/>
        <Feedback recommendations={this.props.password.recommendations} time_to_crack={this.props.password.time_to_crack}/>
    </div>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(App);
