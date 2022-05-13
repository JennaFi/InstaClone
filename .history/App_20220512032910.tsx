import React from 'react'
import { Text, View } from 'react-native'
import colors from './src/theme/colors'
import font from './src/theme/fonts'

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: colors.primary, fontSize: font.size.lg }}>
        Hello World
      </Text>
    </View>
  )
}

export default App
