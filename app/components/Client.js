// Import libraries for making a component
import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from './common';

// Make a component
const Client = ({ client }) => {

  const {
    title,
    status,
    id,
    author,
    exists
  } = client;

  var clientStyle = require('../assets/styles/components/clientStyles.js');
  var textStyles = require('../assets/styles/common/textStyles.js');

  var dealButton;
  if (exists === 'no') {
    dealButton = <Button> <Text style={ textStyles.commonButtonTextStyle }>CREATE NEW DEAL</Text> </Button>;
  } else {
    dealButton = <Button> <Text style={ textStyles.existingButtonTextStyle }>SEE EXISTING DEAL</Text> </Button>;
  }

  const getIconSrc = () => {
    switch (status) {
      case 'new':
        return require('../assets/images/newdot.png');
      case 'active':
        return require('../assets/images/activedot.png');
      case 'pending':
        return require('../assets/images/pendingdot.png');
      case 'approved':
        return require('../assets/images/approvedot.png');
      case 'reject':
        return require('../assets/images/rejectdot.png');
      default:
        return require('../assets/images/disabledot.png');
    }
  };

  console.log(client);

  return (
    <View style={ clientStyle.containerStyle }>
      <View
        className="header"
        style={clientStyle.headerClientStyle}>

        <View style={[
            clientStyle.statusStyle
          ]}>
          <Text
            className="status"
            style={[
              clientStyle.statusTextStyle,
              textStyles.titleTextColor
            ]}>
            { status }
          </Text>
          <Image
            style= { clientStyle.statusImageStyle }
            source= { getIconSrc() }
          />
        </View>

        <View style={[
            clientStyle.actionStyle
          ]}>
          <Button type="small">
            <Image
              style= { clientStyle.actionImageStyle }
              source={ require('../assets/images/3dots.png') }
            />
          </Button>
        </View>

      </View>

      <View
        className="info"
        style={ clientStyle.infoDealStyle }>
        <Text
          className="titlelink"
          style={[
            clientStyle.titleLinkStyle,
            textStyles.titleTextColor
          ]}>
          { title }
        </Text>
        <Text style={ [clientStyle.infoTextStyle, textStyles.subtitleTextColor] }>{ id }</Text>
        <Text style={ [clientStyle.infoTextStyle, textStyles.subtitleTextColor] }>{ author }</Text>
      </View>

      { dealButton }

    </View>
  );
};

// Make the component available to other parts of the app
export default Client;

/*
  onClick={() => onFollowLink()}
*/
