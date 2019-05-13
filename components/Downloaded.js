import React, { Component } from 'react';
import { View } from 'react-native';

export class Downloaded extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    render() {
        return (
            <View>Wow you are in the downloed</View>
        );
    }
}