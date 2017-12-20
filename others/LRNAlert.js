import {
  View,
  Alert,
  Button
} from 'react-native';
import React,{Component} from 'react';
import LRNComponent from '../LRNComponent.js'

class LRNAlert extends LRNComponent
{
  constructor(props){
    super(props);
  }

  componentDescription = ()=> 'Alert控件演示';
  isShowingConsole = ()=> true;

  lrnRender(){
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Button title='Show Alert' onPress={()=>{
          Alert.alert(
            'This is the Title',
            'Message for Alert',
            [ {text: 'Ask me later', onPress: () => this.lrnLog('Ask me later pressed')},
            {text: 'Cancel', onPress: () => this.lrnLog('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => this.lrnLog('OK Pressed')}, ], { cancelable: false } );
        }}/>
      </View>
    );
  }
}
module.exports = LRNAlert;
