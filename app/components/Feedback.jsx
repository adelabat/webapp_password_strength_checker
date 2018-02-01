import React from 'react';
import MyModal from './MyModal.jsx';
import { Button, Panel} from 'react-bootstrap';
import {CONCLUSSION_TEXTS} from '../constants/constants.js';


export default class Feedback extends React.Component {
  constructor(props){
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = { showModal: false };
   }

   handleClose() {
     this.setState({ showModal: false });
   }

   handleShow() {
     this.setState({ showModal: true });
   }
   render(){
     return (
      <div className="">
          <Panel bsStyle="success" className="pass_info">
              <Panel.Heading>
                <Panel.Title componentClass="h3">Información sobre la contraseña introducida:</Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <p>La contraseña se tardaría en romper: </p>
                # En un ataque offline. Esto es si se roba la base de datos de contraseñas cuanto se tarda en adivinar la que has escrito:
                <b>{this.props.crack_times_display.offline_slow_hashing_1e4_per_second}</b><br/>
                # En un ataque online a 10 contraseñas por segundo:
                <b>{this.props.crack_times_display.online_no_throttling_10_per_second}</b>
                <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
                  Explicación
                </Button>
                <br/>
                # En un ataque online a 100 contraseñas por hora:
                <b>{this.props.crack_times_display.online_throttling_100_per_hour}</b><br/>
                <br/>

                <div>Recomendaciones:</div>
                {this.props.recommendations.map((rec, index) => {
                    return (<div key={index}>{rec}</div>);
                  })}
                <br/>

                <div>Conclusión: {CONCLUSSION_TEXTS[this.props.conclussion]}</div>
                <div>Otras recomendaciones generales: no utilice palabras del diccionario como contraseñas, a ser posible que su contraseña no contenga su nombre de usuario, ...</div>

              </Panel.Body>
            </Panel>
        <MyModal show={this.state.showModal} handleClose={this.handleClose}/>
      </div>
    );
  }
}
