'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} = React;

var Places = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Search for a place..."
          style={styles.searchBarInput}
          onEndEditing={this.onSearchChange}
        />
        <Text style={styles.welcome}>
          Welcome to Places!
        </Text>
        <Text style={styles.instructions}>
          Places is where you keep your lists of spots you want to visit.
        </Text>
        <Image
          source={{uri : 'https://openmerchantaccount.com/img/map-places.png'}}
          style={styles.customimg}
        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 80,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    margin: 40,
  },
  customimg: {
    width: 200,
    height: 200,
  },
  searchBarInput: {
    marginTop: 20,
    padding: 5,
    fontSize: 15,
    height: 30,
    backgroundColor: '#EAEAEA',
  },
});

AppRegistry.registerComponent('Places', () => Places);
