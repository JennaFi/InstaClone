import React from 'react'
import { Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import colors from './src/theme/colors'
import font from './src/theme/fonts'

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: colors.primary, fontSize: font.size.lg }}>
        Hello World
        <AntDesign name="stepforward" size={25} />
      </Text>
    </View>
  )
}

export default App
