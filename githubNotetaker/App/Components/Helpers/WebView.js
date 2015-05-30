'use strict';
var React = require('react-native');
var {
  View,
  WebView,
  StyleSheet
} = React;

var Web = React.createClass({
  render: function(){
    return (
      <View style={styles.container}>
        <WebView url={this.props.url} />
      </View>
    );
  }
});

Web.propTypes = {
  url: React.PropTypes.string.isRequired
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column'
  }
});

module.exports = Web;
