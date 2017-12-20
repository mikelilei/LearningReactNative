import {
  View,
  Alert,
  Button,
  KeyboardAvoidingView
} from 'react-native';
import React,{Component} from 'react';
import LRNComponent from '../LRNComponent.js'

class LRNKeyboardAvoidingView extends LRNComponent
{
  constructor(props){
    super(props);
  }

  componentDescription = ()=> 'KeyboardAvoidingView控件演示';
  isShowingConsole = ()=> true;

  lrnRender(){
    return (
      <View style={{flex:1}}>
        
      </View>
    );
  }
}
module.exports = LRNAlert;
