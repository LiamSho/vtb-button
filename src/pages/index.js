import React, { Component, Fragment } from 'react'
import CardGroup from '../components/cardGroup'
import HeaderNavbar from '../components/headerNavbar'
import IntroBox from '../components/introBox'
import FooterInfo from '../components/footerInfo'

const MainContentStyle = {
    minHeight: `95vh`,
}

class Index extends Component {
    render() {
        return <Fragment>
            <div style={MainContentStyle}>
                <HeaderNavbar />
                <br />
                <IntroBox notNF={true} />
                <br />
                <CardGroup />
            </div>
            <FooterInfo />
        </Fragment>
    }
}

export default Index;