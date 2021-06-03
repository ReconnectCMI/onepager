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
                            <img src="https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"/>
                            <div className="caption center-align">
                            <Text tag="h3" textSize="display3">Reconnect</Text>
                            <Text className="light grey-text text-lighten-3" tag="h5" textSize="display1">Hoe kunnen we ervoor zorgen dat digibeten ook gebruik kunnen maken van de digitale balie?</Text>
                            </div>
                        </li>
                        <li>
                            <img src="https://images.unsplash.com/photo-1574887467771-684837ef363a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80"/>
                            <div className="caption left-align">
                            <Text tag="h3" textSize="display3">Reconnect</Text>
                            <Text className="light grey-text text-lighten-3" tag="h5" textSize="display1">Toegankelijkheid voor iedereen</Text>
                            </div>
                        </li>
                        <li>
                            <img src="https://images.unsplash.com/photo-1519558260268-cde7e03a0152?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
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