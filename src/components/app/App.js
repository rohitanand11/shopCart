import React ,{Component} from 'react';
import Header from '../header/Header';
import MainDisplay from "../mainDisplay/MainDisplay";

import Classes from  './App.module.scss';
import {data} from '../../data/tanishq_products';

class App extends Component{

  firstTenelems = ()=>{
    return data;
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
