// Import libraries for making a component
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Make a component
const Button = ({ onPress, children , type}) => {

  const {
    buttonStyle,
    textStyle,
    buttonSmallStyle,
    buttonTabStyle,
    tabTextStyle,
    buttonListStyle
  } = styles;

  const getButtonClass = (classType) => {
    switch (classType) {
      case 'small':
        return buttonSmallStyle;
      case 'tab':
        return buttonTabStyle;
      case 'list':
        return buttonListStyle;
      default:
        return buttonStyle;
    }
  };

  const getTextButtonClass = (classType) => {
    switch (classType) {
      case 'tab':
        return tabTextStyle;
      default:
        return textStyle;
    }
  };

  return (
    <TouchableOpacity onPress={onPress} style={ getButtonClass(type) }>
      <Text style={ getTextButtonClass(type) }>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
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

  buttonSmallStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonListStyle: {
    height: 60,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textStyle: {
    alignSelf: 'center',
    color: '#686868',
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },

  tabTextStyle: {
    alignSelf: 'center',
    color: '#686868',
    fontSize: 12,
    paddingBottom: 15,
    paddingTop: 15,
  },

  buttonTabStyle:{
    alignItems: 'center',
    width: 70,
    backgroundColor: 'white',
    borderColor: 'lightgray',
    borderWidth: 0.5,
  }

};

export { Button };

// Make the component available to other parts of the app
// export default Button;
// export {Button: Button};
// (props) -> ( { album} ) -> when you have multiple references to props object
