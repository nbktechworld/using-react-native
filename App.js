import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function App() {
  const [showText, setShowText] = React.useState(false)

  function onButtonPress() {
    if (showText) {
      setShowText(false)
    }
    else {
      setShowText(true)
    }
  }


  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://getwallpapers.com/wallpaper/full/2/1/9/699354-cute-dog-backgrounds-2560x2048-htc.jpg' }} style={{ width: 150, height: 150 }} />
      <Button title={showText ? "Hide Text" : "Show Text"} onPress={onButtonPress} />
      {showText && (
        <>
          <Text style={styles.textStyle}>Hello World</Text>
          <Text style={styles.textStyle}>Hello World</Text>
          <Text style={styles.textStyle}>Hello World</Text>
        </>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: { color: 'green', fontSize: 24 }
});
