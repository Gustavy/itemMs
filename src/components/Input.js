import { Text, View, TextInput } from 'react-native'
import React  from 'react'
import { useState } from 'react'

export default Input = ({label, placeholder, autoComplete=false, autoCapitalize=false, handleChange}) => {
    const [isFocused, setisFocused] = useState(false)

    return (
      <View>
        <Text>{label}</Text>
        <TextInput
        styles={[styles.input, isFocused? styles.inputFocused : null]}
        placeholder={placeholder}
        autoComplete={autoComplete}
        autoCapitalize={autoCapitalize}
        onChange={(e)=>{handleChange(e.target.value)}}
        onBlur={() => setisFocused(false)}
        onFocus={() => setisFocused(true)}
        />

      </View>
    )
  }

  const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "#dfd6dd",
        borderRadius: 8,
        padding: 15,
        paddingLeft: 16,
        paddingRight: 8
    },

    inputFocused:{
        borderColor: "#BB23F0",
    }
  })
