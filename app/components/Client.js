// Import libraries for making a component
import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from './common/Button';

// Make a component
const Client = ({ client, style }) => {

  var dealButton;
  var clientStyle = require('../assets/styles/components/clientStyles.js');
  var textStyles = require('../assets/styles/common/textStyles.js');

  const {
    containerStyle,
    headerClientStyle,
    statusStyle,
    statusTextStyle,
    statusImageStyle,
    actionStyle,
    infoDealStyle,
    titleLinkStyle,
    infoTextStyle,
    actionImageStyle
  } = clientStyle;

  const {
    listBackgroundColor,
    commonButtonTextStyle,
    existingButtonTextStyle,
    titleTextColor,
    subtitleTextColor
  } = textStyles;

  const {
    title,
    status,
    id,
    author,
    exists
  } = client;

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

  if (exists === 'no') {
    dealButton = <Button> <Text style={ commonButtonTextStyle }>CREATE NEW DEAL</Text> </Button>;
  } else {
    dealButton = <Button> <Text style={ existingButtonTextStyle }>SEE EXISTING DEAL</Text> </Button>;
  }

  return (
    <View style={[
        containerStyle,
        listBackgroundColor
      ]}>
      <View
        className="header"
        style={ headerClientStyle }>
        <View style={ statusStyle }>
          <Text
            className="status"
            style={[
              statusTextStyle,
              titleTextColor
            ]}>
            { status }
          </Text>
          <Image
            style= { statusImageStyle }
            source= { getIconSrc() }
          />
        </View>

        <View style={[
            actionStyle
          ]}>
          <Button type="small">
            <Image
              style= { actionImageStyle }
              source={ require('../assets/images/3dots.png') }
            />
          </Button>
        </View>
      </View>

      <View
        className="info"
        style={ infoDealStyle }>
        <Text
          className="titlelink"
          style={[
            titleLinkStyle,
            titleTextColor
          ]}>
          { title }
        </Text>
        <Text style={[
          infoTextStyle,
          subtitleTextColor
          ]}>
          { id }
        </Text>
        <Text style={[
          infoTextStyle,
          subtitleTextColor
          ]}>
          { author }
        </Text>
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
