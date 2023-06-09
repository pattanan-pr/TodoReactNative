import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import AddList from '../components/AddList'
import FirstPage from '../screens/FirstPage'
import WeatherPage from '../screens/WeatherPage'

const Stack = createStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="FirstPage">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddTodo"
        component={AddList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WeatherPage"
        component={WeatherPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}
export default HomeStack
