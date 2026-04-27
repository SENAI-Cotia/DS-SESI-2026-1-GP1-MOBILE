
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Image, View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, // Esconde o texto para o visual ficar limpo
        tabBarStyle: styles.navBar,
        
        // --- ---
        tabBarActiveBackgroundColor: 'color: rgba(255, 255, 255, 0.1)'
    , // Cor quando clicado
        tabBarInactiveTintColor: '#FFFFFF', // Cor quando nao clicado
      }}
    >
      {/* 1. HOME */}
      <Tabs.Screen
        name="dashbord"
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={26} color={color} />,
        }}
      />
 
 

     

     
    </Tabs>
  );
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#000', // COR DO FUNDO DA BARRA (Preta)
    borderTopWidth: 0,
    height: 75,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  
});