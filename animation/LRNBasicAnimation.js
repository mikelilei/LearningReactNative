import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
  Animated
} from 'react-native';

import React, { Component } from 'react';
import LRNComponent from '../LRNComponent.js'

class LRNBasicAnimation extends LRNComponent
{
  constructor(props){
    super(props);
    this.initializeState({fadeAnim: new Animated.Value(0)});
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 10000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  componentDescription = ()=> '基础动画函数演示\n 1.interpolate演示';
  isShowingConsole = ()=> false;

  lrnRender(){
    return (
      <View style={{flex:1}}>
        <Animated.View style={{
          width:100,
          height:100,
          backgroundColor:'red',
          opacity: this.state.fadeAnim,
          transform: [{ translateY: this.state.fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [150, 0] }), }],
        }}>

        </Animated.View>
      </View>
    );
  }
}

module.exports=LRNBasicAnimation;
