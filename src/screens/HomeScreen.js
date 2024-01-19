import { useEffect } from "react";
import { Text, View, Button } from "react-native";

export const HomeScreen = ({ navigation, route }) => {
  useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      {/* <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate("Details", {
            itemId: 100,
            otraCosa: "otra cosa",
          })
        }
      /> */}
      {/* <Button
        title="Create post"
        onPress={() => navigation.navigate("CreatePost")}
      />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text> */}

      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      />
    </View>
  );
};
