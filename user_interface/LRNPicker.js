import {
  View,
  Picker,
  Animated,
  Button
} from 'react-native';
import React from 'react'
import LRNComponent from '../LRNComponent.js'
import LRNLevelNPicker from '../basic_component/LRNLevelNPicker.js'

var PICKER_VIEW_HEIGHT = 220;
var ANIMATION_VALUE = 200;

class LRNPicker extends LRNComponent
{

  constructor(props){
    super(props);
    this.isAnimatingOverlay = false;

    this.initializeState({
      overlayAnimated:new Animated.Value(0),
      pickerAnimated:new Animated.Value(-(PICKER_VIEW_HEIGHT)),
      showOverlay:false
    });
  }

  isShowingConsole = ()=> true;

  __showOverlay(){
    this.__showOrHideOverlay(true);
  }
  __hideOverlay(){
    this.__showOrHideOverlay(false);
  }

  __showOrHideOverlay(isShowing){

    if(this.isAnimatingOverlay) return ;
    else {
      this.isAnimatingOverlay = true;
    }
    var animation_block = function(completed){
      Animated.parallel([
        Animated.timing(                  // Animate over time
          this.state.overlayAnimated,     // The animated value to drive
          {
            toValue: isShowing?0.5:0,                   // Animate to opacity: 1 (opaque)
            duration: ANIMATION_VALUE,    // Make it take a while
            useNativeDriver:true
          }
        ),
        Animated.timing(                  // Animate over time
          this.state.pickerAnimated,     // The animated value to drive
          {
            toValue: isShowing?0:-(PICKER_VIEW_HEIGHT),                   // Animate to opacity: 1 (opaque)
            duration: ANIMATION_VALUE,    // Make it take a while
          }
        ),
      ]).start(()=>{
        this.isAnimatingOverlay = false;
        if(completed != 'undefined'){
            completed();
        }

      });
    };

    if(isShowing){
      this.setState({
        showOverlay:true
      },()=>{
        animation_block.bind(this)(()=>{});
      });
    }else{
      animation_block.bind(this)(()=>{
        this.setState({
          showOverlay:false
        });
      })
    }

  }


  lrnRender(){
    return (
        <View style={{flex:1}}>
          <Animated.View style={{backgroundColor:'gray',position:'absolute',width:'100%',height:'100%',
          zIndex:this.state.showOverlay?2:-1,
        opacity:this.state.overlayAnimated}}>
          </Animated.View>
          <View style={{width:'100%',height:'100%',position:'absolute',justifyContent:'center',alignItems:'center'}}>
            <Button title='Show Overlay' onPress={this.__showOverlay.bind(this)}/>
          </View>
          <View style={{position:'absolute',width:'100%',height:'100%',zIndex:this.state.showOverlay?3:-1,
            justifyContent:'flex-end'}}
            onStartShouldSetResponder={(event)=>{return true}}
            onResponderRelease={this.__hideOverlay.bind(this)}>
            <Animated.View style={{width:'100%',height:PICKER_VIEW_HEIGHT,bottom:this.state.pickerAnimated}}>
              <LRNLevelNPicker style={{width:'100%',height:PICKER_VIEW_HEIGHT}} data={[['1-1','1-2','1-3'],['2-1','2-2','2-3']]} selectedValue={['1-1','2-1']}/>
            </Animated.View>
          </View>
        </View>
    )
  }
}

module.exports = LRNPicker;
