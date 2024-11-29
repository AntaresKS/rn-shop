import { Tabs } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet } from "react-native"
import { FontAwesome } from "@expo/vector-icons"

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return (
    <FontAwesome
      {...props}
      size={24}
      style={{ color: "#1BC464" }}
    />
  );
}

const TabsLayout = () => {
  return (
  <SafeAreaView edges={["top"]} style={styles.safeArea}>
    <Tabs screenOptions={{
      tabBarActiveTintColor: "#1BC464",
      tabBarInactiveTintColor: "gray",
      tabBarStyle: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 5,
      },
      headerShown: false,
    }}>
      <Tabs.Screen
          name='index'
          options={{ 
          title: 'Shop',
          tabBarIcon(props) {
            return <TabBarIcon {...props} name="shopping-cart" />;
            },
        }}
        />
        <Tabs.Screen 
          name='orders' 
          options={{
          tabBarIcon(props) {
            return <TabBarIcon {...props} name="book" />;
            },
        }} 
        />
    </Tabs>
  </SafeAreaView>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});