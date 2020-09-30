import React from 'react'
import { View, Text } from "react-native";

class Display extends React.Component {

    render () {
        return (
            <View>
                <Text>{this.props.strike_one}</Text>
                <Text>{this.props.strike_two}</Text>
                <Text>{this.props.strike_three}</Text>
                <Text>{this.props.strike_four}</Text>
                <Text>{this.props.strike_five}</Text>
            </View>
        )
    }

}

export default Display;