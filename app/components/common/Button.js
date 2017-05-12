// Import libraries for making a component
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Make a component
const Button = ({ onPress, children , type}) => {

  const {
    buttonStyle,
    textStyle,
    buttonSmallStyle
  } = styles;

  const getButtonClass = (classType) => {
    switch (classType) {
      case 'small':
        return buttonSmallStyle;
      default:
        return buttonStyle;
    }
  };

  return (
    <TouchableOpacity onPress={onPress} style={ getButtonClass(type) }>
      <Text  style={textStyle}>
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
    borderRadius: 5,
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

  textStyle: {
    alignSelf: 'center',
    color: '#686868',
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },

};

export { Button };

// Make the component available to other parts of the app
// export default Button;
// export {Button: Button};
// (props) -> ( { album} ) -> when you have multiple references to props object
