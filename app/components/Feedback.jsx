import React from 'react';
import MyModal from './MyModal.jsx';
import { Button } from 'react-bootstrap';

const conclussion_texts = [
  "La contraseña introducida es muy sencilla de adivinar, un ordenador atacante la adivina en menos de 1000 intentos.",
  "La contraseña introducida se puede adivinar, un ordenador atacante la adivina en menos de 1.000.000 intentos.",
  "La contraseña introducida algo dificil de adivinar, un ordenador atacante la adivina en menos de 100.000.000 intentos. !Puede parecer mucho pero recuerda que los ordenadores no se cansan!",
  "La contraseña introducida dificil de adivinar, protege bien de los ataques. Un ordenador atacante la adivina en menos de 10.000.000.000 intentos.",
  "La contraseña introducida muy dificil de adivinar, protege muy bien de los ataques. Un ordenador atacante la adivina en más de 10.000.000.000 intentos."
];

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
        <div className="">
          <p>La contraseña se tardaría en romper por un ordenador convencional: </p>
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

          <div>Conclusión: {conclussion_texts[this.props.conclussion]}</div>
          <div>Otras recomendaciones generales: no utilice palabras del diccionario como contraseñas, a ser posible que su contraseña no contenga su nombre de usuario, ...</div>
        </div>
        <MyModal show={this.state.showModal} handleClose={this.handleClose}/>
      </div>
    );
  }
}
