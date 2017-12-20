import {
  View,
  Button,
  StyleSheet,
  Text
} from 'react-native';
import React from 'react';
import LRNPresentingContainer from '../widget/LRNPresentingContainer.js';
import LRNComponent from '../LRNComponent.js'

class LRNPresenting extends LRNComponent {

  constructor(props) {
    super(props);
    this.comp = AnotherComponent;
  }

  lrnRender(){
    return (
      <LRNPresentingContainer ref={(obj)=>{this.presentingContainer=obj}}>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Button title='Start present' onPress={()=>{
            this.presentingContainer.presentComponent(AnotherComponent);
          }}/>
        </View>
      </LRNPresentingContainer>
    );
  }
}

class AnotherComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {content:'This is another component.'};
  }

  __onPress(){
    this.setState({
      content:'New contentn!'
    });
  }

  render(){
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text> {this.state.content}</Text>
        <Button title='testing' onPress={this.__onPress.bind(this)}/>
        <Button title='dismiss' onPress={()=>{
            AnotherComponent.presentingContainer.dismissComponent();
        }}/>
      </View>
    );
  }
}

module.exports = LRNPresenting
