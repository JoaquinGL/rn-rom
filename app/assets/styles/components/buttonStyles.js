var React = require('react-native');

var buttonStyles = React.StyleSheet.create({
  /*/ ------------------------------------------------------------ CUSTOM BUTTOM  */
  buttonStyle: {
    flex: 1, // allows to expand all the size
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderColor: 'lightgray',
    borderWidth: 0.5,
    marginLeft: 10,
    marginRight: 10,
    maxHeight: 40,
    marginBottom: 10,
  },

  textStyle: {
    alignSelf: 'center',
    color: '#686868',
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
/*/ ------------------------------------------------------------ ICON BUTTON */
  buttonSmallStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },

/*/ ------------------------------------------------------------ LIST BUTTON */
  buttonListStyle: {
    height: 60,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

/*/ ------------------------------------------------------------ TABS BUTTON */
  buttonTabStyle:{
    alignItems: 'center',
    width: 70,
    backgroundColor: 'white',
    borderColor: 'lightgray',
    borderWidth: 0.5,
  },

  tabTextStyle: {
    alignSelf: 'center',
    color: '#686868',
    fontSize: 12,
    paddingBottom: 15,
    paddingTop: 15,
  },

});

module.exports = buttonStyles;
