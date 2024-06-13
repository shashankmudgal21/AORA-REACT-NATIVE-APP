import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import image from "../../constants/images";
import { StatusBar } from "expo-status-bar";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="justify-center  h-full mt-4 my-4 px-4">
          <Image
            source={image.logo}
            className="h-[35px] w-[115px]"
            resizeMode="contain"
          />
          <Text className="text-2xl font-psemibold text-white mt-10">
            Log into Aora
          </Text>
          <FormField
            title={"Email"}
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            extraStyle={"mt-7"}
           
            keyboardType={"email-address"}
          />
          <FormField
            title={"Password"}
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            extraStyle={"mt-7"}
          />
              <CustomButton title = {"Sign In"} containerStyle={'mt-7'}/>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default SignIn;
