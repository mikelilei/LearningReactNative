import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';
import LRNComponent from '../LRNComponent.js'

class LRNButton extends LRNComponent
{
  constructor(props){
    super(props);
  }

  componentDescription = ()=> '演示各种样式的按钮';
  isShowingConsole = ()=> true;

  lrnRender(){
    return (
      <View style={{justifyContent:'flex-start',alignItems:'center',flex:1,flexDirection:'column'}}>
        <TouchableOpacity style={{backgroundColor:'#2694F6',width:200,height:50,
        justifyContent:'center',alignItems:'center',
        borderRadius:10,
        marginTop:10}} onPress={()=>{}}>
          <Text style={{color:'white'}}>
            TouchableOpacity Button
          </Text>
        </TouchableOpacity>
        <View style={{width:'100%',height:100,justifyContent:'center',alignItems:'center'}}>
          <Button title='Normal Button'/>
        </View>
      </View>
    );
  }


}

module.exports = LRNButton;
