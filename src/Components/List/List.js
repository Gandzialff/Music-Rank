import React, { useState } from 'react'
import { Container, } from 'react-bootstrap';
import TopPolandData from '../../data/toppoland.json';
import TopWorldData from '../../data/topworld.json';
import {StyledRow,ColWrapper, TrackIDCol,TrackNameCol,TrackArtistCol, TrackAlbumCol, TrackImgCol, StyleImg, SearchDiv, StyledInput} from './List.style';
import  * as ImgPol from './trackplimg';
import  * as ImgWor from './trackwrimg';
import Footer from '../../Components/Footer/Footer';





const TopPoland = (props) => {
    var TopData;
    var Img;
        if(props.name === "TopPoland"){
            TopData = TopPolandData;
            Img = ImgPol;
        }else if(props.name === "TopWorld"){
            TopData = TopWorldData;
            Img = ImgWor;
        }
        
        const [faqInputValue, setFaqInputValue] = useState('');

        const handleInputChange = (e) => {
          setFaqInputValue(e.target.value)
        }
      
        const doesContainPhrase = (phrase, object) => {
          const keys = Object.keys(object);
      
          return keys.find(key => {
            return object[key].toLowerCase().includes(phrase.toLowerCase());
          })
        }
            return(
                <>
                <Container>
                    <SearchDiv>
                    <StyledInput name="faq" type="text" onChange={handleInputChange} placeholder="Szukaj"  />
                    </SearchDiv>
                    {TopData
                        .filter(data => doesContainPhrase(faqInputValue, data))
                        .map( (data, key) =>{
                            return(
                                <StyledRow className = "justify-content-center">
                                    <ColWrapper md = "10" >
                                    <TrackIDCol>{key + 1}</TrackIDCol>
                                    <TrackImgCol>
                                    <StyleImg src= {Img.array[key]} />
                                    </TrackImgCol>
                                    <TrackNameCol>{data.name}</TrackNameCol>
                                    <TrackArtistCol>{data.artists}</TrackArtistCol>
                                    <TrackAlbumCol>{data.album}</TrackAlbumCol>
                                    </ColWrapper>
                                    
                                </StyledRow>
                            )
                        })}
                    </Container>
                    <Footer />
                
                </>
            
            );
        
 }
 export default TopPoland;