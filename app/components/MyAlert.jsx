import React from 'react';
import { Alert, Button } from 'react-bootstrap';

export default class MyAlert extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleDismiss = this.handleDismiss.bind(this);
    this.handleShow = this.handleShow.bind(this);

    this.state = {
      show: true
    };
  }

  handleDismiss() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    if (this.state.show) {
      return (
        <Alert bsStyle="warning" bsSize="xsmall" onDismiss={this.handleDismiss}>
          <h4>Esta aplicación no guarda ni almacena tus contraseñas</h4>
          <p>
            No introduzcas tu contraseña real. Este servicio solo tiene fines educativos.
          </p>
        </Alert>
      );
    } else {
      return null;
    }
  }
}
