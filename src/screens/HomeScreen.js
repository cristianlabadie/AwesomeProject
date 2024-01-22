import { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { FeedScreen } from "./FeedScreen";
import { MessageScreen } from "./MessageScreen";

const tabIcon = (route, focused, color, size) => {
	const routes = {
		Feed: {
			name: "Feed",
			iconName: "home",
			iconNameOutline: "home-outline",
		},
		Messages: {
			name: "Messages",
			iconName: "chatbox-ellipses",
			iconNameOutline: "chatbox-ellipses-outline",
		},
	};

	return (
		<Ionicons
			name={
				focused
					? routes[route.name]["iconName"]
					: routes[route.name]["iconNameOutline"]
			}
			size={size}
			color={color}
		/>
	);
};

const Tab = createBottomTabNavigator();

export const HomeScreen = ({ route }) => {
	useEffect(() => {
		if (route.params?.post) {
			// Post updated, do something with `route.params.post`
			// For example, send the post to the server
		}
	}, [route.params?.post]);
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) =>
					tabIcon(route, focused, color, size),
				tabBarActiveTintColor: "tomato",
				tabBarInactiveTintColor: "gray",
			})}
		>
			<Tab.Screen name="Feed" component={FeedScreen} />
			<Tab.Screen name="Messages" component={MessageScreen} />
		</Tab.Navigator>
	);
};
