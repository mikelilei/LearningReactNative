import {
  ScrollView,
  View,
  Dimensions
} from 'react-native';
import React, {Component} from 'react';
import LRNComponent from '../LRNComponent.js'
import LRNAutoSlide from './LRNAutoSlide.js'

class LRNScrollView extends LRNComponent{
  constructor(props){
    super(props);
  }

  componentDescription = ()=> 'ScrollView控件相关演示:\n 实现了一个简单的广告幻灯片效果。';
  isShowingConsole = ()=> true;

  lrnRender(){
    return (
      <LRNAutoSlide imageWidth={Dimensions.get('window').width} imageHeight={300} imageList={[require('../img/image_1.png'),require('../img/image_2.png'),require('../img/image_3.png')]}
      style={{width:'100%',height:300}} />
    );
  }
}
module.exports = LRNScrollView;
