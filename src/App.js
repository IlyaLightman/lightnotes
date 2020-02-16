import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import Notes from './containers/Notes/Notes';

class App extends Component {
  render() {
    return (
      <Layout>
        <Notes />
      </Layout>
    )
  }
  
}

export default App;