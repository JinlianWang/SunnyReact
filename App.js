import React from 'react';
import classes from './App.scss';
import ReactDOM from 'react-dom';


class App extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         data: 'Initial data...'
      }
      this.updateState = this.updateState.bind(this);
      this.clearState = this.clearState.bind(this);
   };
   updateState(e) {
      this.setState({data: e.target.value});
   }
   clearState(e) {
      this.setState({data: 'Initial data...'});
      ReactDOM.findDOMNode(this.refs.myInput).focus();
   }
   render() {
      return (
         <div>
            <input ref = "myInput" type = "text" value = {this.state.data} 
               onChange = {this.updateState} />
            <button className={classes.app} onClick = {this.clearState}>CLICK</button>
            <h4>{this.state.data}</h4>
         </div>
      );
   }
}
export default App;