'use strict';
var React = require('react-native');
var Profile = require('./Profile');
var Repos = require('./Repos');
var api = require('../Utils/api');
var Notes = require('./Notes');


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
    this.props.navigator.push({
      title: 'Profile' || 'Select an Option',
      component: Profile,
      passProps: {userInfo: this.props.userInfo}
    });
  },
  goToRepos: function() {
    api.getRepos(this.props.userInfo.login)
        .then(res => {
          this.props.navigator.push({
            title: 'Repos' || 'Select an Option',
            component: Repos,
            passProps: {userInfo: this.props.userInfo, repos: res}
          });
        });
  },
  goToNote: function() {
    api.getNotes(this.props.userInfo.login)
        .then(res => {
          res = res || {};
          this.props.navigator.push({
            title: 'Notes',
            component: Notes,
            passProps: {
              notes: res,
              userInfo: this.props.userInfo
            }
          })
        });
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
