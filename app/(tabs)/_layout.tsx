import { View, Text, Image, ImageProps } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({color, icon, focused, name}: {
  color: string;
  icon: ImageProps;
  focused: boolean;
  name: string;
}) => {
  return (
  <View className='justify-center items-center gap-2'>
    <Image 
    source={icon}
    tintColor={color}
    resizeMode='contain'
    className='w-6 h-6'
    />
    <Text className={`${focused ? 'font-psemibold' : 'font-pregular'}`}>{name}</Text>
  </View>
  )
  
}

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{tabBarShowLabel: false}}>
      <Tabs.Screen 
        name='home'
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <TabIcon
              color={color} icon={icons.home} focused={focused} name="Home"
            />
          )   
        }}
      />
      <Tabs.Screen 
        name='create'
        options={{
          title: "Create",
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <TabIcon
              color={color} icon={icons.plus} focused={focused} name="Home"
            />
          )   
        }}
      />
      <Tabs.Screen 
        name='bookmark'
        options={{
          title: "Bookmark",
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <TabIcon
              color={color} icon={icons.bookmark} focused={focused} name="Home"
            />
          )   
        }}
      />
      <Tabs.Screen 
        name='profile'
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <TabIcon
              color={color} icon={icons.profile} focused={focused} name="Home"
            />
          )   
        }}
      />
    </Tabs>

    
  )
}

export default TabsLayout