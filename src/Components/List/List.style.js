import { Row, Col } from "react-bootstrap";
import styled from 'styled-components';
import SearchLogo from '../../assets/img/searchlogo.png';


export const StyledRow = styled(Row)`
height: 110px;
margin: 5px;
color: black;
`;
export const ColWrapper = styled(Col)`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: [col1-start] 60px [col2-start] 100px  [col3-start] 350px [col4-start];
    grid-template-rows: [row1-start] auto [row2-start] auto [row2-end];
    @media (max-width: 990px){
        grid-template-columns: [col1-start] 40px [col2-start] 120px  [col3-start] 16vw [col4-start];
        }
    @media (max-width: 650px){
        grid-template-columns: [col1-start] 30px [col2-start] 100px  [col3-start] 18vw [col4-start];
        }

    justify-items: center;
    align-items: center;
    border: 1px solid #e9e9e9;
    background-color: white;
    border-radius: 2px;
    margin-top: 2px;
 :hover{
        -webkit-box-shadow: 1px 6px 18px -12px rgba(0,0,0,1);
        -moz-box-shadow: 1px 6px 18px -12px rgba(0,0,0,1);
        box-shadow: 1px 6px 18px -12px rgba(0,0,0,1);
        }
`;

export const TrackIDCol = styled.div`
        grid-column: col1-start ;
        grid-row: row1-start / row2-end;
        font-weight: bold;
        font-size: 1.8vw;
        @media (max-width: 766px){
                font-size:3vw;
        }
        
`;
export const TrackImgCol = styled.div`
        grid-column: col2-start;
        grid-row: row1-start / row2-end;
`;
        export const StyleImg = styled.img`
        width: 80%;
        height: 80%;
        border: 1px solid black;
`;
export const TrackNameCol = styled.div`
        grid-column: col3-start / col4-end;
        grid-row: row1-start ;
        justify-self: left;
        font-weight: bold;
        font-size: 2.5vw;
        @media (max-width: 420px){
                font-size: 3vw;
        }
        @media (min-width: 990px){
                font-size: 1.4vw;
        }
        
`;

export const TrackArtistCol = styled.div`
grid-column: col3-start;
        grid-row: row2-start ;
        justify-self: left;
        align-self: start;
        font-size: 1.8vw;
        @media (max-width: 420px){
                font-size: 3vw;
        }
        @media (min-width: 990px){
                font-size: 0.9vw;  
        }
`;

export const TrackAlbumCol = styled.div`
        grid-column: col4-start;
        grid-row: row2-start ;
        font-size: 1.8vw;
        justify-self: left;
        align-self: start;
        @media (max-width: 420px){
                font-size: 3vw;
        }
        @media(min-width: 990px){
                font-size: 0.9vw;  
        }
        
`;

export const SearchDiv = styled.div`
position: -webkit-sticky;
     position: -moz-sticky;
     position: -o-sticky;
     position: -ms-sticky;
     position: sticky;
     top: 5px;
     justify-self: right;
     z-index: 1
`;

export const StyledInput  = styled.input`
  width: 2%;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 50%;
  font-size: 16px;
  background-color: white;
  background-image: url('${SearchLogo}');
  background-position: 13px 8px; 
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  :focus{
    width: 100%;
    border-radius: 4px;
  }
`;