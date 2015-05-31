'use strict';
var React = require('react-native');
var api = require('../Utils/api');
var Separator = require('./Helpers/Separator');
var Badge = require('./Badge');
var {
  View,
  StyleSheet,
  ListView,
  Text,
  TextInput,
  TouchableHighlight
} = React;

var Notes = React.createClass({
  getInitialState: function(){
    var ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
    return {
      dataSource: ds.cloneWithRows(this.props.notes),
      note: '',
      error: ''
    }
  },
  handleChange: function(event) {
    this.setState({
      note: event.nativeEvent.text
    })
  },
  handleSubmit: function() {
    var _this = this;
    var note = _this.state.note;

    api.addNote(_this.props.userInfo.login, note)
        .then(insertData => {
          api.getNotes(_this.props.userInfo.login)
              .then(data => {
                var ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});

                _this.setState({
                  dataSource: ds.cloneWithRows(data),
                  note: ''
                })
              });
        }).catch(err => {
          console.log('Request Failed', err);
          this.setState({error});
        })
  },
  footer: function() {
    return (
      <View style={styles.footerContainer}>
        <TextInput
          style={styles.searchInput}
          value={this.state.note}
          onChange={this.handleChange}
          placeholder="New Note" />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit}
          underlayColor="#88D4F5">
            <Text style={styles.buttonText}> Submit </Text>
        </TouchableHighlight>
      </View>
    )
  },
  renderRow: function(rowData) {
    return (
      <View>
        <View style={styles.rowContainer}>
          <Text>{rowData}</Text>
        </View>
        <Separator />
      </View>
    );
  },
  render: function() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderHeader={() => <Badge userInfo={this.props.userInfo} />} />
        {this.footer()}
      </View>
    )
  }
});

Notes.propTypes = {
  userInfo: React.PropTypes.object.isRequired,
  notes: React.PropTypes.object.isRequired
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  buttonText: {
    fontSize: 18,
    color: 'white'
  },
  button: {
    height: 60,
    backgroundColor: '#48BBEC',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchInput: {
    height: 60,
    padding: 10,
    fontSize: 18,
    color: '#111',
    flex: 10
  },
  rowContainer: {
    padding: 10,
  },
  footerContainer: {
    backgroundColor: '#E3E3E3',
    alignItems: 'center',
    flexDirection: 'row'
  }
});

module.exports = Notes;
