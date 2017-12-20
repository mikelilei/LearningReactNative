import React,{PropTypes} from 'react';
import {
  View,
  Text
} from 'react-native';
import ViewPropTypes from 'ViewPropTypes'


class LRNCustomziedComponent extends React.Component
{
  constructor(props){
    super(props);
  }

  static propTypes = {
    ...ViewPropTypes,
    required_string:PropTypes.string.isRequired,
    a_number:PropTypes.number,
    a_bool:PropTypes.bool,
    a_enum:PropTypes.oneOf(['News', 'Photos'])
  }

  static defaultProps = {
    a_number:10010,
    a_bool:false,
    a_enum:'News'
  }

  render(){
    return (
      <View style={{width:'100%',height:100}} {...this.props}>
        <Text>required_string={this.props.required_string}</Text>
        <Text>a_number={this.props.a_number}</Text>
        <Text>a_bool={this.props.a_bool?'true':'false'}</Text>
        <Text>a_enum={this.props.a_enum}</Text>
      </View>
    );
  }
}

module.exports = LRNCustomziedComponent;
