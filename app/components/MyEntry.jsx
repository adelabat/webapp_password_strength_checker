import React from 'react';
import {newPassWithScorm} from './../reducers/actions';

export default class MyEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.dispatch(newPassWithScorm(event.target.value, this.props.user_profile.name));
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" placeholder="Introduce una contraseña para comprobar su fortaleza" value={this.state.value} onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}
