// Import libraries for making a component
import React from 'react';
import { View, Text, Linking, Image } from 'react-native';
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

  const {
    containerStyle,
    headerClientStyle,
    statusStyle,
    actionStyle,
    headerPadding,
    actionImageStyle,
    statusImageStyle,
    statusTextStyle,
    clientTextColor,
    infoDealStyle,
    titleLinkStyle,
    directionRow,
    infoTextStyle
  } = styles;


  var dealButton;
  if (exists === 'no') {
    dealButton = <Button> CREATE NEW DEAL </Button>;
  } else {
    dealButton = <Button> SEE EXISTING DEAL </Button>;
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
    <View style={ containerStyle }>
      <View className="header" style={ [ directionRow, headerClientStyle ] }>
        <View style={[ statusStyle, headerPadding, directionRow ]}>
          <Text className="status" style={ [statusTextStyle, clientTextColor ] }>
            { status }
          </Text>
          <Image
            style= { statusImageStyle }
            source= { getIconSrc() }
          />
        </View>
        <View style={ [ actionStyle, headerPadding ] }>
          <Button type="small">
          <Image
            style= { actionImageStyle }
            source={ require('../assets/images/3dots.png') }
          />
          </Button>
        </View>
      </View>

      <View className="info" style={ infoDealStyle }>
        <Text className="titlelink" style={ [titleLinkStyle, clientTextColor] }>
          { title }
        </Text>
        <Text style={ infoTextStyle }>{ id }</Text>
        <Text style={ infoTextStyle }>{ author }</Text>
      </View>

      { dealButton }

    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,

    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,

    backgroundColor: '#f9f9f9',
  },

  headerClientStyle: {
    height: 40,
  },

  actionStyle : {
    aspectRatio: 1,
    marginRight: 10,
  },

  directionRow: {
    flexDirection: 'row'
  },

  statusStyle : {
    flex: 1
  },

  statusImageStyle : {
    width: 6,
    height: 6,
    marginTop: 5,
    marginLeft: 4
  },

  statusTextStyle: {
    fontSize: 12,
    fontStyle: 'italic',
  },

  headerPadding : {
    padding: 10
  },

  actionImageStyle: {
    width: 20,
    height: 20,
    marginTop: 0
  },

  infoDealStyle: {
    height: 150,
    paddingRight: 20,
    paddingLeft: 20,
  },

  titleLinkStyle: {
    fontSize: 20,
    paddingBottom: 10,
  },

  clientTextColor: {
    color: '#686868',
  },

  infoTextStyle : {
    color: '#918f8f',
    fontSize: 11,
    paddingBottom: 2,
  }

};

// Make the component available to other parts of the app
export default Client;


/*
  onClick={() => onFollowLink()}
*/
