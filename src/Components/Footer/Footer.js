import React from 'react';
import {Row} from 'react-bootstrap';
import {
    StyledFooter,
    StyledP
} from './Footer.style';

const Footer = () => {
    return(
        <StyledFooter fluid>
            <Row className = "justify-content-center">
            <StyledP>Copyright &copy; 2019 by Mateusz Krajnik</StyledP>
            </Row> 
        </StyledFooter>
    );
}

export default Footer;