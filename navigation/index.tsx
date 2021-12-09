/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme, getFocusedRouteNameFromRoute, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import CoinDetailScreen from '../screens/CoinDetailScreen';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps, TabOneStackParamList, TabTwoStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      // linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="BottomTabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="BottomTabOne"
        component={TabOneStackScreen}
        options={{ 
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="bitcoin" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="BottomTabTwo"
        component={TabTwoStackScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="cc-mastercard" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

const TabOneStack = createNativeStackNavigator<TabOneStackParamList>()
const TabTwoStack = createNativeStackNavigator<TabTwoStackParamList>();
function TabOneStackScreen() {
  return (
    <TabOneStack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <TabOneStack.Screen 
        name="TabOne" 
        component={TabOneScreen}  
      />
      <TabOneStack.Screen 
        name="CoinDetail" 
        component={CoinDetailScreen}  
        options={({ route }) => ({
          headerShown: true,
          headerTitle: 'Coin Name here'
        })}
      />
    </TabOneStack.Navigator>
  )
}

function TabTwoStackScreen() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen name="TabTwo" component={TabTwoScreen} />
      <TabOneStack.Screen name="CoinDetail" component={CoinDetailScreen} />
    </TabTwoStack.Navigator>
  )
};

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

const getHeaderTitle = (route: RouteProp<TabOneStackParamList>) => {
  const currentRouteName = getFocusedRouteNameFromRoute(route);

  switch(currentRouteName){
    case 'CoinDetail': 
      return 
  }
};
