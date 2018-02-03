import React from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';

export default class MyEntry extends React.Component {
  render() {
    let eye_open = <span className="glyphicon glyphicon-eye-open open" onClick={this.props.handleEyeChange}></span>;
    let eye_closed = <span className="glyphicon glyphicon-eye-close closed" onClick={this.props.handleEyeChange}></span>;
    return (
      <form className="form_pass" onSubmit={this.props.handleSubmit}>
          <FormGroup bsSize="large">
              <FormControl className="my_input" type={this.props.hide_pass ? 'password':'text'} autoComplete="off" id="mypassword" placeholder="Introduce una contraseña para comprobar su fortaleza" value={this.props.value} onChange={this.props.handleInputChange} />
              { this.props.hide_pass ? eye_closed: eye_open }
              <Button bsStyle="primary" type="submit" >Comprobar</Button><br/>
        </FormGroup>
      </form>
    );
  }
}
