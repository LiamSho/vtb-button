import React, { Component, Fragment } from 'react'
import { Card, Container } from 'react-bootstrap'
import Option from '../options'

const CardStyle = {
    backgroundColor: `${Option.CardBackgroundColor}`,
}

const CardTitleStyle = {
    backgroundColor: `${Option.CardTitleBackgroundColor}`,
    fontWeight: `bold`,
    textAlign: `center`,
}

const CardBodyStyle = {
    backgroundColor: `${Option.CardBodyBackgroundColor}`,
}

const ContainerSyle = {
    paddingTop: `0`,
    paddingBottom: `1.5rem`,
}

class ClassCard extends Component {
    render() {
        return <Fragment>

        <Container fluid="xl" style={ContainerSyle}>
            <Card style={CardStyle}>
                <Card.Header style={CardTitleStyle}>{this.props.classTitle}</Card.Header>
                <Card.Body style={CardBodyStyle}>
                    {this.props.children}
                </Card.Body>
            </Card>
        </Container>

        </Fragment>
    }
}

export default ClassCard;