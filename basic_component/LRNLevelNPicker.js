import {
  View,
  Picker,
  StyleSheet
} from 'react-native';
import React,{Component,PropTypes} from 'react';
import ViewPropTypes from 'ViewPropTypes';

class LRNLevelNPicker extends Component
{
  static propTypes = {
    ...ViewPropTypes,
    data:PropTypes.array.isRequired,
    selectedValue:PropTypes.array.isRequired
  }

  constructor(props){
    super(props);
    var data = this.props.data;
    var selectedValue = this.props.selectedValue;

    if(data.length!=selectedValue.length){
      console.error('props.data does not match selectedValue.');
    }

    this.state = {selectedValue:selectedValue};
  }

  __onValueChange(pickerIndex){
    return (itemValue, itemIndex)=>{
      var selectedValue = this.state.selectedValue;
      selectedValue[pickerIndex]=this.props.data[pickerIndex][itemIndex];
      this.setState({
        selectedValue:selectedValue
      });
    };
  }

  render(){
    return (
      <View {...this.props}>
        <View style={{flex:1,flexDirection:'column'}}>
          <View style={{height:StyleSheet.hairlineWidth,width:'100%',backgroundColor:'gray'}}/>
          <View style={{flex:0.98,flexDirection:'row'}}>
              {
                this.props.data.map((item,index)=>{
                  return (
                    <Picker selectedValue={this.state.selectedValue[index]} style={{flex:1.0/this.props.data.length}}
                    onValueChange={this.__onValueChange(index).bind(this)} key={index}>
                      {
                        this.props.data[index].map((pickerItem,itemIndex)=>{
                            return <Picker.Item label={pickerItem} value={pickerItem} key={pickerItem}/>
                        })
                      }
                    </Picker>
                  )
                })
              }
          </View>
          <View style={{height:StyleSheet.hairlineWidth,width:'100%',backgroundColor:'gray'}}/>
        </View>
      </View>
    );
  }
}

module.exports = LRNLevelNPicker;
