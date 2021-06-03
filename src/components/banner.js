import React from 'react';
import 'materialize-css';
import { Div, Text } from "atomize";
import { Slider } from 'react-materialize';

const sliderOptions = {
    indicators: false,
}
class Banner extends React.Component {
    render() {
        return (
            <Div minW="100%" className="Banner">
                <Slider options={sliderOptions}>
                    <ul className="slides">
                        <li>
                            <img src="https://lorempixel.com/580/250/nature/1"/>
                            <div className="caption center-align">
                            <Text tag="h3" textSize="display3">Reconnect</Text>
                            <Text className="light grey-text text-lighten-3" tag="h5" textSize="display1">Hoe kunnen we ervoor zorgen dat digibeten ook gebruik kunnen maken van de digitale balie?</Text>
                            </div>
                        </li>
                        <li>
                            <img src="https://lorempixel.com/580/250/nature/2"/>
                            <div className="caption left-align">
                            <Text tag="h3" textSize="display3">Reconnect</Text>
                            <Text className="light grey-text text-lighten-3" tag="h5" textSize="display1">Toegankelijkheid voor iedereen</Text>
                            </div>
                        </li>
                        <li>
                            <img src="https://lorempixel.com/580/250/nature/3"/>
                            <div className="caption right-align">
                            <Text tag="h3" textSize="display3">Reconnect</Text>
                            <Text className="light grey-text text-lighten-3" tag="h5" textSize="display1">Virtuele assistente</Text>
                            </div>
                        </li>
                    </ul>
                </Slider>
            </Div>
        );
    } 
}

export default Banner;