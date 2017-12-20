import React, { Component } from 'react';
import LRNComponent from '../LRNComponent.js'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';

class LRNViewLayout extends LRNComponent
{
  constructor(props){
    super(props);

    this.initializeState({
      container_style:{
        flexDirection:'column',
        flex:1
      },
      backgroundColor:'#345',
      astring:'astring'
    });
  }

  componentDescription = ()=> '实现MAC上的计算器布局演示';
  isShowingConsole = ()=> true;

  componentDidMount(){

  }

  lrnRender(){

    return (
      <View style={styles.container}>
          <View style={[styles.line]}>
              <View style={styles.line_top}>
              <View style={styles.column}>
                  <View style={styles.column_left}>
                    <TouchableOpacity style = {styles.column_left_touch} activeOpacity={0.1}>
                      <Text style={styles.column_left_text}>AC</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.column_right}></View>
              </View>
              <View style={styles.column}>
                  <View style={styles.column_left}>
                    <TouchableOpacity style = {styles.column_left_touch} activeOpacity={0.1}>
                      <Text style={styles.column_left_text}>+/-</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.column_right}></View>
              </View>
              <View style={[styles.column]}>
                  <View style={styles.column_left}>
                    <TouchableOpacity style = {styles.column_left_touch} activeOpacity={0.1}>
                      <Text style={styles.column_left_text}>%</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.column_right}></View>
              </View>
              <View style={[styles.column,styles.column_last]}>
                <View style={styles.column_left}>
                  <TouchableOpacity style = {styles.column_left_touch} activeOpacity={0.1}>
                    <Text style={[styles.column_left_text,styles.column_left_text_last]}>/</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.column_right}></View>
              </View>
              </View>
              <View style={styles.line_bottom}>
              </View>
          </View>
          <View style={[styles.line]}>
          <View style={styles.line_top}>
            <View style={styles.column}>
                <View style={styles.column_left}>
                  <TouchableOpacity style = {styles.column_left_touch} activeOpacity={0.1}>
                    <Text style={styles.column_left_text}>7</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.column_right}></View>
            </View>
            <View style={styles.column}>
                <View style={styles.column_left}>
                  <TouchableOpacity style = {styles.column_left_touch} activeOpacity={0.1}>
                    <Text style={styles.column_left_text}>8</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.column_right}></View>
            </View>
            <View style={[styles.column]}>
                <View style={styles.column_left}>
                  <TouchableOpacity style = {styles.column_left_touch} activeOpacity={0.1}>
                    <Text style={styles.column_left_text}>9</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.column_right}></View>
            </View>
            <View style={[styles.column,styles.column_last]}>
              <View style={styles.column_left}>
                <TouchableOpacity style = {styles.column_left_touch} activeOpacity={0.1}>
                  <Text style={[styles.column_left_text,styles.column_left_text_last]}>X</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.column_right}></View>
            </View>
          </View>
          <View style={styles.line_bottom}></View></View>
          <View style={styles.line}>
            <View style={styles.line_top}>
              <View style={styles.column}>
                  <View style={styles.column_left}>
                    <TouchableOpacity style = {styles.column_left_touch} activeOpacity={0.1}>
                      <Text style={styles.column_left_text}>4</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.column_right}></View>
              </View>
              <View style={styles.column}>
                  <View style={styles.column_left}>
                    <TouchableOpacity style = {styles.column_left_touch} activeOpacity={0.1}>
                      <Text style={styles.column_left_text}>5</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.column_right}></View>
              </View>
              <View style={[styles.column]}>
                  <View style={styles.column_left}>
                    <TouchableOpacity style = {styles.column_left_touch} activeOpacity={0.1}>
                      <Text style={styles.column_left_text}>6</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.column_right}></View>
              </View>
              <View style={[styles.column,styles.column_last]}>
                <View style={styles.column_left}>
                  <TouchableOpacity style = {styles.column_left_touch} activeOpacity={0.1}>
                    <Text style={[styles.column_left_text,styles.column_left_text_last]}>-</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.column_right}></View>
              </View>
            </View>
            <View style={styles.line_bottom}></View>
          </View>
          <View style={styles.line}>
            <View style={styles.line_top}>
              <View style={styles.column}>
                  <View style={styles.column_left}>
                    <TouchableOpacity style = {styles.column_left_touch} activeOpacity={0.1}>
                      <Text style={styles.column_left_text}>1</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.column_right}></View>
              </View>
              <View style={styles.column}>
                  <View style={styles.column_left}>
                    <TouchableOpacity style = {styles.column_left_touch} activeOpacity={0.1}>
                      <Text style={styles.column_left_text}>2</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.column_right}></View>
              </View>
              <View style={[styles.column]}>
                  <View style={styles.column_left}>
                    <TouchableOpacity style = {styles.column_left_touch} activeOpacity={0.1}>
                      <Text style={styles.column_left_text}>3</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.column_right}></View>
              </View>
              <View style={[styles.column,styles.column_last]}>
                <View style={styles.column_left}>
                  <TouchableOpacity style = {styles.column_left_touch} activeOpacity={0.1}>
                    <Text style={[styles.column_left_text,styles.column_left_text_last]}>+</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.column_right}></View>
              </View>
            </View>
            <View style={styles.line_bottom}></View>
          </View>
          <View style={styles.line}>
            <View style={styles.line_top}>
              <View style={styles.column_2}>
                  <View style={styles.column_left}>
                    <TouchableOpacity style = {[styles.column_left_touch,{flexDirection:'row'}]} activeOpacity={0.1}>
                      <View style={{flex:0.5,justifyContent:'center',alignItems:'center'}}>
                        <Text style={[styles.column_left_text]}>1</Text>
                      </View>
                      <View style={{flex:0.5}}></View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.column_right}></View>
              </View>
              <View style={[styles.column]}>
                  <View style={styles.column_left}>
                    <TouchableOpacity style = {styles.column_left_touch} activeOpacity={0.1}>
                      <Text style={styles.column_left_text}>.</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.column_right}></View>
              </View>
              <View style={[styles.column,styles.column_last]}>
                <View style={styles.column_left}>
                  <TouchableOpacity style = {styles.column_left_touch} activeOpacity={0.1}>
                    <Text style={[styles.column_left_text,styles.column_left_text_last]}>=</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.column_right}></View>
              </View>
            </View>
            <View style={styles.line_bottom}></View>
          </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  line:{
    flex:1.0/5.0,
  },
  container:{
    flex:1,
    flexDirection:'column'
  },
  line_top:{
    flex:0.99,
    flexDirection:'row'
  },
  line_bottom:{
    flex:0.01,
    backgroundColor:'gray'
  },
  column:{
    flex:1.0/4.0,
    flexDirection:'row'
  },
  column_2:{
    flex:1.0/2.0,
    flexDirection:'row',
  },
  column_left:{
    flex:1,
  },
  column_left_text:{
    fontSize:30,
  },
  column_left_text_last:{
    color:'white',
  },
  column_left_touch:{
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
  column_left_touch_2:{
      alignItems:'flex-start',
      left:10
  },
  column_right:{
    width:1,
    backgroundColor:'gray'
  },
  column_last:{
    backgroundColor:'coral',
  }
});
module.exports = LRNViewLayout;
