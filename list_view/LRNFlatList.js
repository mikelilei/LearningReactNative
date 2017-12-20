import {
  View,
  Button,
  FlatList,
  Text,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import React,{Component} from 'react';
import LRNComponent from '../LRNComponent.js'

var CELL_HEIGHT = 50;
var LOADING_MORE_DATA = 'LOADING_MORE_DATA';

class LRNFlatList extends LRNComponent {
  constructor(props) {
    super(props);
    var input_data = [];
    for (var i = 0; i <20; i++) {
      input_data.push(
        {
          name:'Name-'+i
        }
      );
    }
    this.initializeState({
      data:input_data,
      refreshing:false,
      isLoadingMore:false
    });
  }

  componentDescription = ()=> '实现了列表的瀑布式加载更多，和下拉刷新功能';
  isShowingConsole = ()=> false;

  _renderItem(dataItem){
    if(dataItem.item === LOADING_MORE_DATA){
      return (
        <View style={{flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center',height:CELL_HEIGHT,width:'100%'}}>
          <ActivityIndicator animating={true} size='small'/>
        </View>
      );
    }else{
      return (
        <TouchableOpacity>
        <View style={{flex:1,flexDirection:'column',alignItems:'flex-start',justifyContent:'center',height:CELL_HEIGHT,width:'100%'}}>
          <Text style={{marginLeft:10}}>{dataItem.item.name}</Text>
        </View>
        </TouchableOpacity>
      );
    }
  }

  _loadMore(){
    var start = this.state.data.length;
    var input_data = this.state.data;
    for(var i=0;i<15;i++){
      input_data.push(
        {
          name:'Name-'+(i+start)
        }
      );
    }
    this.setState({
      data:input_data
    });
  }

  _listEmptyComponent(){
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>
          This is an empty view!!!
        </Text>
      </View>
    );
  }

  _onRefresh(){
    this.setState({
      refreshing:true
    },()=>{
      setTimeout(()=>{
        var input_data = [];
        for (var i = 0; i <15; i++) {
          input_data.push(
            {
              name:'Name-'+i
            }
          );
        }
        this.setState({
          data:input_data,
          refreshing:false
        });
      },1000*2);
    });
  }

  _onScroll(event){
    var reachEnd = false;
    if(event.nativeEvent.contentOffset.y/CELL_HEIGHT+(this.listHeight/CELL_HEIGHT)>=this.state.data.length-10){
        reachEnd = true;
    }
    if(reachEnd){
      if(!this.state.isLoadingMore){
        this.setState({
          isLoadingMore:true
        },()=>{
          this.state.data.push(LOADING_MORE_DATA);
          this.setState(
            {
              data:this.state.data
            }
          ,()=>{
            setTimeout(()=>{
              this.setState({
                isLoadingMore:false
              },()=>{
                this.state.data.pop();
                this._loadMore();
              });
            },1000);
          });
        });
      }
    }
  }

  _onLayout(event){
    var height = event.nativeEvent.layout.height;
    this.listHeight = height;
  }

  _keyExtractor(item, index){
    return index;
  }

  lrnRender(){
    return (
      <View style={{flex:1,flexDirection:'column'}}>
        <FlatList style={{flex:0.9}} data={this.state.data} renderItem={this._renderItem.bind(this)}
        ListEmptyComponent={this._listEmptyComponent.bind(this)}
        onRefresh={this._onRefresh.bind(this)} refreshing={this.state.refreshing}
        onScroll={this._onScroll.bind(this)} onLayout={this._onLayout.bind(this)}
        keyExtractor={this._keyExtractor.bind(this)}>

        </FlatList>
      </View>
    );
  }
}

module.exports = LRNFlatList;
