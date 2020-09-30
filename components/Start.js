import React from 'react'
import {Button, View} from 'react-native'

class Start extends React.Component {
    state = {
        label: "START",
        onpress: this.props.handleStart

    }

    handlePress = () => {
        this.state.onpress()
        this.handleSwitch()
    }

    handleStopCombined = () => {
        this.props.handleStop()
        this.props.handleReset()
        this.handleSwitch()
    }

    handleSwitch = () => {
        if (this.state.label === "START") {
            this.setState({
                label: "STOP",
                onpress: this.handleStopCombined
            })
        }

        if (this.state.label === "STOP") {
            this.setState({
                label: "START",
                onpress:this.props.handleStart
            })
        }
    }


    render () {
        return (
            <View>
                <Button
                    title={this.state.label}
                    onPress={this.handlePress}
                />
        </View>
        )
    }
}

export default Start;