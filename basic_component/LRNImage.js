import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'
import LRNComponent from '../LRNComponent.js'

class LRNImage extends LRNComponent
{
  constructor(props){
    super(props);
  }

  componentDescription = ()=> '图像相关演示:\n 1.从网络加载图像，并且在相关事件输出进度。';
  isShowingConsole = ()=> true;

  lrnRender(){
    return (
      <View style={{width:'100%',height:'100%',justifyContent:'center', alignItems:'center'}}>
        <Image
        onLoadStart={()=>{this.lrnLog('Image is starting to load.');}}
        onLoadEnd={()=>{this.lrnLog('Image loading is completed');}}
        onError={(event)=>{this.lrnLog('Image load failed, error:'+event.nativeEvent.error);}}
        resizeMode='cover'
        source={{uri:'http://desk.fd.zol-img.com.cn/t_s1440x900c5/g5/M00/03/0D/ChMkJlndkgiIWsEGAAJC6euOuVkAAhKLgIdRb0AAkMB851.jpg',width:300,height:300}}/>
      </View>
    );
  }
}
module.exports = LRNImage;
