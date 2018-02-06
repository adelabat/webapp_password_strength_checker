import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class MyModalLast extends React.Component {
  constructor(props){
    super(props);
   }

   render() {
     return (
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Enhorabuena, has completado la actividad</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Puedes seguir utilizando la aplicación. También te mostramos un video para que aprendas a generar contraseñas seguras, aunque sabemos que eres un profesional:</h4>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3FtfHKROMCw" frameBorder="0" allow="autoplay; encrypted-media" allowFullscreen></iframe>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.handleClose}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}
