import {
  View,
  TextInput,
  ScrollView,
  Image,
  StyleSheet,
  Button,
  ActivityIndicator,
  KeyboardAvoidingView
} from 'react-native';

import React, {Component} from 'react';
import LRNComponent from '../LRNComponent.js'

class LRNTextInput extends LRNComponent{

  constructor(props){
    super(props);
    this.initializeState({
      isLoading:false
    });
  }

  componentDescription = ()=> 'TextInput控件相关演示:\n 1.实现了一个简单的用户注册页面。';
  isShowingConsole = ()=> true;

  clickOnSumit(){
    this.setState({isLoading:true});
    setTimeout(()=>{
      this.setState({isLoading:false});
    },1000*2);
  }

  lrnRender(){
    return (
      <View style={{flex:1}} behavior='height'>
          <ScrollView style={{position:'absolute',width:'100%',height:'100%',zIndex:this.state.isLoading?0:1}} keyboardDismissMode='on-drag'>
            <View style={styles.line_container}>
                <Image style={styles.left_icon} source={require('../img/username.png')}/>
                <TextInput style={styles.right_input} placeholder='Username' ref={(obj)=>{this._username=obj}}
                onSubmitEditing={(event)=>{this._password.focus();}} returnKeyType='next'
                clearButtonMode='while-editing'
                onChangeText={(event)=>{this.lrnLog('Text changed:'+event)}}
                onEndEditing={(event)=>{this.lrnLog('On end editing')}}/>
            </View>
            <View style={styles.separator_line} />
            <View style={styles.line_container}>
                <Image style={styles.left_icon} source={require('../img/username.png')}/>
                <TextInput style={styles.right_input} placeholder='Password' ref={(obj)=>{this._password=obj}}
                clearButtonMode='while-editing' returnKeyType='next'/>
            </View>
            <View style={styles.separator_line} />
            <View style={styles.line_container}>
                <Image style={styles.left_icon} source={require('../img/username.png')}/>
                <TextInput style={styles.right_input} placeholder='Other Field 1'
                clearButtonMode='while-editing' returnKeyType='next'/>
            </View>
            <View style={styles.separator_line} />
            <View style={styles.line_container}>
                <Image style={styles.left_icon} source={require('../img/username.png')}/>
                <TextInput style={styles.right_input} placeholder='Other Field 2'
                clearButtonMode='while-editing'
                returnKeyType='next'/>
            </View>
            <View style={styles.separator_line} />
            <View style={styles.line_container}>
                <Image style={styles.left_icon} source={require('../img/username.png')}/>
                <TextInput style={styles.right_input} placeholder='Other Field 3'
                clearButtonMode='while-editing'
                returnKeyType='next'/>
            </View>
            <View style={styles.separator_line} />
            <View style={styles.line_container}>
                <Image style={styles.left_icon} source={require('../img/username.png')}/>
                <TextInput style={styles.right_input} placeholder='Other Field 4'
                clearButtonMode='while-editing'
                returnKeyType='done'/>
            </View>
            <View style={styles.separator_line} />
            <View style={styles.submit_container}>
              <Button style={{backgroundColor:'gray'}} title='SUBMIT' onPress={this.clickOnSumit.bind(this)}/>
            </View>
          </ScrollView>
          <View style={{position:'absolute',width:'100%',height:'100%',zIndex:this.state.isLoading?1:0
          ,justifyContent:'center',
          alignItems:'center'}}>
              <ActivityIndicator animating={this.state.isLoading} size='large' style={{opacity:this.state.isLoading?1:0}}/>
          </View>
      </View>
    )
  }

}

var styles = StyleSheet.create({
  line_container:{
    height:50,
    width:50,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
  },
  left_icon:{
    width:30,
    height:30,
    left:10,
    right:5
  },
  right_input:{
    height:30,
    width:300,
    left:15,
    fontSize:15
  },
  separator_line:{
    height:0.5,
    width:'100%',
    left:8,
    backgroundColor:'gray'
  },
  submit_container:{
    width:'100%',
    height:80,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
});

module.exports = LRNTextInput;
