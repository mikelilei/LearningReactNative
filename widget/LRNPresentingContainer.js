import {
  View,
  Button,
  StyleSheet,
  Animated,
  Text,
  Easing
} from 'react-native';
import React from 'react';

var ZINDEX_TOP = 2;
var ANIMATION_VALUE = 200;

class LRNPresentingContainer extends React.Component
{
  constructor(props){
    super(props);
    this.state = {presented:false};
  }

  __onLayout(event){
    var height = event.nativeEvent.layout.height;
    this.heightOfContainer = height;

    if(!this.state.presentingLayerAnimated){
        this.setState({
          presentingLayerAnimated:new Animated.Value(-height)
        });
    }
  }

  presentComponent(component){

    if(this.state.presented){
      console.warn('There is already a compnent that had been presented.');
      return ;
    }
    this.setState({
      presented:true,
      presentingComponent:component
    },()=>{
      Animated.timing(                  // Animate over time
        this.state.presentingLayerAnimated,     // The animated value to drive
        {
          toValue: 0,                   // Animate to opacity: 1 (opaque)
          duration: ANIMATION_VALUE,    // Make it take a while
          easing:Easing.InOut
        }
      ).start();
    });
  }

  dismissComponent(){
    if(!this.state.presented){
      return ;
    }

    Animated.timing(                  // Animate over time
      this.state.presentingLayerAnimated,     // The animated value to drive
      {
        toValue: -(this.heightOfContainer),                   // Animate to opacity: 1 (opaque)
        duration: ANIMATION_VALUE,    // Make it take a while
        easing:Easing.InOut
      }
    ).start(()=>{
      this.setState({
        presented:false,
        presentingComponent:null
      });
    });
  }

  __getComponent(){
    if(this.state.presentingComponent!=null){
        this.state.presentingComponent.presentingContainer = this;
    }
    return this.state.presentingComponent == null?(<View></View>):<this.state.presentingComponent></this.state.presentingComponent>;
  }

  render(){
    return (
      <View style={styles.top} onLayout={this.__onLayout.bind(this)}>
        <View style={{position:'absolute',zIndex:this.state.presented?ZINDEX_TOP-1:ZINDEX_TOP,width:'100%',height:'100%'}} {...this.props}>
          {this.props.children}
        </View>
        <Animated.View style={{position:'absolute',zIndex:this.state.presented?ZINDEX_TOP:ZINDEX_TOP-1,
                    bottom:this.state.presentingLayerAnimated,
                    width:'100%',
                    height:'100%',
                    backgroundColor:'yellow',
                    opacity:this.state.presented?1:0
                  }}>
                    {
                      this.__getComponent()
                    }
        </Animated.View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  top:{
    flex:1,
    width:'100%',
    height:'100%'
  }
});

module.exports = LRNPresentingContainer;
