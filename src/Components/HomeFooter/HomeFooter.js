import React from 'react';
import {Row} from 'react-bootstrap';
import {
    StyledFooter,
    StyledP
} from './HomeFooter.style';

const HomeFooter = () => {
    return(
        <StyledFooter>
            <Row className = "justify-content-center">
            <StyledP>Copyright &copy; 2019 by Mateusz Krajnik</StyledP>
            </Row> 
        </StyledFooter>
    );
}

export default HomeFooter;