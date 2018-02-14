import React, { Component } from 'react'
import { addNavigationHelpers } from 'react-navigation'
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'

import RootNavigator from './AppRouter'
import './Reactotron'


class App extends Component {
  render() {
    const addListener = createReduxBoundAddListener("root")
    return (
      <RootNavigator screenProps={this.props} navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
        addListener
      })} />
    )
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
})

export default connect(
  mapStateToProps
)(App)
