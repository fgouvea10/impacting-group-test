import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

import { useFetch } from "./src/hooks/useFetch";
import { PageProvider } from "./src/contexts/PageContext";
import { AppRoutes } from "./src/routes/app.routes";

export default function App() {
  const { isFetching } = useFetch("/pages");

  if (isFetching) return <AppLoading />;

  return (
    <NavigationContainer>
      <PageProvider>
        <StatusBar
          backgroundColor={Platform.OS === "ios" && "#000000"}
        />
        <AppRoutes />
      </PageProvider>
    </NavigationContainer>
  );
}
