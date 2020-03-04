import React from 'react';
import { View, TextInput, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Button, Icon } from 'react-native-material-ui';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
export default class App extends React.Component {
  render() {
    const { height, width } = Dimensions.get('window');
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>

        <View style={{ marginTop: 60, marginLeft: 30 }}>
          <Text style={{ fontSize: 38,fontFamily: 'Poppins-Bold' }}>Register</Text>
        </View>
        <View
          style={{ borderBottomColor: 'red', borderBottomWidth: 5, marginLeft: 30, marginTop: 3, marginRight: 300 }} >
        </View>

        <Text style={{fontSize:13, marginLeft: 30, marginTop: 40, color: '#808080', fontFamily: 'Poppins-Regular' }}>Please Register in to your Account to Continue {"\n"}with SoundMaja.</Text>

        <View style={{ alignItems: 'center', }}>
        <View style={{ borderWidth: 1, width: width - 58, flexDirection: 'row', alignItems: 'center', marginTop: 45, borderColor: '#e5e5e5', borderRadius: 5, height: 70, paddingLeft: 15 }}>

            <FontAwesomeIcon name={"user-o"} size={17} color="#FF0000" />
            <TextInput
              style={{ paddingLeft: 25,fontFamily: 'Poppins-Regular' , flex:1 }}
              placeholder='User Name' secureTextEntry={true}
            />
          </View>
        </View>

        <View style={{ alignItems: 'center', }}>
        <View style={{ borderWidth: 1, width: width - 58, flexDirection: 'row', alignItems: 'center', marginTop: 15, borderColor: '#e5e5e5', borderRadius: 5, height: 70, paddingLeft: 15 }}>
            <FontAwesomeIcon name={'envelope-o'} size={17} color="#FF0000" />
            <TextInput
              style={{ paddingLeft: 20,fontFamily: 'Poppins-Regular' , flex:1}}
              placeholder='Email Address'
            />
          </View>
        </View>




        <View style={{ alignItems: 'center', }}>
          <View style={{ borderWidth: 1, width: width - 58, flexDirection: 'row', alignItems: 'center', marginTop: 15, borderColor: '#e5e5e5', borderRadius: 5, height: 70, paddingLeft: 15 }}>

            <FontAwesomeIcon name={'lock'} size={20} color="#ff4c4c" />
            <TextInput
              style={{ paddingLeft: 25,fontFamily: 'Poppins-Regular' , flex:1 }}
              placeholder='Password' secureTextEntry={true}
            />
          </View>
        </View>


        <View style={{ alignItems: 'center', marginTop: 50,  marginLeft: 120, marginRight: 120 }}>
          <Button upperCase={false}
            style={{
              container: { backgroundColor: '#ff4c4c', borderRadius: 30, height: 45, width: width - 240 },
              text: { color: '#fff', fontSize: 18, fontWeight: "bold", fontFamily: 'Poppins-Regular' }
            }} text="Sign Up" />
        </View>

        <View style={{ marginTop: 50}}>
          <Text style={{ textAlign: 'center', fontSize: 15, color: '#202020', fontFamily: 'Poppins-Regular' }}>Already have an account.</Text>
          <TouchableOpacity onPress={() =>Actions.Login()}>
            <Text style={{ textAlign: 'center', color: '#ff1919', fontSize: 17, fontFamily: 'Poppins-Regular' }}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

