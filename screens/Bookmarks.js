import React from 'react';
import {View, Text, Button, StyleSheet } from 'react-native';

const BookmarksScreen = () => {
    return (
        <View style={styles.container}>
        <Text>
            ExploreScreen
        </Text>
        <Button
            title="Click here BookmarksScreen "
            onPress={() => alert('Button Clicked')}
        />
        </View>
    )
}
export default BookmarksScreen;

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }
    }
)