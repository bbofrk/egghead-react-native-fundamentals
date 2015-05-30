'use strict';
var React = require('react-native');

var {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight
} = React;

var Dashboard = React.createClass({
  makeBackground: function(btn) {
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    };

    if (btn === 0) {
      obj.backgroundColor = '#48BBEC';
    } else if (btn === 1) {
      obj.backgroundColor = '#E77AAE';
    } else if (btn == 2) {
      obj.backgroundColor = '#758BF4';
    }
    return obj;
  },
  goToProfile: function() {
    console.log('go to profile');
  },
  goToRepos: function() {
    console.log('go to Repos');
  },
  goToNote: function() {
    console.log('go to Note');
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image} />

        <TouchableHighlight
          onPress={this.goToProfile}
          underlayColor="#BBD4F5"
          style={this.makeBackground(0)}>
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={this.goToRepos}
          underlayColor="#BBD4F5"
          style={this.makeBackground(1)}>
          <Text style={styles.buttonText}>View Repo</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={this.goToNote}
          underlayColor="#BBD4F5"
          style={this.makeBackground(2)}>
          <Text style={styles.buttonText}>View Note</Text>
        </TouchableHighlight>
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
