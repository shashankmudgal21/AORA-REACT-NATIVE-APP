import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title,containerStyle,handlePress , textStyles,isLoading}) => {
  return (
    <TouchableOpacity onPress = {handlePress} activeOpacity = {0.7} className = {` bg-secondary rounded-xl min-h-[60px] justify-center items-center ${containerStyle} `}
    disabled = {isLoading}
    >
      <Text className = {`${textStyles} font-psemibold text-lg text-primary`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})