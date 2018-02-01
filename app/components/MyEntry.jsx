import React from 'react';
import {newPassWithScorm} from './../reducers/actions';

import { Button } from 'react-bootstrap';

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
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(newPassWithScorm(this.state.value, this.props.user_profile.name));
    this.setState({ value: "" });
  }

  handleInputChange(event) {
    this.setState({hide_pass: event.target.checked});

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <input type={this.state.hide_pass ? 'password':'text'} autoComplete="off" id="mypassword" placeholder="Introduce una contraseña para comprobar su fortaleza" value={this.state.value} onChange={this.handleChange} />
          <Button bsStyle="primary" type="submit" >Comprobar</Button><br/>
          <input name="hide_pass" id="hide_pass" type="checkbox" checked={this.state.hide_pass} onChange={this.handleInputChange} />
          <label htmlFor="hide_pass">Ocultar</label>
      </form>
    );
  }
}
