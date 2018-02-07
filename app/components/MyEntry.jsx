import React from 'react';

export default class MyEntry extends React.Component {
  render() {
    let eye_open = <span className="glyphicon glyphicon-eye-open open" onClick={this.props.handleEyeChange}></span>;
    let eye_closed = <span className="glyphicon glyphicon-eye-close closed" onClick={this.props.handleEyeChange}></span>;

    return (
      <form className="form_pass" onSubmit={this.props.handleSubmit}>
              <input className="my_input" type={this.props.hide_pass ? 'password':'text'} autoComplete="off" id="mypassword" placeholder="Introduce una contraseña para comprobar su fortaleza" value={this.props.value} onChange={this.props.handleInputChange} />
              { this.props.hide_pass ? eye_closed: eye_open }
              <button type="submit" >Comprobar</button><br/>
              <span clasName={this.props.contains.letters? "bright":"dark"}>Letras</span> <span clasName={this.props.contains.uppercase? "bright":"dark"}>Mayúsculas</span> <span clasName={this.props.contains.numbers? "bright":"dark"}>Números</span> <span clasName={this.props.contains.special? "bright":"dark"}>Símbolos</span>
              <div>Barrita amarilla llena hasta el: {this.props.conclussion}</div>
      </form>
    );
  }
}
