import React from 'react';
import {View, Text, Button, StyleSheet } from 'react-native';

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
        <Text>
            ExploreScreen
        </Text>
        <Button
            title="Click here SettingsScreen "
            onPress={() => alert('Button Clicked')}
        />
        </View>
    )
}
export default SettingsScreen;

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }
    }
)