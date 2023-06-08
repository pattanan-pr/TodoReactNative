import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'

const Stack = createStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}
export default HomeStack
