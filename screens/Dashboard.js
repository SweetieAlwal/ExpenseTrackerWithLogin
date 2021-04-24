import React from 'react';
import { Button, View,Text } from 'react-native';


const Dashboard = ({navigation}) => {
    return (
      <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
      <Text>Dashboard</Text>
      <Button
        title="GO to DEtails chart"
        onPress={
          ()=> navigation.navigate('DetailsScreen')
        }
      />
      </View>
    );
  }
  export default Dashboard