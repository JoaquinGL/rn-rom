// Import libraries for making a component
import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from './common/Button';

// Make a component
const Deal = ({ deal, style }) => {

  var dealStyles = require('../assets/styles/components/dealStyles.js');
  var textStyles = require('../assets/styles/common/textStyles.js');

  const {
    id,
    title,
    status,
    info,
    detail
  } = deal;

  const {
    containerStyle,
    actionContainer,
    actionImageStyle,
    infoTextStyle,
    titleTextStyle,
    infoDealStyle,
    infoTitleTextStyle,
    infoDealContainerStyle,
    textContainerDealStyle,
  } = dealStyles;

  const {
    subtitleTextColor,
    listImportantTextColor
  } = textStyles;

  const getColorStatus = () => {
    switch (status) {
      case 'new':
        return 'blue';
      case 'active':
        return 'black';
      case 'pending':
        return 'orange';
      case 'approved':
        return 'green';
      case 'reject':
        return 'red';
      default:
        return 'gray';
    }
  };

  return (
    <View style={ containerStyle }>

      <View />

      <View
        className="info"
        style={ infoDealStyle }>

        <View style={ textContainerDealStyle }>
          <Text style={[
            infoTextStyle,
            subtitleTextColor
            ]}>
            { id }
          </Text>
          <Text style={[
            titleTextStyle,
            listImportantTextColor
            ]}>
            { title }
          </Text>
        </View>

        <View style={[
          textContainerDealStyle,
          infoDealContainerStyle
          ]}>
          <Text style={[
            infoTextStyle,
            subtitleTextColor
            ]}>
            { detail }
          </Text>
          <Text style={[
            infoTitleTextStyle,
            listImportantTextColor
            ]}>
            { info }
          </Text>

        </View>

      </View>

      <View style = { actionContainer }>
        <Button type="list">
          <Image
            style= { actionImageStyle }
            source={ require('../assets/images/pencil.png') }
          />
        </Button>
        <Button type="list">
          <Image
            style= { actionImageStyle }
            source={ require('../assets/images/trash.png') }
          />
        </Button>
      </View>

    </View>
  );
};

// Make the component available to other parts of the app
export default Deal;

/*
  onClick={() => onFollowLink()}
*/
