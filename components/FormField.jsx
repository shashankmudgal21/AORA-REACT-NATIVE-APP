import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import  icon  from "../constants/icons";

const FormField = ({
  title,
  value,
  handleChangeText,
  extraStyle,
  placeholder,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`${extraStyle} space-y-2`}>
      <Text className="text-base text-gray-300">{title}</Text>
      <View className="flex-row items-center bg-black-200  flex border-2 focus:border-secondary rounded-2xl w-full h-[60px] justify-center ">
        <TextInput
          className="font-psemibold flex-1 text-white tetx-base "
          value={value}
          placeholder={placeholder}
          placeholderTextColor={"#7b7b8b"}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}>
            <Image source={!showPassword ? icon.eye : icon.eyeHide} className = 'h-6 w-8' resizeMode="contain" />
          </TouchableOpacity>
        )}
       
      </View>
  
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({});
