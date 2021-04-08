import React, { Component, Fragment } from 'react'
import Option from '../options'

const FooterInfoStyle = {
    backgroundColor: `${Option.FooterBackgroundColor}`,
    height: `5vh`,
}

const LeftPara = {
    color: `${Option.FooterColor}`,
    float: `left`,
    margin: `0`,
    padding: `0.75vh`
}

class FooterInfo extends Component {
    render() {
        return <Fragment>
            <footer fixed="bottom" style={FooterInfoStyle}>
                <p style={LeftPara}>Vtb-Button &copy; Liam Sho 2021</p>
            </footer>
        </Fragment>
    }
}

export default FooterInfo;