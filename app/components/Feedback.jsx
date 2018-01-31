import React from 'react';

export default class Feedback extends React.Component {
  render(){
    return (
      <div className="">
        <div className="">
          <p>La contraseña se tardaría en romper por un ordenador convencional: {this.props.time_to_crack}</p>
          <div>Recomendaciones:</div>
          {this.props.recommendations.map((rec, index) => {
              return (<div key={index}>{rec}</div>);
            })}
            <div>Otras recomendaciones generales: no utilice palabras del diccionario como contraseñas, a ser posible que su contraseña no contenga su nombre de usuario, ...</div>
        </div>
      </div>
    );
  }
}
