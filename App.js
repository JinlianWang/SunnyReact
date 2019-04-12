import React from 'react';
import classes from './App.scss';


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
   }
   render() {
      return (
         <div>
            <input type = "text" value = {this.state.data} 
               onChange = {this.updateState} />
            <button className={classes.app} onClick = {this.clearState}>CLICK</button>
            <h4>{this.state.data}</h4>
         </div>
      );
   }
}
export default App;