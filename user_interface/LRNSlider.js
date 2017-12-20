import {
  View,
  Slider,
  Button,
  Text
} from 'react-native';
import React,{Component} from 'react';
import LRNComponent from '../LRNComponent.js'

class LRNSlider extends LRNComponent {
  constructor(props) {
    super(props);
    this.state.sliderValue = 0;
  }

  componentDescription = ()=> 'Slider相关演示！';
  isShowingConsole = ()=> false;

  lrnRender(){
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <Slider minimumValue={1} maximumValue={100} step={0.5} style={{width:200}}
        onValueChange={(value)=>{
          this.setState({
            sliderValue:value
          });
        }}/>
        <Text>{this.state.sliderValue}</Text>
      </View>
    );
  }
}
module.exports = LRNSlider;
