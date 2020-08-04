import React ,{Component} from 'react';
import Header from '../header/Header';
import MainDisplay from "../mainDisplay/MainDisplay";

import Classes from  './App.module.scss';
import {sliceArray} from '../../data/data';

class App extends Component{

  firstTenelems = ()=>{
    return sliceArray(1,10);
  }

  render(){
    return(
      <div className={Classes.App}>
        <Header/>
        <MainDisplay data={this.firstTenelems()}/>
      </div>
    )
  }
}

export default App;
