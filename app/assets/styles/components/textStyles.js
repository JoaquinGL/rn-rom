var React = require('react-native');

var textStyles = React.StyleSheet.create({
/*/ ------------------------------------------------------------ COLORS */
  titleTextColor: {
    color: '#686868'
  },

  subtitleTextColor: {
    color: '#918f8f'
  },

  buttonTextColor: {
    color: '#686868'
  },

  tabTextColor: {
    color: '#686868'
  },

  headerTextColor: {
    color: 'black'
  },
/*/ ------------------------------------------------------------ TEXT */
  statusTextStyle: {
    fontSize: 12,
    fontStyle: 'italic',
  },

  titleLinkStyle: {
    fontSize: 20,
    paddingBottom: 10,
  },

  infoTextStyle : {
    fontSize: 11,
    paddingBottom: 2,
  },

  commonButtonTextStyle : {
    fontWeight: '200'
  },

  existingButtonTextStyle : {
    fontWeight: '500'
  }

});

module.exports = textStyles;
