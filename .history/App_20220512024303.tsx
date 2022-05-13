import React from 'react'
import { Text, View } from 'react-native'
import colors from './src/theme/colors'

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: colors.primary }}>Hello World</Text>
    </View>
  )
}

export default App
