import React, { Component } from 'react'
import Header from '../Components/Navbar/Header';
export default class MainTemplate extends Component{
    render(){
        return(
            <>
              <Header />
                {this.props.children} 
            </>
        );
    }
}