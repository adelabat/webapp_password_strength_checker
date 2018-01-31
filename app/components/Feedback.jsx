import React from 'react';

export default class Feedback extends React.Component {
  render(){
    return (
      <div className="">
        <div className="">
          <p>La contraseña se tardaría en romper por un ordenador convencional: </p>
          # online attack on a service that ratelimits password auth attempts.
          <b>{this.props.crack_times_display.offline_fast_hashing_1e10_per_second}</b><br/>
          # online attack on a service that doesn't ratelimit,
            <b>  {this.props.crack_times_display.offline_slow_hashing_1e4_per_second}</b><br/>
            # offline attack slow hash function
            <b>{this.props.crack_times_display.online_no_throttling_10_per_second}</b><br/>
        # offline attack. fast hash function
          <b>  {this.props.crack_times_display.online_throttling_100_per_hour}</b><br/>
          <br/>
        <div>Recomendaciones:</div>
          {this.props.recommendations.map((rec, index) => {
              return (<div key={index}>{rec}</div>);
            })}
            <br/>
            <div>Otras recomendaciones generales: no utilice palabras del diccionario como contraseñas, a ser posible que su contraseña no contenga su nombre de usuario, ...</div>
        </div>
      </div>
    );
  }
}
