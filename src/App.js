import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';

import Notes from './containers/Notes/Notes'
import NoteCreator from './containers/NoteCreator/NoteCreator'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path='/notes' component={Notes}/>
        <Route path='/create' component={NoteCreator}/>
        <Redirect to='/'></Redirect>
      </Switch>
    )

    return (
      <Layout>
        { routes }
      </Layout>
    )
  }
  
}

export default withRouter(App);