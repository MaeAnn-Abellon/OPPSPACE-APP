import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router'; 
import { icons } from '../../constants'; 

// Tab Icon Component
const TabIcon = ({ icon, color, focused }) => {
  return (
    <View style={styles.iconContainer}>
      <Image
        source={icon}
        resizeMode="contain"
        style={[
          styles.icon,
          { tintColor: focused ? '#003366' : color }
        ]}
      />
    </View>
  );
};

const TabLayout = () => {
  return (
    <Tabs>
      {/* Home Tab */}
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false, 
          tabBarIcon: props => <TabIcon icon={icons.home} {...props} />
        }}
      />
      
      {/* Create Tab */}
      <Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          headerShown: false, 
          tabBarIcon: props => <TabIcon icon={icons.search} {...props} />
        }}
      />

      {/* Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false, 
          tabBarIcon: props => <TabIcon icon={icons.user} {...props} />
        }}
      />

      {/* Messaging Tab */}
      <Tabs.Screen
        name="messaging"
        options={{
          title: 'Messaging',
          headerShown: false, 
          tabBarIcon: props => <TabIcon icon={icons.conversation} {...props} />
        }}
      />
    </Tabs>
  );
};

// Styles
const styles = StyleSheet.create({
  iconContainer: {
    width: 24,
    height: 24,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default TabLayout;
