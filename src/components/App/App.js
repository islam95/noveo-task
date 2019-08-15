import React, { Component } from 'react';
import { connect } from "react-redux";

class App extends Component {
  
  render() {
    return (
      <div>
        Hello there!
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

