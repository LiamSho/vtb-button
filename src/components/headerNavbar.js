import React, { Component, Fragment } from 'react'
import { Navbar, Nav} from "react-bootstrap"
import Option from '../options'

const navbarStyle = {
    backgroundColor: `${Option.NavbarBackgroungColor}`,
}

class HeaderNavbar extends Component {
    render() {
        const linkElements = []
        let keyIndex = 1;
        Option.NavbarElements.forEach(element => {
            linkElements.push(
                <Nav.Link key={keyIndex.toString()} href={element.Link}>{element.Title}</Nav.Link>
            )
            keyIndex ++ ;
        });

        return <Fragment>
            <Navbar style={navbarStyle} expand="lg">
                <Navbar.Brand href="#">{Option.NavbarBrandTitle}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {linkElements}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    }
}

export default HeaderNavbar;