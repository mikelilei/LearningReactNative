import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import LRNComponent from '../LRNComponent.js'

var TOTAL_LINE = 3.0;

class LRNText extends LRNComponent
{
  constructor(props){
    super(props);
  }

  componentDescription = ()=> '和文字相关的演示\n通过这个例子演示了RN的Text的样式的可继承的特性，但是仅仅是局限于Text标签';
  isShowingConsole = ()=> false;

  lrnRender(){
    return (
      <View style={{flex:1}}>
        <View style={styles.line}>
          <Text style={styles.baseText}>
            In React Native, we are more strict about it:
            <Text style={styles.boldText}>you must wrap all the text nodes inside of a <Text style={{backgroundColor:'lightgray'}}>&lt;Text&gt;</Text> component.</Text> You cannot have a text node directly under a <Text style={{backgroundColor:'lightgray'}}>&lt;View&gt;</Text>.
          </Text>
        </View>
        <View style={styles.line}>
        </View>
        <View style={styles.line}>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  line:{
    flex:1.0/TOTAL_LINE
  },
  baseText: {
    fontFamily: 'Courier',
    fontSize:20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  boldText:{
    fontFamily: 'Courier',
    fontSize:20,
    fontWeight:'bold'
  }
});

module.exports = LRNText;
