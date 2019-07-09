import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';



export const StyledLink = styled(NavLink)`
    color: white;
    font-size: 25px;
    transition: 0.2s ease;
    :before{
        content: "";
        padding-left:20px;
    }
    :after{
        content: "";
        padding-right: 20px;
    }
    :hover{
        color: white
        text-decoration: none;
        -webkit-transform: scale(1.15);
         transform: scale(1.15);
    
      }
    &.active {
        font-size: 30px;
        color: grey;
        border-bottom: 2px grey solid;
    }   
    @media screen and (max-width: 960px) {
        &.active {
            font-size: 25px;
            color: grey;
            border: 0;
        }   
        :hover{
            color: white
            text-decoration: none;
            -webkit-transform: scale(1);
         transform: scale(1);
        
          }
    }
`;


export const StyledLogo = styled(Logo)`
transition: 0.2s ease;
:hover{
    text-decoration: none;
    -webkit-transform: scale(1.15);
     transform: scale(1.15);
}
`;

export const StyledDiv = styled.div`
width: 100%;
background-color: black;
z-index:1;
`;


