'use strict';
var React = require('react-native');

var {
  Text,
  View,
  StyleSheet
} = React;

var Dashboard = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text>This is the dashboard</Text>
        <Text>{this.props.userInfo}</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 358
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

module.exports = Dashboard;
