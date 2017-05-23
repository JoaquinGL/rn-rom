// Import libraries for making a component
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Make a component
const Button = ({ onPress, children , type }) => {

  var buttonStyles = require('../../assets/styles/components/buttonStyles.js');

  const {
    buttonStyle,
    textStyle,
    buttonSmallStyle,
    buttonTabStyle,
    tabTextStyle,
    buttonListStyle
  } = buttonStyles;

  const getButtonStyle = (classType) => {
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
    <TouchableOpacity onPress={onPress} style={ getButtonStyle(type) }>
      <Text style={ getTextButtonClass(type) }>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export { Button };

// Make the component available to other parts of the app
// export default Button;
// export {Button: Button};
// (props) -> ( { album} ) -> when you have multiple references to props object
