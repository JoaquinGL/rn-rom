// Import libraries for making a component
import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from './common/Button';

// Make a component
const Deal = ({ deal, style }) => {

  const {
    id,
    title,
    status,
    info,
    detail
  } = deal;

  var dealStyles = require('../assets/styles/components/dealStyles.js');
  var textStyles = require('../assets/styles/common/textStyles.js');

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
    <View style={ dealStyles.containerStyle }>

      <View style={ dealStyles.status } />

      <View
        className="info"
        style={ dealStyles.infoDealStyle }>

        <View style={ dealStyles.textContainerDealStyle }>
          <Text style={ [dealStyles.infoTextStyle, textStyles.subtitleTextColor] }>{ id }</Text>
          <Text style={ [dealStyles.titleTextStyle, textStyles.listImportantTextColor] }>{ title }</Text>
        </View>
        <View style={ [dealStyles.textContainerDealStyle, dealStyles.infoDealContainerStyle] }>
          <Text style={ [dealStyles.infoTextStyle, textStyles.subtitleTextColor] }>{ detail }</Text>
          <Text style={ [dealStyles.infoTitleTextStyle, textStyles.listImportantTextColor] }>{ info }</Text>
        </View>

      </View>

      <View style = { dealStyles.actionContainer }>
        <Button type="list">
          <Image
            style= { dealStyles.actionImageStyle }
            source={ require('../assets/images/pencil.png') }
          />
        </Button>
        <Button type="list">
          <Image
            style= { dealStyles.actionImageStyle }
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
