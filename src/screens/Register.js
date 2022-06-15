import React from 'react'
import { View } from 'react-native'
import Input from '../components/Input'

export default function Register() {
    const handleChange = (value) =>{
        console.log(value);
    }
  return (
    <View>
        <View>
            <Text>Create Account</Text>
            <Text>Fill in the details to get started</Text>
        </View>

        <Input
            label="Email"
            placeholder={"Enter your email"}
            handleChange={handleChange}
        />
    </View>
  )
}
