// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { Actions } from 'react-native-router-flux';
//  export default class HomeScreens extends React.Component{
//      render(){
//          return(
//              <View>
//                  <TouchableOpacity onPress={() => Actions.Login()}>
//                  <Text>Hello World</Text>
//                  </TouchableOpacity>
//              </View>
//          )
//      }
//  }



import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    Linking

} from 'react-native';
import { Button } from 'react-native-material-ui';
import { Actions } from 'react-native-router-flux';

// class Blink extends Component {

//   componentDidMount() {
//     // Toggle the state every second
//     setInterval(() => (
//       this.setState(previousState => (
//         { isShowingText: !previousState.isShowingText }
//       ))
//     ), 500);
//   }

//   //state object
//   state = { isShowingText: true };

//   render() {
//     if (!this.state.isShowingText) {
//       return null;
//     }

//     return (
//       <Text>{this.props.text}</Text>
//     );
//   }
// }
export default class App extends React.Component {
    render() {
        const { height, width } = Dimensions.get('window');

        return (
            <ImageBackground source={require('../images/Tree.jpg')} style={{ height, width }}>
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text
                        style={{ fontSize: 25, textAlign: "center", fontWeight: "bold" }}>ASCENDTIS IT SOLUTION{"\n"}Web & App Developent</Text>

                    <Image style={{
                        height: 280,
                        width: 280,
                        borderRadius: 20
                    }}
                        source={require('../images/Tree.jpg')} />
                    <View style={{ top: 20 }} >

                        {/* <TouchableOpacity onPress={() => { Linking.openURL('https://ascendtis.com/') }}>
              <Text style={{ fontWeight: "bold", fontSize: 30, color: '#ff99cc' }}>

                <Blink text='Visit Website !!' />
              </Text>
            </TouchableOpacity> */}

                        <Button  onPress={() =>Actions.Register()}
                            text='Register'
                            style={{ container: { backgroundColor: 'blue', borderRadius: 20, marginBottom: 10 } }}
                        />
                        <Button onPress={() =>Actions.Register()}
                            text='Login'
                            style={{ container: { backgroundColor: 'blue', borderRadius: 20 } }}
                        />
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

