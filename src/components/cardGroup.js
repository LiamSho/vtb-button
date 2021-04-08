import React, { Component, Fragment } from 'react'
import ClassCard from './classCard'
import AudioButton from './audioButton'
import AudioInfo from '../audioInfo'

class CardGroup extends Component {
    render() {
        let Cards = [];
        let buttonKeyIndex = 1;
        let cardKeyIndex = 1;
        AudioInfo.forEach(CardMeta => {
            let Buttons = [];
            CardMeta.Content.forEach(ButtonMeta => {
                Buttons.push(
                    <AudioButton key={buttonKeyIndex.toString()} url={`./audios/${ButtonMeta.Path}`} content={ButtonMeta.Description} />
                )
                buttonKeyIndex ++;
            })
            Cards.push(
                <ClassCard key={cardKeyIndex.toString()} classTitle={CardMeta.ClassName}>
                    {Buttons}
                </ClassCard>
            )
            cardKeyIndex++;
        });

        return <Fragment>
            {Cards}
        </Fragment>
    }
}

export default CardGroup;
