import { Slot, Stack } from 'expo-router'
import "../global.css";
// import React from 'react'

const RootLayout = () => { 
  return (
    <Stack>
      <Stack.Screen name="index" options={ {headerShown: false} } />
    </Stack>
    // <Slot/>

  )
}

export default RootLayout
 