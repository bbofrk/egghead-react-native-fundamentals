'use strict';
var React = require('react-native');
var {
  View,
  StyleSheet
} = React;

var Separator = React.createClass({
  render: function(){
    return (
      <View style={styles.separator} />
    );
  }
});

var styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#E4E4E4',
    flex: 1,
    marginLeft: 15
  }
});

module.exports = Separator;
