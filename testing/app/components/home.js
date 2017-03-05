import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import { Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component{

    render(){
        return(
            <View style={{flex: 1, paddingTop: 70}}>
                <Text onPress={() => {
                    Actions.hi2();
                }}>Go to about</Text>

                <Text style={{paddingTop:20}}
                onPress={() => {
                    Actions.hi3();
                }}>Go to settings</Text>
            </View>
        );
    }
}
