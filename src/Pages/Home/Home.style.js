import styled from 'styled-components';
import BgImage from '../../assets/img/bg.png';

export const Bg = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 95%;
background: url('${BgImage}') no-repeat center center fixed; 
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
z-index: -1;
`;

export const ContentH1 = styled.div`
position: absolute;
color: white;
width: 100%;
left: 0;
top: 40%;
display: inline-flex;
    margin-left: auto;
    margin-right: auto
`;
export const ContentP = styled.div`
position: absolute;
color: white;
width: 100%;
left: 0;
top: 47%;
display: inline-flex;
    margin-left: auto;
    margin-right: auto
@media(max-width: 960px){
    top: 50%;
}
`;

export const H1 = styled.h1`
font-size: 50px;
margin-left: auto;
    margin-right: auto;
`;
export const P = styled.h1`
font-size: 20px;
margin-left: auto;
    margin-right: auto;
    @media(max-width: 960px){
        font-size: 15px;
    }
`;