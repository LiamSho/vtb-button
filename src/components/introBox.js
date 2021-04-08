import React, { Component, Fragment } from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import Option from '../options'

const JumbotronStyle = {
    backgroundColor: `${Option.IntroBoxBackgroundColor}`,
    color: `${Option.IntroBoxColor}`,
    paddingTop: `2rem`,
    paddingBottom: `2rem`,
    margin: `0`,
}

class IntroBox extends Component {
    render() {
        let introPara = [];
        let keyIndex = 1;
        Option.IntroBoxContent.Content.forEach(element => {
            introPara.push(
                <p key={keyIndex.toString()}>{element}</p>
            )
            keyIndex ++;
        })

        return <Fragment>
            <Container fluid="xl">
                <Jumbotron style={JumbotronStyle}>
                    <h3>{this.props.notNF ? Option.IntroBoxContent.Title : `404`}</h3>
                    <br />
                    {this.props.notNF ? introPara : `Not Found...`}
                </Jumbotron>
            </Container>
        </Fragment>
    }
}

export default IntroBox;