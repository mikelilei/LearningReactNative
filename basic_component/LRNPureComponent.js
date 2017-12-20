import {
  View,
  Button,
  Text
} from 'react-native';
import React,{Component,PureComponent} from 'react';
import LRNComponent from '../LRNComponent.js'

class LRNPureComponent extends LRNComponent
{
  constructor(props){
    super(props);
  }

  componentDescription = ()=> 'PureComponent在props没有改变的情况下是不会重新render，而一般的Component则会重新render。';
  isShowingConsole = ()=> true;

  lrnRender(){
    return (
      <View style={{flexDirection:'column',flex:1}}>
        <Button title='Testing' onPress={()=>{
          this.setState({a:'b'});
        }}/>
        <ComponentA a='a-a' b='a-b'/>
        <ComponentB a='a-a' b='a-b'/>
      </View>
    );
  }
}

class  ComponentA extends PureComponent {

  render(){
    console.warn('pure component a is rendering...');
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>
          {this.props.a},{this.props.b}
        </Text>
      </View>
    );
  }
}

class  ComponentB extends Component {
  render(){
    console.warn('non-pure component b is rendering...');
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>
          {this.props.a},{this.props.b}
        </Text>
      </View>
    );
  }
}

module.exports = LRNPureComponent;
