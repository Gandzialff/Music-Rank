import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

import {StyledLink, StyledLogo, StyledDiv} from './Header.style';

const Header = () =>{
    return(
        <StyledDiv>
            <Container>
            <Navbar variant = 'dark' expand = 'lg' >
            <Navbar.Brand><NavLink to = "/"><StyledLogo/></NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls = "basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-center" id = "basic-navbar-nav">
                <Nav>
                    <StyledLink activeClassName = 'active' to = "/toppoland">Top 20 Polska</StyledLink>
                    <StyledLink activeClassName = 'active' to = "/topworld">Top 20 Świat</StyledLink>                        
                </Nav>   
            </Navbar.Collapse>
        </Navbar>
        </Container>
        </StyledDiv>      
    );
}
    
export default Header;