
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Animated,
  ScrollView
} from 'react-native';
import React, { Component } from 'react';

class LRNComponent extends Component
{
  constructor(props){
    super(props);
    console.log(this.props.navigation);
    const menu_item = this.props.navigation.state.params.currentMenu;

    this.state = {
      logMessage:'',
      isAnimating:false,
      isCodeView:false,
      codeAnimated: new Animated.Value(0),
      componentAnimated: new Animated.Value(1)
    };

    menu_item.toggleView = ()=>{

      if(this.state.isAnimating){
        return false;
      }

      this.setState({
        isAnimating:true,
        isCodeView:!this.state.isCodeView
      },()=>{
        Animated.parallel(
          [
            Animated.timing(                  // Animate over time
              this.state.codeAnimated,            // The animated value to drive
              {
                toValue: this.state.isCodeView?1:0,                   // Animate to opacity: 1 (opaque)
                duration: 500,              // Make it take a while
                useNativeDriver: true
              }
            ),
            Animated.timing(                  // Animate over time
              this.state.componentAnimated,            // The animated value to drive
              {
                toValue: !this.state.isCodeView?1:0,                   // Animate to opacity: 1 (opaque)
                duration: 500,              // Make it take a while
                useNativeDriver: true
              }
            )
          ]
        ).start(()=>{
          this.setState({
            isAnimating:false
          });
        });

      });
      return true;
    }
  }

  initializeState(newState){
    for(key in newState){
      this.state[key] = newState[key];
    }
  }

  componentDescription = ()=> 'say nothing'

  isShowingConsole = ()=> false;

  lrnLog = (message)=>{
    var allMessage = this.state.logMessage || '';
    allMessage = allMessage + message + '\n';
    console.log(message+this.lrnConsole);
    this.setState({logMessage:allMessage});
    this.lrnScorllView.scrollToEnd({animated:true});
  }

  lrnRender(){

  }

  _renderCodeView(){
    var view = this.codeView;
    if(view == null){
      view = (
        <View style={{flex:1,backgroundColor:'white'}}>
          <Text>this is the code view.</Text>
        </View>
      );
      this.codeView = view;
    }
    return view;
  }

  _renderComponentView(){
      return (
        <View style={{backgroundColor:'#fff',flex:1}}>
            {this.lrnRender()}
        </View>
      );
  }

  _renderCoreView(){

    return (
      <View style={{flex:1}}>
        <Animated.View style={{position:'absolute',width:'100%',height:'100%',opacity: this.state.codeAnimated}}>
          {this._renderCodeView()}
        </Animated.View>
        <Animated.View style={{position:'absolute',width:'100%',height:'100%',opacity: this.state.componentAnimated}}>
          {this._renderComponentView()}
        </Animated.View>
      </View>
    );
  }

  _renderConsole(){
    if(this.isShowingConsole()){
      return (
        <View style={{width:'100%',height:100,backgroundColor:'#282C34'}}>
          <ScrollView ref={(val)=>{this.lrnScorllView = val;}}>
          <Text ref={(val)=>{this.lrnConsole = val;}} style={{paddingLeft:10,paddingTop:10,paddingRight:10,color:'#fff'}}>
              {this.state.logMessage}
          </Text>
          </ScrollView>
        </View>
      );
    }else{
      return (
        <View>
        </View>
      );
    }
  }

  render(){
    return (
      <View style={{flexDirection:'column',flex:1}}>
        <Text style={{flex:0.2,backgroundColor:'#555',paddingLeft:10,paddingRight:10,paddingTop:10}}>
          {this.componentDescription()}
        </Text>
        <View style={{flex:0.8}}>
          {this._renderCoreView()}
        </View>
        {this._renderConsole()}
      </View>

    );
  }
}

module.exports = LRNComponent;
