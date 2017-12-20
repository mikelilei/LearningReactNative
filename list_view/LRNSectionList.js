import {
  View,
  SectionList,
  Text
} from 'react-native';

import React,{Component} from 'react';
import LRNComponent from '../LRNComponent.js'

class LRNSectionList extends LRNComponent
{
  constructor(props){
    super(props);
    this.initializeState({
      data:[
        {data:[
          'section 1-1',
          'section 1-2',
          'section 1-3',
        ],title:'A'},
        {data:[
          'section 2-1',
          'section 2-2',
          'section 2-3',
        ],title:'B'},
        {data:[
          'section 3-1',
          'section 3-2',
          'section 3-3',
        ],title:'C'},
        {data:[
          'section 4-1',
          'section 4-2',
          'section 4-3',
        ],title:'D'},
        {data:[
          'section 5-1',
          'section 5-2',
          'section 5-3',
        ],title:'E'},
        {data:[
          'section 6-1',
          'section 6-2',
          'section 6-3',
        ],title:'F'}
      ]
    });
  }

  _keyExtractor(item, index){
    return index;
  }

  lrnRender(){
    return (
      <SectionList sections={this.state.data} renderSectionHeader={(section)=>{
          return (
            <View style={{height:30,justifyContent:'center',alignItems:'flex-start',flexDirection:'column',backgroundColor:'gray'}}>
              <Text style={{marginLeft:8}}>{section.section.title}</Text>
            </View>
          );
      }}
      renderItem={(item)=>{
        return (
          <View style={{height:50,justifyContent:'center',alignItems:'flex-start',flexDirection:'column'}}>
            <Text style={{marginLeft:10}}>{item.item}</Text>
          </View>
        );
      }}
      keyExtractor={this._keyExtractor.bind(this)}
      stickySectionHeadersEnabled={true}>
      </SectionList>
    );
  }
}

module.exports = LRNSectionList;
