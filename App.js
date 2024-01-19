import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/screens/HomeScreen";
import { DetailsScreen } from "./src/screens/DetailsScreen";
import { CreatePostScreen } from "./src/screens/CreatePostScreen";
import { ProfileScreen } from "./src/screens/ProfileScreen";

const Stack = createNativeStackNavigator();

const LogoTitle = () => {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require("./assets/adaptive-icon.png")}
    />
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{ itemId: 69 }}
        />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
