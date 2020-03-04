
import React from 'react';
import { View, TextInput, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Button, Icon, Divider } from 'react-native-material-ui';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    const { height, width } = Dimensions.get('window');

    return (

      <View style={{ flex: 1, backgroundColor: '#696969' }}>
        <View style={{ marginTop: 60, marginLeft: 30 }}>
          <Text style={{ fontSize: 38, fontFamily: 'Poppins-Bold', color: '#5D92B1' }}>Log in</Text>
        </View>

        <View
          style={{ borderBottomColor: '#5D92B1', borderBottomWidth: 5, marginLeft: 30, marginTop: 3, marginRight: 300 }} >
        </View>

        <Text style={{ fontSize: 13, marginLeft: 30, marginTop: 40, color: '#f5f5f5', fontFamily: 'Poppins-Regular' }}>Please Log in to your Account to Continue {"\n"}with SoundMaja.</Text>

        <View style={{ marginLeft: 30, marginRight: 30 }}>
          <View style={{ borderWidth: 1, width: width - 60, flexDirection: 'row', alignItems: 'center', marginTop: 45, borderColor: '#e5e5e5', borderRadius: 5, height: 45, paddingLeft: 15 }}>
            <FontAwesomeIcon name={'envelope-o'} size={17} color="#5D92B1" />
            <TextInput
              style={{ paddingLeft: 20, fontFamily: 'Poppins-Regular', flex: 1 }}
              placeholder='Email Address'
              placeholderTextColor='#f5f5f5'
            />
          </View>
        </View>

        <View style={{ marginLeft: 30, marginRight: 30 }}>
          <View style={{ borderWidth: 1, width: width - 58, flexDirection: 'row', alignItems: 'center', marginTop: 15, borderColor: '#e5e5e5', borderRadius: 5, height: 45, paddingLeft: 15 }}>
            <FontAwesomeIcon name={'lock'} size={20} color="#5D92B1" />
            <TextInput
              style={{ paddingLeft: 25, fontFamily: 'Poppins-Regular', flex: 1 }}
              placeholder='Password' secureTextEntry={true}
              placeholderTextColor='#f5f5f5'
            />
          </View>
        </View>

        <View style={{ alignItems: 'center', marginTop: 15, marginLeft: 30, marginRight: 30 }}>
          <Button upperCase={false}
            style={{
              container: { backgroundColor: '#5D92B1', borderRadius: 5, height: 45, width: width - 60 },
              text: { color: '#fff', fontSize: 18, fontWeight: "bold", fontFamily: 'Poppins-Regular' }
            }} text="Log in" />
        </View>

        <View style={{ marginTop: 5, alignItems: 'center', paddingRight: 30, flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={{ fontSize: 10, color: '#f5f5f5', fontFamily: 'Poppins-Regular' }}>Forgotten your login details? </Text>
          <Text style={{ fontSize: 10, color: '#f5f5f5', fontFamily: 'Poppins-Bold' }}>Get help with signing in.</Text>
        </View>


        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
          <View style={{ flex: 1, marginLeft: 33 }} >
            <Divider style={{ container: { borderWidth: 0.5, borderColor: '#f5f5f5', } }} />
          </View>
          <View >
            <Text style={{ fontSize: 14, paddingLeft: 7, paddingRight: 7, color: '#f5f5f5', fontFamily: 'Poppins-Regular' }}>OR</Text>
          </View>
          <View style={{ flex: 1, marginRight: 33 }} >
            <Divider style={{ container: { borderWidth: 0.5, borderColor: '#f5f5f5' } }} />
          </View>
        </View>

        <TouchableOpacity>
          <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
            <FontAwesomeIcon name={'facebook-square'} size={17} color={'#0BB5FF'} />
            <Text style={{ fontSize: 14, paddingLeft: 7, paddingRight: 7, color: '#0BB5FF', fontFamily: 'Poppins-Regular' }}>Continue with Facebook</Text>
          </View>
        </TouchableOpacity>


        <View style={{ justifyContent: 'center', alignItems: 'center' }}>

        </View>
        <View>
          <Text style={{ textAlign: 'center', marginTop: 80, fontSize: 17, color: '#f5f5f5', fontFamily: 'Poppins-Regular' }}>Dont't have an account?</Text>
          <TouchableOpacity onPress={() => Actions.Register()}>
            <Text style={{ textAlign: 'center', color: '#0BB5FF', fontSize: 17, marginTop: 4, fontFamily: 'Poppins-Regular' }}>REGISTER</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ textAlign: 'center', marginTop: 80, fontSize: 17, color: '#f5f5f5', fontFamily: 'Poppins-Regular' }}>Dont't have an account?</Text>
          <TouchableOpacity onPress={() => Actions.Register()}>
            <Text style={{ textAlign: 'center', color: '#0BB5FF', fontSize: 17, marginTop: 4, fontFamily: 'Poppins-Regular' }}>REGISTER</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ textAlign: 'center', marginTop: 80, fontSize: 17, color: '#f5f5f5', fontFamily: 'Poppins-Regular' }}>Dont't have an account?</Text>
          <TouchableOpacity onPress={() => Actions.Register()}>
            <Text style={{ textAlign: 'center', color: '#0BB5FF', fontSize: 17, marginTop: 4, fontFamily: 'Poppins-Regular' }}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}