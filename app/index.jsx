import { StatusBar } from "expo-status-bar";
import { Image, View, ScrollView, Text } from "react-native";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import image from "../constants/images";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full items-center justify-center h-full  px-4 ">
          <Image
            source={image.logo}
            className="h-[84px] w-[130px]"
            resizeMode="contain"
          />
          <Image
            source={image.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-7">
            <Text className="text-center font-bold text-3xl text-white">
              Discover endless possibilites with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
          </View>
          <Text className="font-pregular text-sm text-center mt-7 text-gray-100">
            Where creativity meets innovations embark on a journey of limitless
            exploration with aora
          </Text>
          <CustomButton
            title={"Continue with Email"}
            containerStyle={"w-full mt-7"}
            handlePress={() => {
              router.push("/sign-in");
            }}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
