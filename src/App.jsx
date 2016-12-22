import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  }

  onDeviceReady() {
    this.receivedEvent('deviceready');
  }

  receivedEvent(id) {
    console.log('Received Event: ' + id);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }

}

export default App;
