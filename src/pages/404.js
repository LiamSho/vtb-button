import React, { Component, Fragment } from 'react'
import HeaderNavbar from '../components/headerNavbar'
import FooterInfo from '../components/footerInfo'
import Option from '../options'
import IntroBox from '../components/introBox'

const MainContentStyle = {
    minHeight: `95vh`,
}

const TitleStyle = {
    fontSize: `15rem`,
    fontWeight: 1000,
    color: Option.IntroBoxColor,
    textAlign: `center`,
}

const NotFoundStyle = {
    fontSize: `5rem`,
    fontWeight: `700`,
    color: Option.IntroBoxColor,
    textAlign: `center`,
}

class Index extends Component {
    render() {
        return <Fragment>
            <div style={MainContentStyle}>
                <HeaderNavbar />
                <br />
                <IntroBox notNF={false} />
            </div>
            <FooterInfo />
        </Fragment>
    }
}

export default Index;