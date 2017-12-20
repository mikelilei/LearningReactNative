import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import {
  Cell,
  Section,
  TableView,
  Separator
} from 'react-native-tableview-simple'
import React, { Component } from 'react';

class AppMenu extends Component {
  constructor(props) {
    super(props)
  }

  _keyExtractor = (item, index) => item.menuId;

  _renderItem = ({item}) => (
    <TouchableOpacity onPress={()=>{this._onPressItem(item)}}
    activeOpacity={0.5}
    style={styles.menu_cell}>
      <Text style={{flex:1,textAlignVertical:'center',fontWeight:'normal',fontSize:17}} numberOfLines={1}>
        {item.title}
      </Text>
      <Image style={{width:25,height:'100%'}}
      source={require('./img/icon_indicator_detail.png')}
      resizeMode='center'>
      </Image>
    </TouchableOpacity>
  );

  _onPressItem (item) {
    var params = {};
    if(item.subMenus != null){
      params.menus = item.subMenus;
    }
    params.currentMenu = item;
    this.props.navigation.navigate(item.menuId,params);
  };

  _ItemSeparatorComponent = ()=>(
    <Separator />
  )

  _ListFooterComponent = ()=>(<Separator insetLeft={0}/>);
  _ListHeaderComponent = ()=>(<Separator insetLeft={0}/>);

  render(){
    const {menus} = this.props.navigation.state.params;

    return (
      <FlatList data={menus} keyExtractor={this._keyExtractor} renderItem={this._renderItem}
      ItemSeparatorComponent={this._ItemSeparatorComponent}
      ListFooterComponent={this._ListFooterComponent}
      ListHeaderComponent= {this._ListHeaderComponent}
       />
    );
  }
}

const styles = StyleSheet.create({
  menu_cell: {
    width:'100%',
    height:80,
    alignItems:'center',
    paddingLeft:15,
    justifyContent:'flex-start',
    paddingRight:10,
    backgroundColor:'#fff',
    flexDirection:'row'
  }
});
module.exports = AppMenu;
