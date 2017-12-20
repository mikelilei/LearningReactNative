import {
  View,
  ScrollView,
  StyleSheet,
  Image
} from 'react-native';
import React,{PropTypes} from 'react';
import ViewPropTypes from 'ViewPropTypes'

var MAX_IMAGE_COUNT = 6;
var PAGE_INDICATOR_SIZE = 8;

class LRNAutoSlide extends React.Component
{
  constructor(props){
    super(props);

    if(this.props.imageList.length > MAX_IMAGE_COUNT){
      console.error(`The max length of imageList should <= ${MAX_IMAGE_COUNT}`);
    }
    this.state = {imageList:this.props.imageList,currentPage:0};
    this._pageSize = 0;
  }

  static propTypes = {
    ...ViewPropTypes,
    imageList: PropTypes.arrayOf(PropTypes.any).isRequired,
    imageWidth:PropTypes.number.isRequired,
    imageHeight:PropTypes.number.isRequired
  }

  __onScroll(event){
    var page = (event.nativeEvent.contentOffset.x / this._pageSize);
    this.setState({currentPage:Number.parseInt(page+'')});
  }

  __onContentSizeChange(contentWidth,contentHeight){
    this._pageSize = contentWidth/this.state.imageList.length;
  }

  render(){
    return (
      <View style={{backgroundColor:'blue',justifyContent:'center',alignItems:'center'}} {...this.props}>
          <ScrollView style={styles.main} pagingEnabled={true} horizontal={true} showsHorizontalScrollIndicator={false}
          onScroll={this.__onScroll.bind(this)}
          onContentSizeChange={this.__onContentSizeChange.bind(this)}>
            {this.state.imageList.map((source,i)=>{
                return (
                  <Image style={{width:this.props.imageWidth,height:this.props.imageHeight}} source={source} key={i}/>
                );
            })}
          </ScrollView>
          <View style={styles.page_number}>
            {this.state.imageList.map((source,i)=>{
                return (
                  <View style={i==this.state.currentPage?styles.page_number_indicator_current:styles.page_number_indicator}></View>
                );
            })}
          </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  main:{
    flex:1
  },
  page_number:{
    height:30,top:-30,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  page_number_indicator:{
    width:PAGE_INDICATOR_SIZE,
    height:PAGE_INDICATOR_SIZE,
    borderRadius:PAGE_INDICATOR_SIZE/2,
    backgroundColor:'red',
    marginLeft:PAGE_INDICATOR_SIZE*0.5,
    marginRight:PAGE_INDICATOR_SIZE*0.5
  },
  page_number_indicator_current:{
    width:PAGE_INDICATOR_SIZE,
    height:PAGE_INDICATOR_SIZE,
    borderRadius:PAGE_INDICATOR_SIZE/2,
    backgroundColor:'gray',
    marginLeft:PAGE_INDICATOR_SIZE*0.5,
    marginRight:PAGE_INDICATOR_SIZE*0.5
  }
});

module.exports = LRNAutoSlide;
