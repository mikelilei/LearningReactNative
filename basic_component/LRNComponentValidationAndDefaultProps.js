import React, { Component } from 'react';
import {
  View,
  Switch,
  Text,
  StyleSheet
} from 'react-native';

import LRNCustomizedComponent from './LRNCustomizedComponent.js'
import LRNComponent from '../LRNComponent.js'

class LRNComponentValidationAndDefaultProps extends LRNComponent
{
  constructor(props){
    super(props);
    this.initializeState({
      set_required_string:true,
      set_valid_enum:true
    });
  }

  componentDescription = ()=> '基础自定义组件演示：\n\n1.将包装组件的属性传到包装组件中的View中。\n2.属性验证。\n3.默认属性值的设置。\n';
  isShowingConsole = ()=> true;

  _renderCustomizedCompnent(){
    if(this.state.set_required_string){
      return (
        <LRNCustomizedComponent style={{backgroundColor:'blue',flex:1}} required_string='astring' a_enum={this.state.set_valid_enum?'Photos':'Photos1'}>
        </LRNCustomizedComponent>
      );
    }else{
      return (
        <LRNCustomizedComponent style={{backgroundColor:'blue',flex:1}} a_enum={this.state.set_valid_enum?'Photos':'Photos1'}>
        </LRNCustomizedComponent>
      );
    }
  }
  lrnRender(){
    return (
      <View style={{flex:1}}>
        <View style={{flex:0.3}}>
          <View style={styles.control}><Text>set_required_string:</Text><Switch value={this.state.set_required_string} onValueChange={()=>{this.setState({set_required_string:!this.state.set_required_string});}}/></View>
          <View style={styles.control}><Text>set_valid_enum:</Text><Switch value={this.state.set_valid_enum} onValueChange={()=>{this.setState({set_valid_enum:!this.state.set_valid_enum});}}/></View>
        </View>
        <View style={{flex:0.7}}>
          {this._renderCustomizedCompnent()}
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  control:{flexDirection:'row',alignItems:'center',height:40,paddingLeft:10}
});

module.exports = LRNComponentValidationAndDefaultProps;
