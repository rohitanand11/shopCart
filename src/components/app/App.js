import React ,{Component} from 'react';
import Header from '../header/Header';

import Classes from  './App.module.scss';

class App extends Component{
  render(){
    return(
      <div className={Classes.App}>
        <Header/>
      </div>
    )
  }
}

export default App;
