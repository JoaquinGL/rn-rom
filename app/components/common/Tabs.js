// Import libraries for making a component
import React from 'react';
import { View } from 'react-native';

// Make a component
const Tabs = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
  }
};

// Make the component available to other parts of the app
export { Tabs };
