import React from 'react';
import {newPassWithScorm} from './../reducers/actions';

export default class MyEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', hide_pass: true};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.dispatch(newPassWithScorm(event.target.value, this.props.user_profile.name));
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  handleInputChange(event) {
    this.setState({hide_pass: event.target.checked});

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <input type={this.state.hide_pass ? 'password':'text'} id="mypassword" placeholder="Introduce una contraseña para comprobar su fortaleza" value={this.state.value} onChange={this.handleChange} />
          <input name="hide_pass" id="hide_pass" type="checkbox" checked={this.state.hide_pass} onChange={this.handleInputChange} />
          <label for="hide_pass">Ocultar</label>
      </form>
    );
  }
}
