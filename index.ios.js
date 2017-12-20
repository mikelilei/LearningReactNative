/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import AppConfiguration from './AppConfiguration.js';
import { StackNavigator } from 'react-navigation';
import AppMenu from './AppMenu.js';
import { createTransition, FlipX } from 'react-native-transition';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Animated
} from 'react-native';

function createStackConfiguration(menus){
    var result = {};
    menus.forEach(
      (ele)=>{
        ele.rightButtonName = 'Code';
        result[ele.menuId]={
          screen:ele.screenClass,
          navigationOptions: ({navigation}) => ({
              title: ele.title,
              headerRight:ele.subMenus!=null?null:(<Button title={ele.rightButtonName} onPress={(eventObj)=>{
                if(ele.toggleView){
                  var processed = ele.toggleView();

                  if(processed){
                    if(ele.rightButtonName == 'Code'){
                      ele.rightButtonName = 'View';
                    }else{
                      ele.rightButtonName = 'Code';
                    }
                    navigation.setParams({})
                  }
                }
              }}
              />)
          })
        }

        if(ele.subMenus!=null && ele.subMenus.length>0){
          var config = createStackConfiguration(ele.subMenus);
          for(key in config){
            result[key] = config[key];
          }
        }
      }
    );
    return result;
}

var routeConfigs = createStackConfiguration(AppConfiguration.menus);
const root_screen_name = 'root_screen_name';
routeConfigs[root_screen_name]={
  screen:AppMenu,
  navigationOptions: ({navigation}) => ({
      title: 'Learning React Native',
  })
}

var entryPoint = StackNavigator(routeConfigs,{
  initialRouteName:root_screen_name,
  initialRouteParams:{menus:AppConfiguration.menus}
});
const Transition = createTransition(FlipX,Animated.spring);

class test extends Component
{
  constructor(props){
    super(props);
    this.state = {
      astring:'astring'
    }
  }

  __astring(){
    console.warn('a string.');
  }
  render(){
    return (
      <View style={{backgroundColor:'gray',flex:1,flexDirection:'column'}}>
      <Button onPress={()=>{
        this.setState({
          astring:'adfaf'
        });
      }} title='button'>
      </Button>
      <View style={{backgroundColor:'yellow',flex:0.5}}>
      <Transition style={{height:100,width:100,backgroundColor:'red'}}>
          <Text>
          {this.__astring()}
          </Text>
      </Transition>
      </View>

      </View>
    )
  }
}
AppRegistry.registerComponent('LearningReactNative', () => entryPoint);
