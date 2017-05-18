var React = require('react-native');

var dealStyles = React.StyleSheet.create({
/*/ ------------------------------------------------------------ CLIENT CARD */
  containerStyle: {
    backgroundColor: '#f9f9f9',
    marginTop: 5,
    height: 60,
    flexDirection: 'row'
  },

  actionContainer: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
  },

  actionImageStyle: {
    width: 25,
    height: 25,
    opacity: 0.4,
    marginTop: 12,
  },

  infoTextStyle: {
    fontSize: 8
  },

  titleTextStyle : {
    fontSize: 13,
    marginRight: 10,
    color: '#555'
  },

  infoDealStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },

  infoTitleTextStyle : {
    fontSize: 10,
    marginTop: 1,
    maxWidth: 70,
  },

  infoDealContainerStyle: {
    marginLeft: 5,
  },

  textContainerDealStyle: {
    width: 160
  }

});

module.exports = dealStyles;
