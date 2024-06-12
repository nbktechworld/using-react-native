import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

import stylesSheet from './styles';

export default function App() {
  const [images, setImages] = React.useState([]);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  console.log({ images })
  console.log({ currentImageIndex })

  React.useEffect(() => {
    fetch('https://picsum.photos/v2/list').then((response) => {
      return response.json();
    }).then((images) => {
      setImages(images.slice(0, 3))
    })
  }, [])

  return (
    <View>
      <View style={{ minHeight: 400 }}>
        {images.length === 0 && <Text>Loading image...</Text>}
        {images.length > 0 && <Image
          source={{ uri: images[currentImageIndex].download_url }}
          style={{ width: 400, height: 400 }}
        />}
        <Button title="Next" onPress={() => {
          setCurrentImageIndex((currentImageIndex + 1) % images.length)
        }} />
      </View>
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
});
