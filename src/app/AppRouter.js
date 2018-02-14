import {
  StackNavigator,
} from 'react-navigation'

import connectors from '../modules/connectors'

const RootNavigator = StackNavigator({
  Main: {screen: connectors.scenes.list}
})

export default RootNavigator