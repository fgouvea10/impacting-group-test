import React, { useEffect } from "react";
import { Platform } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Page } from "../screens/Page";
import { usePage } from "../hooks/page";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const { getPages, pages } = usePage();

  useEffect(() => {
    getPages();
  }, []);

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: Platform.OS === "ios" ? 90 : 60,
          padding: Platform.OS === "android" ? 8 : 0,
        },
      }}
    >
      {pages?.length <= 0 ? (
        <Screen name="Screen Loader" component={Page} />
      ) : (
        pages?.map((page) => {
          const formattedIcon = {
            "fa-home": "home",
            "fa-building": "building",
            "fa-chat": "comments-o",
            "fa-danger": "warning",
            "fa-band-aid": "medkit",
            "fa-calendar": "calendar",
          };

          return (
            <Screen
              key={page.title}
              name={page.title}
              component={Page}
              options={{
                tabBarIcon: ({ size, color }) => (
                  <FontAwesome
                    name={formattedIcon[page.icon]}
                    size={size}
                    color={color}
                  />
                ),
              }}
            />
          );
        })
      )}
      {/* <Screen name="Screen" component={Page} />
      <Screen name="Screen2" component={Page} /> */}
    </Navigator>
  );
}
