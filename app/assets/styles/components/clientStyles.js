var React = require('react-native');

const headerPadding = 10;

var clientStyles = React.StyleSheet.create({
/*/ ------------------------------------------------------------ CLIENT CARD */
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
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,

    backgroundColor: '#f9f9f9',
  },
/*/ ------------------------------------------------------------ CLIENT HEADER */
  headerClientStyle: {
    height: 40,
    flexDirection: 'row'
  },

  statusStyle : {
    flex: 1,
    flexDirection: 'row',
    padding: headerPadding
  },

  statusImageStyle : {
    width: 6,
    height: 6,
    marginTop: 5,
    marginLeft: 4
  },

  actionStyle : {
    aspectRatio: 1,
    marginRight: 10,
    padding: headerPadding
  },

  actionImageStyle: {
    width: 20,
    height: 20,
    marginTop: 0
  },
/*/ ------------------------------------------------------------ CLIENT BODY */
  infoDealStyle: {
    height: 150,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 5,
  },

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

});

module.exports = clientStyles;
