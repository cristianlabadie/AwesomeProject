import { FlatList, Text, Button, StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 4,
	},
	item: {
		flexDirection: "row",
		justifyContent: "space-between",
		border: "1px solid red",
		margin: 10,
	},
});

export const MessageScreen = ({ navigation }) => {
	console.log("navigation", navigation);
	return (
		<FlatList
			data={[
				{ key: "Devin" },
				{ key: "Dan" },
				{ key: "Dominic" },
				{ key: "Jackson" },
				{ key: "James" },
				{ key: "Joel" },
				{ key: "John" },
				{ key: "Jillian" },
				{ key: "Jimmy" },
				{ key: "Julie" },
			]}
			style={styles.container}
			renderItem={({ item }) => (
				<View style={styles.item}>
					<Text style={{ margin: 10 }}>{item.key}</Text>
					<Button
						title="details"
						onPress={() =>
							navigation.push("Details", {
								itemId: Math.floor(Math.random() * 100),
							})
						}
					>
						<Ionicons name="create-outline" size={8} color={"black"} />
					</Button>
				</View>
			)}
		/>
	);
};
