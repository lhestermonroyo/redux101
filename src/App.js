import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {Container} from 'reactstrap';
import Posts from './components/Posts';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Container className="mt-3">
            <Posts></Posts>
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
