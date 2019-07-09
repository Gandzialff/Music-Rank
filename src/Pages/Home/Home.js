import React, { Component } from 'react';
import {Bg, ContentH1, ContentP, H1,P} from './Home.style';
import HomeFooter from '../../Components/HomeFooter/HomeFooter';

export default class Home extends Component{
    render(){
        return(
            <div>            
                <Bg />
                <ContentH1>
                    <H1>Music Rank</H1>
                </ContentH1>
                <ContentP>
                    <P>Najlepsze utwory w jednym miejscu!</P>
                </ContentP>
                <HomeFooter />
            </div>
            );
    }
}