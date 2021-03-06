import * as React from "react";
import { View, Text } from "react-native";
import Sound from 'react-native-sound'
import Title from './components/Header.js';
import Start from './components/Start.js'
import Display from './components/Display.js'
import Filters from './components/Filters.js'

let strikes = ["JAB", "CROSS", "LEFT HOOK", "RIGHT HOOK", "LEFT UPPERCUT", "RIGHT UPPERCUT", "LEFT OVERHAND", "RIGHT OVERHAND", "LEFT BODY", "RIGHT BODY"]

let jab = new Sound(require('./sounds/jab.mp3'),
  (error, sound) => {
    if (error) {
      alert('error' + error.message);
      return;
    }
})

let cross = new Sound(require('./sounds/cross.mp3'),
  (error, sound) => {
    if (error) {
      alert('error' + error.message);
      return;
    }
})

let leftHook = new Sound(require('./sounds/lefthook.mp3'),
  (error, sound) => {
    if (error) {
      alert('error' + error.message);
      return;
    }
})

let rightHook = new Sound(require('./sounds/righthook.mp3'),
  (error, sound) => {
    if (error) {
      alert('error' + error.message);
      return;
    }
})

let leftUpper = new Sound(require('./sounds/leftupper.mp3'),
  (error, sound) => {
    if (error) {
      alert('error' + error.message);
      return;
    }
})

let rightUpper = new Sound(require('./sounds/rightupper.mp3'),
  (error, sound) => {
    if (error) {
      alert('error' + error.message);
      return;
    }
})

let leftOver = new Sound(require('./sounds/leftover.mp3'),
  (error, sound) => {
    if (error) {
      alert('error' + error.message);
      return;
    }
})

let rightOver = new Sound(require('./sounds/rightover.mp3'),
  (error, sound) => {
    if (error) {
      alert('error' + error.message);
      return;
    }
})

let leftBody = new Sound(require('./sounds/leftbody.mp3'),
  (error, sound) => {
    if (error) {
      alert('error' + error.message);
      return;
    }
})

let rightBody = new Sound(require('./sounds/rightbody.mp3'),
  (error, sound) => {
    if (error) {
      alert('error' + error.message);
      return;
    }
})

class App extends React.Component {

  state = {
    strike_one: "",
    strike_two: "",
    strike_three: "",
    strike_four: "",
    strike_five: "",
    four_checked: false,
    five_checked: false,
    combo_length: 3,
    started: false
  }

  handleSetFirstState = () => {
    this.setState({
      strike_one: strikes[Math.floor(Math.random() * strikes.length)]
    })
  }

  handleSetSecondState = () => {
    this.setState({
      strike_two: strikes[Math.floor(Math.random() * strikes.length)]
    })
  }

  handleSetThirdState = () => {
    this.setState({
      strike_three: strikes[Math.floor(Math.random() * strikes.length)]
    })
  }

  handleNewCombo = () => {

    this.handleSetFirstState()
    this.handleSetSecondState()
    this.handleSetThirdState()

    if (this.state.four_checked === true) {
      this.handleFourCombo()
      console.log(this.state.combo_length)
    }

    if (this.state.five_checked === true) {
      this.handleFiveCombo()
      console.log(this.state.combo_length)
    }

    if (this.state.combo_length === 4) {
      this.setState({
        strike_four: strikes[Math.floor(Math.random() * strikes.length)]
      })
    } else {
      this.setState({
        strike_four: ""
      })
    } 
    
    if (this.state.combo_length === 5) {
      this.setState({
        strike_four: strikes[Math.floor(Math.random() * strikes.length)],
        strike_five: strikes[Math.floor(Math.random() * strikes.length)]
      })
    } else {
      this.setState({
        strike_five: ""
      })
    }
    
  }

  handleStartSwitch = () => {

    this.state.started ? this.setState({started: false}) : this.setState({started: true})

    console.log(this.state.started)

    this.handleStartCheck()

  }

  handleCheckFirstState = () => {

    if (this.state.strike_one === "JAB") {
      jab.play((success) => {
        if (success) {
          this.handleCheckSecondState()
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_one === "CROSS") {
      cross.play((success) => {
        if (success) {
          this.handleCheckSecondState()
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_one === "LEFT HOOK") {
      leftHook.play((success) => {
        if (success) {
          this.handleCheckSecondState()
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_one === "RIGHT HOOK") {
      rightHook.play((success) => {
        if (success) {
          this.handleCheckSecondState()
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_one === "LEFT UPPERCUT") {
      leftUpper.play((success) => {
        if (success) {
          this.handleCheckSecondState()
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_one === "RIGHT UPPERCUT") {
      rightUpper.play((success) => {
        if (success) {
          this.handleCheckSecondState()
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_one === "LEFT OVERHAND") {
      leftOver.play((success) => {
        if (success) {
          this.handleCheckSecondState()
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_one === "RIGHT OVERHAND") {
      rightOver.play((success) => {
        if (success) {
          this.handleCheckSecondState()
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_one === "LEFT BODY") {
      leftBody.play((success) => {
        if (success) {
          this.handleCheckSecondState()
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_one === "RIGHT BODY") {
      rightBody.play((success) => {
        if (success) {
          this.handleCheckSecondState()
        } else {
          console.log("error")
        }
      })
    }
  }
    
  handleCheckSecondState = async () => {
    
    if (this.state.strike_two === "JAB") {
      jab.play((success) => {
        if (success) {
          this.handleCheckThirdState()
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_two === "CROSS") {
      cross.play((success) => {
        if (success) {
          this.handleCheckThirdState()
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_two === "LEFT HOOK") {
      leftHook.play((success) => {
        if (success) {
          this.handleCheckThirdState()
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_two === "RIGHT HOOK") {
      rightHook.play((success) => {
        if (success) {
          this.handleCheckThirdState()
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_two === "LEFT UPPERCUT") {
      leftUpper.play((success) => {
        if (success) {
          this.handleCheckThirdState()
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_two === "RIGHT UPPERCUT") {
      rightUpper.play((success) => {
        if (success) {
          this.handleCheckThirdState()
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_two === "LEFT OVERHAND") {
      leftOver.play((success) => {
        if (success) {
          this.handleCheckThirdState()
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_two === "RIGHT OVERHAND") {
      rightOver.play((success) => {
        if (success) {
          this.handleCheckThirdState()
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_two === "LEFT BODY") {
      leftBody.play((success) => {
        if (success) {
          this.handleCheckThirdState()
        } else {
          console.log("error")
        } 
      })
    }

    if (this.state.strike_two === "RIGHT BODY") {
      rightBody.play((success) => {
        if (success) {
          this.handleCheckThirdState()
        } else {
          console.log("error")
        }
      })
    }
     
  }

  handleCheckThirdState = async () => {

    if (this.state.strike_three === "JAB") {
      jab.play((success) => {
        if (success) {
          this.handleCheckFourthState()
          if (this.state.combo_length === 3) {
           if (this.state.strike_one === "") {
            return("")
          } else {
          setTimeout(this.handleNewCombo, 1000)
          }
          }
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_three === "CROSS") {
      cross.play((success) => {
        if (success) {
          this.handleCheckFourthState()
          if (this.state.combo_length === 3) {
            if (this.state.strike_one === "") {
            return("")
          } else {
          setTimeout(this.handleNewCombo, 1000)
          }
          }
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_three === "LEFT HOOK") {
      leftHook.play((success) => {
        if (success) {
          this.handleCheckFourthState()
          if (this.state.combo_length === 3) {
            if (this.state.strike_one === "") {
            return("")
          } else {
          setTimeout(this.handleNewCombo, 1000)
          }
          }
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_three === "RIGHT HOOK") {
      rightHook.play((success) => {
        if (success) {
          this.handleCheckFourthState()
          if (this.state.combo_length === 3) {
            if (this.state.strike_one === "") {
            return("")
          } else {
          setTimeout(this.handleNewCombo, 1000)
          }
          }
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_three === "LEFT UPPERCUT") {
      leftUpper.play((success) => {
        if (success) {
          this.handleCheckFourthState()
          if (this.state.combo_length === 3) {
            if (this.state.strike_one === "") {
            return("")
          } else {
          setTimeout(this.handleNewCombo, 1000)
          }
          }
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_three === "RIGHT UPPERCUT") {
      rightUpper.play((success) => {
        if (success) {
          this.handleCheckFourthState()
          if (this.state.combo_length === 3) {
            if (this.state.strike_one === "") {
            return("")
          } else {
          setTimeout(this.handleNewCombo, 1000)
          }
          }
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_three === "LEFT OVERHAND") {
      leftOver.play((success) => {
        if (success) {
          this.handleCheckFourthState()
          if (this.state.combo_length === 3) {
            if (this.state.strike_one === "") {
            return("")
          } else {
          setTimeout(this.handleNewCombo, 1000)
          }
          }
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_three === "RIGHT OVERHAND") {
      rightOver.play((success) => {
        if (success) {
          this.handleCheckFourthState()
          if (this.state.combo_length === 3) {
            if (this.state.strike_one === "") {
            return("")
          } else {
          setTimeout(this.handleNewCombo, 1000)
          }
          }
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_three === "LEFT BODY") {
      leftBody.play((success) => {
        if (success) {
          this.handleCheckFourthState()
          if (this.state.combo_length === 3) {
            if (this.state.strike_one === "") {
            return("")
          } else {
          setTimeout(this.handleNewCombo, 1000)
          }
          }
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_three === "RIGHT BODY") {
      rightBody.play((success) => {
        if (success) {
          this.handleCheckFourthState()
          if (this.state.combo_length === 3) {
            if (this.state.strike_one === "") {
            return("")
          } else {
          setTimeout(this.handleNewCombo, 1000)
          }
          }
        } else {
          console.log("error")
        }
      })
    }
    
  }

  handleCheckFourthState = async () => {

    if (this.state.strike_four === "JAB") {
      jab.play((success) => {
        if (success) {
          this.handleCheckFifthState()
          if (this.state.combo_length === 4) {
            if (this.state.strike_one === "") {
            return("")
          } else {
          setTimeout(this.handleNewCombo, 1000)
          }
          }
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_four === "CROSS") {
      cross.play((success) => {
        if (success) {
          this.handleCheckFifthState()
          if (this.state.combo_length === 4) {
            if (this.state.strike_one === "") {
            return("")
          } else {
          setTimeout(this.handleNewCombo, 1000)
          }
          }
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_four === "LEFT HOOK") {
      leftHook.play((success) => {
        if (success) {
          this.handleCheckFifthState()
          if (this.state.combo_length === 4) {
            if (this.state.strike_one === "") {
            return("")
          } else {
          setTimeout(this.handleNewCombo, 1000)
          }
          }
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_four === "RIGHT HOOK") {
      rightHook.play((success) => {
        if (success) {
          this.handleCheckFifthState()
          if (this.state.combo_length === 4) {
            if (this.state.strike_one === "") {
            return("")
          } else {
          setTimeout(this.handleNewCombo, 1000)
          }
          }
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_four === "LEFT UPPERCUT") {
      leftUpper.play((success) => {
        if (success) {
          this.handleCheckFifthState()
          if (this.state.combo_length === 4) {
            if (this.state.strike_one === "") {
            return("")
          } else {
          setTimeout(this.handleNewCombo, 1000)
          }
          }
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_four === "RIGHT UPPERCUT") {
      rightUpper.play((success) => {
        if (success) {
          this.handleCheckFifthState()
          if (this.state.combo_length === 4) {
            if (this.state.strike_one === "") {
            return("")
          } else {
          setTimeout(this.handleNewCombo, 1000)
          }
          }
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_four === "LEFT OVERHAND") {
      leftOver.play((success) => {
        if (success) {
          this.handleCheckFifthState()
          if (this.state.combo_length === 4) {
            if (this.state.strike_one === "") {
            return("")
          } else {
          setTimeout(this.handleNewCombo, 1000)
          }
          }
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_four === "RIGHT OVERHAND") {
      rightOver.play((success) => {
        if (success) {
          this.handleCheckFifthState()
          if (this.state.combo_length === 4) {
            if (this.state.strike_one === "") {
            return("")
          } else {
          setTimeout(this.handleNewCombo, 1000)
          }
          }
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_four === "LEFT BODY") {
      leftBody.play((success) => {
        if (success) {
          this.handleCheckFifthState()
          if (this.state.combo_length === 4) {
            if (this.state.strike_one === "") {
            return("")
          } else {
          setTimeout(this.handleNewCombo, 1000)
          }
          }
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_four === "RIGHT BODY") {
      rightBody.play((success) => {
        if (success) {
          this.handleCheckFifthState()
          if (this.state.combo_length === 4) {
            if (this.state.strike_one === "") {
            return("")
          } else {
          setTimeout(this.handleNewCombo, 1000)
          }
          }
        } else {
          console.log("error")
        }
      })
    }
    
  }

  handleCheckFifthState = async () => {

    if (this.state.strike_five === "JAB") {
      jab.play((success) => {
        if (success) {
          if (this.state.strike_one === "") {
            return("")
          } else {
          setTimeout(this.handleNewCombo, 1000)
          }
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_five === "CROSS") {
      cross.play((success) => {
        if (success) {
          if (this.state.strike_one === "") {
            return("")
          } else {
          setTimeout(this.handleNewCombo, 1000)
          }
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_five === "LEFT HOOK") {
      leftHook.play((success) => {
        if (success) {
          if (this.state.strike_one === "") {
            return("")
          } else {
          setTimeout(this.handleNewCombo, 1000)
          }
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_five === "RIGHT HOOK") {
      rightHook.play((success) => {
        if (success) {
          if (this.state.strike_one === "") {
            return("")
          } else {
          setTimeout(this.handleNewCombo, 1000)
          }
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_five === "LEFT UPPERCUT") {
      leftUpper.play((success) => {
        if (success) {
          if (this.state.strike_one === "") {
            return("")
          } else {
          setTimeout(this.handleNewCombo, 1000)
          }
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_five === "RIGHT UPPERCUT") {
      rightUpper.play((success) => {
        if (success) {
          if (this.state.strike_one === "") {
            return("")
          } else {
          setTimeout(this.handleNewCombo, 1000)
          }
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_five === "LEFT OVERHAND") {
      leftOver.play((success) => {
        if (success) {
          if (this.state.strike_one === "") {
            return("")
          } else {
          setTimeout(this.handleNewCombo, 1000)
          }
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_five === "RIGHT OVERHAND") {
      rightOver.play((success) => {
        if (success) {
          if (this.state.strike_one === "") {
            return("")
          } else {
          setTimeout(this.handleNewCombo, 1000)
          }
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_five === "LEFT BODY") {
      leftBody.play((success) => {
        if (success) {
          if (this.state.strike_one === "") {
            return("")
          } else {
          setTimeout(this.handleNewCombo, 1000)
          }
        } else {
          console.log("error")
        }
      })
    }

    if (this.state.strike_five === "RIGHT BODY") {
      rightBody.play((success) => {
        if (success) {
          if (this.state.strike_one === "") {
            return("")
          } else {
          setTimeout(this.handleNewCombo, 1000)
          }
        } else {
          console.log("error")
        }
      })
    }
    
  }

  handleStartCheck = () => {
    this.state.started ? this.handleNewCombo() : console.log("not started")
  }


  handleStart = () => {
    // this.setState({
    //   started: true
    // })
    this.handleStartSwitch()
    // this.handleNewCombo()

  }

  handleStop = () => {
    this.handleStartSwitch()
    this.setState({
      strike_one: "",
      strike_two: "",
      strike_three: "",
      strike_four: "",
      strike_five: ""
    })
  }

  toggleFourCheck = () => {
    if (this.state.four_checked === false) {
      this.setState({
        four_checked: true
      })
    }
    if (this.state.four_checked === true) {
      this.setState({
        four_checked: false
      })
    }
    console.log(this.state.four_checked)
  }

  toggleFiveCheck = () => {
    if (this.state.five_checked === false) {
      this.setState({
        five_checked: true
      })
    }
    if (this.state.five_checked === true) {
      this.setState({
        five_checked: false
      })
    }
    console.log(this.state.five_checked)
  }

  handleThreeCombo = () => {
    this.setState({
      combo_length: 3,
      four_checked: false,
      five_checked: false
    })
  }

  handleFourCombo = () => {
    this.setState({
      combo_length: Math.floor(Math.random() * 2) + 3
    })
  }

  handleFiveCombo = () => {
    this.setState({
      combo_length: Math.floor(Math.random() * 3) + 3
    })
  }

  componentDidUpdate() {
    this.handleCheckFirstState()
    // setTimeout(this.handleCheckSecondState, 1200) 
    // setTimeout(this.handleCheckThirdState, 2200)
  }

  render () {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >

        <Title/>
        <Filters
          toggleThreeCheck={this.handleThreeCombo}
          toggleFourCheck={this.toggleFourCheck}
          toggleFiveCheck={this.toggleFiveCheck}
        />
        <Display 
          strike_one={this.state.strike_one}
          strike_two={this.state.strike_two}
          strike_three={this.state.strike_three}
          strike_four={this.state.strike_four}
          strike_five={this.state.strike_five}
        />
        <Start
          handleStart={this.handleStart}
          handleStop={this.handleStop}
          handleNewCombo={this.handleNewCombo}
          handleReset={this.handleReset}
        />

      </View>
    );
  }
}

export default App;