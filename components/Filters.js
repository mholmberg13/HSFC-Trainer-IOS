import React from 'react'
import {Button, Text, View} from 'react-native'


class Filters extends React.Component {
    render () {
        return (
            <View>
                <Button
                    title='3 Combo'
                    onPress={this.props.toggleThreeCheck}
                />
                <Button
                    title="4 Combo"
                    onPress={this.props.toggleFourCheck}
                />
                <Button
                    title="5 Combo"
                    onPress={this.props.toggleFiveCheck}
                />
            
            </View>
        )
    }
}

export default Filters;