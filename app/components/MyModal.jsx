import React from 'react';

export default class MyModal extends React.Component {
  constructor(props){
    super(props);
   }

   render() {
     return (
       <div className={"modal-content " + (this.props.show ? "show":"hide")} role="document">
         <div className="modal-header">
           <button type="button" className="close"  onClick={this.props.handleClose}><span aria-hidden="true">×</span></button>
           <h4 className="modal-title">Explicación con un video de Youtube</h4>
           </div>
           <div className="modal-body">
             <h4>Aquí podeis ver la explicación de los tipos de ataques</h4>
             <iframe width="560" height="315" src="https://www.youtube.com/embed/3FtfHKROMCw" frameBorder="0" allow="autoplay; encrypted-media"></iframe>
           </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" onClick={this.props.handleClose}>Cerrar</button>
          </div>
        </div>
    );
  }
}
