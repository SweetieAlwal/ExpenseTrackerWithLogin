import React from 'react';
import { Button, View,Text } from 'react-native';

const DetailsScreen = ({navigation}) => {
    return (
      <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
      <Text>Dashboard</Text>
      <Button
        title="GO to details Screen"
        onPress={
          ()=> navigation.push('DetailsScreen')
        }
      />
      <Button
        title="GO to Dashboard"
        onPress={
          ()=> navigation.navigate('Dashboard')
        }
      />
      <Button
        title="GO back"
        onPress={
          ()=> navigation.goBack()
        }
      />
      <Button
        title="GO to first screen"
        onPress={
          ()=> navigation.popToTop()
        }
      />
      </View>
    );
  }
  export default DetailsScreen