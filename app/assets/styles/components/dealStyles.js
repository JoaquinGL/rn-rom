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
    fontSize: 14,
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
    fontSize: 11,
    marginTop: 1,
  },

  infoDealContainerStyle: {
    marginLeft: 10,
  },

});

module.exports = dealStyles;
