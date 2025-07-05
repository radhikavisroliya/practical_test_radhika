import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color } from "../shared/configuration/themes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../screen/Login";
import { ms } from "react-native-size-matters";
import { images } from "../shared/configuration/images";
import EventListing from "../screen/EvetListing";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

export const Router = ({

}) => {

    const Token = useSelector((state) => state.auth.token.data.token)
    console.log('token ----12>', Token)

    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={Token ? 'Main' : 'Login'}
                    screenOptions={{ headerShown: false, gestureEnabled: false }}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Main" component={MainTabNavigator} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )

}

function MainTabNavigator() {
    return (
        <Tab.Navigator iinitialRouteName="EventListing"
            screenOptions={{
                headerShown: false,
                gestureEnabled: false,
                unmountOnBlur: true,

                tabBarActiveTintColor: Color.Black,
                tabBarInactiveTintColor: Color.Grey2,

                tabBarLabelStyle: {
                    fontSize: ms(11),
                    width: '100%',
                },
                tabBarStyle: {
                    backgroundColor: Color.White,
                    shadowColor: Color.Black,
                    shadowOffset: { width: -2, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                    elevation: 6,
                    paddingBottom: 4,
                    borderTopWidth: 0,
                },
            }}>

            <Tab.Screen name="EventListing" component={EventListing} options={{
                tabBarLabel: 'Search',
                tabBarIcon: ({ focused, color, size }) => {
                    return (
                        <Image
                            style={{ width: ms(22), height: ms(22) }}
                            resizeMode='contain'
                            source={images.icon.search}
                            tintColor={focused ? Color.Black : Color.Grey2}
                        />
                    )
                }
            }} />
            <Tab.Screen name="Events" component={EventListing} options={{
                tabBarLabel: 'Events',
                tabBarIcon: ({ focused, color, size }) => {
                    return (
                        <Image
                            style={{ width: ms(22), height: ms(22) }}
                            resizeMode='contain'
                            source={images.icon.event_listing}
                            tintColor={focused ? Color.Black : Color.Grey2}
                        />
                    )
                }
            }} />
            <Tab.Screen name="Favourites" component={EventListing} options={{
                tabBarLabel: 'Favourites',
                tabBarIcon: ({ focused, color, size }) => {
                    return (
                        <Image
                            style={{ width: ms(22), height: ms(22) }}
                            resizeMode='contain'
                            source={images.icon.Favourite}
                            tintColor={focused ? Color.Black : Color.Grey2}
                        />
                    )
                }
            }} />
            <Tab.Screen name="Profile" component={EventListing} options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ focused, color, size }) => {
                    return (
                        <Image
                            style={{ width: ms(22), height: ms(22) }}
                            resizeMode='contain'
                            source={images.icon.profile}
                            tintColor={focused ? Color.Black : Color.Grey2}
                        />
                    )
                }
            }} />
        </Tab.Navigator>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.White,
    },
})