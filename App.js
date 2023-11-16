import { NavigationContainer } from "@react-navigation/native";
import MainTab from "./navigator/MainTab";

export default function App() {
  return (
      <NavigationContainer>
          <MainTab />
      </NavigationContainer>
  );
}
