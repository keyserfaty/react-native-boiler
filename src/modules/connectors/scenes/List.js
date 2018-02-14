import React from 'react'
import propTypes from 'prop-types'
import { View, Text } from 'react-native'

import styles from './styles'

class List extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>holi</Text>
      </View>
    )
  }
}

List.propTypes = {
  shippers: propTypes.array,
}

export default List