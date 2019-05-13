import { createStackNavigator, createAppContainer } from "react-navigation";
import { Search, Downloaded } from './components';


const AppNavigator = createStackNavigator({
  Search: {
    screen: Search
  },
  Downloaded: {
    screen: Downloaded
  }
})
export default createAppContainer(AppNavigator);