import React,{Component} from 'react';
import {
  Switch,
  BrowserRouter as Router,
   Route,
 } from 'react-router-dom';

import MainTemplate from '../../Templates/MainTemplate';
import Home from '../Home/Home';
import TopPoland from '../TopPoland/TopPoland';
import TopWorld from '../TopWorld/TopWorld';

export default class App extends Component{
  render(){
    return(
      <Router>
        <MainTemplate>
        <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/toppoland" component={TopPoland} />
              <Route path="/topworld" component={TopWorld} />
            </Switch>  
        </MainTemplate>
      </Router>
    );
  }
}